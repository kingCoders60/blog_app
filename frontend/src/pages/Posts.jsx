import React from 'react'
import { PointerHighlightDemo } from '../components/PointerHighlightDemo'
import { PointerCard } from '../components/PointerCard'
import { FollowingPointer } from '../components/FollowingPointer'
import { Searchbar } from '../components/Searchbar'
import { useDarkMode } from '../contexts/DarkModeContext'

function Posts() {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <Searchbar />
      <PointerHighlightDemo />
      <PointerCard />
      <FollowingPointer />
    </div>
  )
}

export default Posts