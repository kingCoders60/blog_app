import React from 'react'
import { PointerHighlightDemo } from '../components/PointerHighlightDemo'
import { PointerCard } from '../components/PointerCard'
import { FollowingPointer } from '../components/FollowingPointer'
import { Searchbar } from '../components/Searchbar'

function Posts() {
  return (
    <div>
      <Searchbar />
      <PointerHighlightDemo />
      <PointerCard />
      <FollowingPointer />
    </div>
  )
}

export default Posts