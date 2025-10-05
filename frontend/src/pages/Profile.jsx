import React from 'react'
import { ReadWrite } from '../components/ReadWrite'
import { useDarkMode } from '../contexts/DarkModeContext'

function Profile() {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <ReadWrite />
    </div>
  )
}

export default Profile