import React, { useState, useEffect } from "react";
import WritePost from "../components/WritePost.jsx";
import { useAuth } from "@clerk/clerk-react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const { getToken } = useAuth();

  // Fetch posts on load
  useEffect(() => {
    fetch("http://localhost:5001/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts || []))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  // Handle new post submission
  const handlePostSubmit = async (post) => {
    try {
      const token = await getToken();
      if (!token) throw new Error("User is not authenticated.");

      const response = await fetch("http://localhost:5001/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(post),
      });

      if (!response.ok) throw new Error("Failed to submit post");

      const savedPost = await response.json();
      setPosts((prevPosts) => [savedPost, ...prevPosts]);
    } catch (error) {
      console.error("Error submitting post:", error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        <WritePost onSubmit={handlePostSubmit} />

        {posts.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No posts yet. Be the first to write!
          </p>
        ) : (
          posts.map((post) => (
            <div
              key={post._id}
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow relative">
              {/* Author name in top-right corner */}
              <span className="absolute top-4 right-4 text-sm font-semibold text-black dark:text-white">
                {post.authorName}
              </span>

              {/* Post title */}
              <h2 className="text-xl font-bold text-black dark:text-black">
                {post.title}
              </h2>

              {/* Post content */}
              <p className="mt-2 font-bold text-black dark:text-black">
                {post.content}
              </p>

              {/* Timestamp */}
              {post.createdAt && (
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(post.createdAt).toLocaleString()}
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Posts;
