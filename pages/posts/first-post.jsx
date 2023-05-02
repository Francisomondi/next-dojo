import React from 'react'
import myImage from "../../public/images/a.jpg"
import Image from 'next/image'

const firstPost = () => {
  return (
    <div>
     <h1>This is the first post</h1>

     <Image src={myImage}></Image>
    </div>
  )
}

export default firstPost