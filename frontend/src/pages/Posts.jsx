import React, { useState, useEffect } from "react";
import WritePost from "../components/WritePost.jsx";
import { useAuth } from "@clerk/clerk-react";
import { Snowflake, UserCircle2, ChevronDown, ChevronUp } from "lucide-react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [expandedPostId, setExpandedPostId] = useState(null);
  const { getToken } = useAuth();
  useEffect(() => {
    fetch("http://localhost:5001/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts || []))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

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

  const toggleExpand = (postId) => {
    setExpandedPostId((prevId) => (prevId === postId ? null : postId));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        <div className="flex items-center space-x-2 pb-4 border-b border-blue-200 dark:border-blue-800">
          <Snowflake className="w-8 h-8 text-blue-500 dark:text-blue-300" />
          <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-50">
          </h1>
        </div>

        <WritePost onSubmit={handlePostSubmit} />

        {posts.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No posts yet. Be the first to write!
          </p>
        ) : (
          posts.map((post) => {
            const isExpanded = post._id === expandedPostId;
            return (
              <div
                key={post._id}
                onClick={() => toggleExpand(post._id)}
                // 🔑 KEY CHANGE: Added focus/active/tap color control
                className="
                  bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl 
                  border border-blue-200 dark:border-blue-700 shadow-lg  dark:shadow-blue-900/50 
                  relative transition-all duration-300 cursor-pointer 
                  hover:shadow-xl hover:shadow-blue-200/80 
                  focus:outline-none focus:ring-2 focus:ring-blue-300 
                  active:bg-blue-50/90 dark:active:bg-gray-700/90   
                ">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-xl font-extrabold text-blue-600 dark:text-blue-300 flex-1 pr-4">
                    {post.title}
                  </h2>

                  <div className="flex flex-col items-end space-y-1">
                    <div className="flex items-center space-x-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                      <UserCircle2 className="w-4 h-4" />
                      <span>{post.authorName || "Anonymous"}</span>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-blue-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-blue-500" />
                    )}
                  </div>
                </div>

                <p
                  className={`mt-2 text-gray-700 dark:text-gray-300 leading-relaxed transition-all duration-300 overflow-hidden ${
                    isExpanded ? "max-h-full" : "max-h-16 line-clamp-2"
                  }`}>
                  {post.content}
                </p>

                {post.createdAt && (
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-3 border-t border-blue-100 dark:border-blue-800 pt-2">
                    Posted: {new Date(post.createdAt).toLocaleString()}
                  </p>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Posts;
