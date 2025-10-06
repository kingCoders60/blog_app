import { useAuth, SignedOut, SignInButton } from "@clerk/clerk-react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreatePost = () => {
  const { getToken, userId } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tag: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await getToken();

      await axios.post("http://localhost:5001/api/posts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("🎉 Post Created! Let the party begin!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        icon: "🥳",
      });

      setTimeout(() => {
        navigate("/posts");
      }, 3000);
    } catch (error) {
      console.error("Error creating post:", error);

      toast.error("❌ Failed to create post. Try again!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return (
    // Added 'relative' to act as a positioning anchor for the overlay
    <div className="relative max-w-xl mx-auto mt-10 p-6 border rounded shadow-lg dark:border-gray-700">
      {/* The overlay for signed-out users */}
      <SignedOut>
        <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm flex flex-col items-center justify-center rounded-lg z-10 text-white text-center p-4">
          <span className="text-5xl mb-4">🔒</span>
          <h3 className="text-xl font-bold mb-2">Sign in to Create a Post</h3>
          <p className="mb-6">Join the community to share your thoughts!</p>
          <SignInButton mode="modal">
            <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
              Sign In
            </button>
          </SignInButton>
        </div>
      </SignedOut>

      {/* The form is always rendered underneath, but is only interactive for signed-in users */}
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="border p-2 rounded dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
          required
          className="border p-2 rounded h-40 dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="tag"
          placeholder="Tag (optional)"
          value={formData.tag}
          onChange={handleChange}
          className="border p-2 rounded dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {userId ? (
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Submit Post
          </button>
        ) : (
          <button
            type="button"
            disabled
            className="bg-gray-500 text-white py-2 rounded flex items-center justify-center gap-2 cursor-not-allowed">
            Submit Post
          </button>
        )}
      </form>
    </div>
  );
};

export default CreatePost;
