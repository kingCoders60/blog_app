import React, { useState } from "react";
import { PointerHighlightDemo } from "../components/PointerHighlightDemo";
import { PointerCard } from "../components/PointerCard";
import { FollowingPointer } from "../components/FollowingPointer";
import { Searchbar } from "../components/Searchbar";
import  WritePost  from "../components/WritePost.jsx";
import React from 'react'
import { PointerHighlightDemo } from '../components/PointerHighlightDemo'
import { PointerCard } from '../components/PointerCard'
import { FollowingPointer } from '../components/FollowingPointer'
import { Searchbar } from '../components/Searchbar'
import { useDarkMode } from '../contexts/DarkModeContext'

function Posts() {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = async (post) => {
    try {
      const response = await fetch("http://localhost:5001/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      if (!response.ok) {
        throw new Error("Failed to submit post");
      }

      const savedPost = await response.json();
      setPosts((prevPosts) => [...prevPosts, savedPost]);
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  const { isDarkMode } = useDarkMode();
  return (
    <div className="posts-page">
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <Searchbar />
      <WritePost onSubmit={handlePostSubmit} />

      <div className="post-list">
        {posts.map((post, index) => (
          <div key={index} className="post-item">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

      <PointerHighlightDemo />
      <PointerCard />
      <FollowingPointer />
    </div>
  );
}

export default Posts;
