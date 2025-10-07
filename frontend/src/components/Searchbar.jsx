"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function Searchbar() {
  const placeholders = [
    "What is Blogs and how does it work?",
    "Do I need coding knowledge to write on Blogs?",
    "Can I earn money from my articles on Blogs?",
    "Is Blogs free to use?",
    "Can I import my articles from other platforms?",
    "How can I build my audience on Blogs?",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2
        className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Ask Blog AI Anything
      </h2>
      <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
    </div>
  );
}
