import React from 'react'
import "../../App.css"
import PostCard from '../../components/PostCard'


export default function Home() {
  return (
        <>
        <PostCard
          username="JohnDoe"
          profilePicUrl='src/assets/userImg.webp'
          content="This is a sample post content."
          likes={42}
          comments={15}
          shares={8}
        />
        </>
  )
}
