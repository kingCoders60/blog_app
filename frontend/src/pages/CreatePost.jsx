import { useAuth, SignedIn, SignedOut } from "@clerk/clerk-react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { getToken } = useAuth(); // 👈 get Clerk token
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
      const token = await getToken(); // or getToken({ template: "backend" })
      console.log("Frontend token:", token); // 👈 Confirm it's not undefined

      await axios.post("http://localhost:5001/api/posts", formData, {
        headers: {
          Authorization: `Bearer ${token}`, // 👈 Send token to backend
        },
      });

      navigate("/posts");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post");
    }
  };


  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow">
      <SignedIn>
        <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
          <textarea
            name="content"
            placeholder="Content"
            value={formData.content}
            onChange={handleChange}
            required
            className="border p-2 rounded h-40"
          />
          <input
            type="text"
            name="tag"
            placeholder="Tag (optional)"
            value={formData.tag}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Submit Post
          </button>
        </form>
      </SignedIn>

      <SignedOut>
        <p className="text-center text-gray-500">
          Please sign in to create a post.
        </p>
      </SignedOut>
    </div>
  );
};

export default CreatePost;
