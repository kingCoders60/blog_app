// src/pages/Posts.jsx
import React, { useState, useEffect } from "react";
import { PointerHighlightDemo } from "../components/PointerHighlightDemo";
import { PointerCard } from "../components/PointerCard";
import { FollowingPointer } from "../components/FollowingPointer";
import { Searchbar } from "../components/Searchbar";
import WritePost from "../components/WritePost.jsx";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useAuth } from "@clerk/clerk-react"; 

function Posts() {
  const [posts, setPosts] = useState([]);
  const { isDarkMode } = useDarkMode();
  const { getToken } = useAuth(); 

  useEffect(() => {
    
    fetch("http://localhost:5001/api/posts") // Changed port to 5001 for consistency
      .then((res) => res.json())
      .then((data) => setPosts(data.posts || []))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  // Handle new post submission
  const handlePostSubmit = async (post) => {
    try {
    
      const token = await getToken();

      if (!token) {
        throw new Error("User is not authenticated. Please log in.");
      }

      const response = await fetch("http://localhost:5001/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // ---> 4. Add the Authorization header to the request
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(post),
      });

      if (!response.ok) {
        // Better error handling for auth failures
        if (response.status === 401) {
          throw new Error(
            "Authentication failed. Your session may have expired."
          );
        }
        throw new Error("Failed to submit post");
      }

      const savedPost = await response.json();
      setPosts((prevPosts) => [savedPost, ...prevPosts]); // Add new post to the top
    } catch (error) {
      console.error("Error submitting post:", error);
      // Here you could add UI feedback, e.g., a toast notification
      alert(error.message);
    }
  };

  return (
    <div
      className={`posts-page bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 min-h-screen`}>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        <Searchbar />
        <WritePost onSubmit={handlePostSubmit} />

        {posts.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No posts yet. Be the first to write!
          </p>
        ) : (
          <div className="space-y-4">
            {posts.map(
              (
                post // Use post._id or a unique key if available
              ) => (
                <div
                  key={post._id || post.id} // Using a unique ID from the data is better than index
                  className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="mt-2">{post.body}</p>
                  {post.timestamp && (
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(post.timestamp).toLocaleString()}
                    </p>
                  )}
                </div>
              )
            )}
          </div>
        )}

        <PointerHighlightDemo />
        <PointerCard />
        <FollowingPointer />
      </div>
    </div>
  );
}

export default Posts;
