import React, { useState } from "react";

function WritePost({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onSubmit({ title, content });
      setTitle("");
      setContent("");
    } else {
      alert("Please fill in both the title and content.");
    }
  };

  return (
    // Main container for the full-page layout
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <form
        onSubmit={handleSubmit}
        // Inner container to manage content width and padding
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full flex flex-col">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Create Post
          </h2>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
            Publish
          </button>
        </div>

        {/* Writing Area */}
        <div className="flex-grow flex flex-col space-y-6">
          {/* Title Input */}
          <div>
            <label htmlFor="post-title" className="sr-only">
              Title
            </label>
            <input
              id="post-title"
              type="text"
              placeholder="Post Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full bg-transparent text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
            />
          </div>

          {/* Content Textarea */}
          <div className="flex-grow">
            <label htmlFor="post-content" className="sr-only">
              Content
            </label>
            <textarea
              id="post-content"
              placeholder="Write your story here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full h-full bg-transparent text-lg text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none resize-none"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default WritePost;
