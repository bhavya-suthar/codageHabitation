import React, { useState } from "react";
import { post } from "../../post.json";
import PostCard from "./PostCard";
console.log("🚀 ~ post:", post);

const Header = () => {
  const [input, setInput] = useState("");
  console.log("🚀 ~ Header ~ input:", input);

  const [posts, setposts] = useState([]);
  console.log("🚀 ~ Header ~ posts:", posts);

  const handleClick = () => {
    // if(post.map((item)=>item.author === input)){
    //   console.log("success")
    // }
    

    const query = post.filter((item)=>item.author === input?{...posts,item}:item)
    console.log("🚀 ~ handleClick ~ query:", query)
    setposts(query)
  };

  return (
    <div className="d-flex m-3 justify-content-between ">
      <div>
        <h3>Blog App</h3>
      </div>
      <div className="d-flex">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="form-control mx-2 w-50 h-full"
        />
        <button
          onClick={handleClick}
          className="btn btn-primary border-0"
          style={{ height: "50px" }}
        >
          Search
        </button>
      
      </div>
    </div>
  );
};

export default Header;
