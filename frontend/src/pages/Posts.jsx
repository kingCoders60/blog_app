import React from 'react'
import { PointerHighlight } from '../components/PointerHighlight'
import { PointerCard } from '../components/PointerCard'
import { FollowingPointer } from '../components/FollowingPointer'
import { Searchbar } from '../components/Searchbar'

function Posts() {
  return (
    <div>
      <Searchbar />
      <PointerHighlight />
      <PointerCard />
      <FollowingPointer />
    </div>
  )
}

export default Posts