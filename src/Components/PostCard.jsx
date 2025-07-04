import React,{useNavigate} from "react";


const PostCard = ({ item }) => {
//   console.log("🚀 ~ PostCard ~ item:", item.author)
//   const navigate = useNavigate()

  const handleClick =()=>{
    // navigate(`/${item.author}/${item.author.name}`)
  }
  return (
    <>
      <div className="card w-25 mb-3" onClick={handleClick}>
        <p className="card-header">{item.title}</p>
        <p className="card-body">{item.body}</p>
        <p className="card-description">{item.tags}</p>
        <p className="">{item.author.name}</p>
      </div>
    </>
  );
};

export default PostCard;
