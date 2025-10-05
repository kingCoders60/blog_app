import React, { useState } from "react";
import { PointerHighlightDemo } from "../components/PointerHighlightDemo";
import { PointerCard } from "../components/PointerCard";
import { FollowingPointer } from "../components/FollowingPointer";
import { Searchbar } from "../components/Searchbar";
import  WritePost  from "../components/WritePost.jsx";

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

  return (
    <div className="posts-page">
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
