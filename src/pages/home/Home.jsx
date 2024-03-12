import React from 'react'
import "../../App.css"
import PostCard from '../../components/PostCard'


export default function Home() {
  
  //fetch current user's data
  const currentUser = {
    username: 'JohnDoe',
    profilePicUrl: 'src/assets/userImg.webp',
  };

  return (
        <>
        <PostCard
          currentUser={currentUser}
          username="JohnDoe"
          profilePicUrl="src/assets/userImg.webp"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed libero in tellus hendrerit aliquam. Nulla facilisi. Quisque in arcu id metus tristique tincidunt. Sed auctor odio id mi bibendum, ac eleifend libero laoreet. Nullam nec lectus ut mauris tempor hendrerit. Sed vel sapien ac sapien pellentesque volutpat. Vivamus eu arcu vel tellus laoreet tristique ac vel velit. Integer efficitur tincidunt ligula vel consequat. Curabitur ut justo vel libero blandit fermentum id at augue. In in hendrerit libero, eget volutpat odio."
          likes={42}
          comments={15}
          shares={8}
        />

        <PostCard
          currentUser={currentUser}
          username="JohnDoe"
          profilePicUrl="src/assets/userImg.webp"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed libero in tellus hendrerit aliquam. Nulla facilisi. Quisque in arcu id metus tristique tincidunt. Sed auctor odio id mi bibendum, ac eleifend libero laoreet. Nullam nec lectus ut mauris tempor hendrerit. Sed vel sapien ac sapien pellentesque volutpat. Vivamus eu arcu vel tellus laoreet tristique ac vel velit. Integer efficitur tincidunt ligula vel consequat. Curabitur ut justo vel libero blandit fermentum id at augue. In in hendrerit libero, eget volutpat odio."
          likes={26}
          comments={16}
          shares={7}
      />

      <PostCard
        currentUser={currentUser}
        username="Doggo"
        profilePicUrl='src/assets/dog.jpg'
        content="This is a sample post content."
        likes={32}
        comments={11}
        shares={3}
      />
      <PostCard
        currentUser={currentUser}
        username="Pussy"
        profilePicUrl='src/assets/cat.webp'
        content="This is a sample post content."
        likes={33}
        comments={10}
        shares={5}
      />
      <PostCard
        currentUser={currentUser}
        username="JohnDoe"
        profilePicUrl='src/assets/userImg.webp'
        content="This is a sample post content."
        likes={12}
        comments={9}
        shares={2}
      />
      </>
  )
}
