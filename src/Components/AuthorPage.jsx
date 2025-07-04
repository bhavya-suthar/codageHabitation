import React from 'react'
import { useParams } from 'react-router-dom'
import {post} from "../../post.json"
import PostCard from './PostCard'

const AuthorPage = () => {
    const {authorname}=useParams()
    console.log("🚀 ~ AuthorPage ~ authorname:", authorname)

    const authorPost = post.filter((item)=>item.author.name.toLowerCase() === authorname.toLowerCase())
    console.log("🚀 ~ AuthorPage ~ authorPost:", authorPost)
  return (
    <div className='d-flex flex-wrap'>
        {authorPost.map((item)=>(
            <PostCard item={item}/>
        ))}
    </div>
  )
}

export default AuthorPage