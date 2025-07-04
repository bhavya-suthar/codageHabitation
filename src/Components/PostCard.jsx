import React from "react";
import { useNavigate } from "react-router-dom";


const PostCard = ({ item }) => {
  const navigate = useNavigate()

  const handleClick =()=>{
    navigate(`/author/${item.author.name}`)
  }
  return (
    <>
      <div className="card w-25 m-3" onClick={handleClick}>
        <p className="card-header"><span className="font-weight-bold">Title: </span>{item.title}</p>
        <p className="card-body"><span className="font-weight-bold">Description: </span>{item.body}</p>
        <p className="card-body"><span className="font-weight-bold">Tags: </span>#{item.tags}</p>
        <p className="text-primary card-body" style={{cursor:"pointer"}} onClick={handleClick}><span className="font-weight-bold">Author Name: </span>{item.author.name}</p>
      </div>
    </>
  );
};

export default PostCard;
