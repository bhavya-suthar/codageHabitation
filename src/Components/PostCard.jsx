import React from "react";
import { useNavigate } from "react-router-dom";


const PostCard = ({ item }) => {
  const navigate = useNavigate()

  const handleClick =()=>{
    navigate(`/author/${item.author.name}`)
  }
  return (
    <>
      <div className="card w-25 h-25 m-1" onClick={handleClick}>
        <p className="card-header"><span className="font-weight-bold">Title: </span>{item.title}</p>
        <p className="card-body p-2"><span className="font-weight-bold">Description: </span>{item.body}</p>
        <p className="card-body p-1"><span className="font-weight-bold">Tags: </span>#{item.tags.join(" #")}</p>
        <p className="text-primary card-body p-1" style={{cursor:"pointer"}} onClick={handleClick}><span className="font-weight-bold">Author Name: </span>{item.author.name}</p>
      </div>
    </>
  );
};

export default PostCard;
