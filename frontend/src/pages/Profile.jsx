import React, { useEffect, useState } from "react";
import { ReadWrite } from "../components/ReadWrite";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useUser } from "@clerk/clerk-react";

function Profile() {
  const { isDarkMode } = useDarkMode();
  const { user } = useUser();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    if (user) {
      fetch("http://localhost:5001/api/posts")
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.posts.filter((post) => post.author === user.id);
          setUserPosts(filtered);
        });
    }
  }, [user]);

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 min-h-screen p-6">
      {user && (
        <div className="flex items-center gap-4 mb-6">
          <img
            src={user.imageUrl}
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">{user.fullName}</h2>
            <p className="text-gray-500">
              {user.emailAddresses[0].emailAddress}
            </p>
          </div>
        </div>
      )}


      <h3 className="text-lg font-bold mt-8 mb-4">Your Posts</h3>
      {userPosts.length === 0 ? (
        <p className="text-gray-500">You haven’t written any posts yet.</p>
      ) : (
        userPosts.map((post) => (
          <div
            key={post._id}
            className="bg-black-100 p-4 rounded-lg shadow mb-4">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="mt-1">{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Profile;
