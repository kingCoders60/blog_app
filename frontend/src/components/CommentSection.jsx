import React, { useState, useEffect } from "react";
import { useAuth, useUser, SignedIn } from "@clerk/clerk-react";

function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { getToken } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    fetch(`http://localhost:5001/api/comments?postId=${postId}`)
      .then((res) => res.json())
      .then((data) => setComments(data.comments || []));
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await getToken();
    if (!token) return alert("Please sign in to comment.");

    const res = await fetch("http://localhost:5001/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content: newComment, postId }),
    });

    const saved = await res.json();
    setComments((prev) => [...prev, saved]);
    setNewComment("");
  };

  const handleDelete = async (commentId) => {
    const token = await getToken();
    await fetch(`http://localhost:5001/api/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setComments((prev) => prev.filter((c) => c._id !== commentId));
  };

  return (
    <div className="mt-4">
      <h4 className="font-semibold mb-2">Comments</h4>
      {comments.map((comment) => (
        <div key={comment._id} className="mb-2 p-2 bg-black rounded">
          <p>{comment.content}</p>
          <small className="text-black-500">
            {new Date(comment.createdAt).toLocaleString()}
          </small>
          {comment.author === user?.id && (
            <button
              onClick={() => handleDelete(comment._id)}
              className="ml-2 text-red-500 text-sm">
              Delete
            </button>
          )}
        </div>
      ))}

      <SignedIn>
        <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="flex-1 border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-black px-4 py-2 rounded">
            Post
          </button>
        </form>
      </SignedIn>
    </div>
  );
}

export default CommentSection;
