import "./App.css";
import { post } from "../post.json";
import Header from "./Components/Header";
import PostCard from "./Components/PostCard";
import { useState } from "react";
console.log("🚀 ~ post:", post);

function App() {
  const [filteredBlog, setFilteredBlog] = useState(post);
  console.log("🚀 ~ App ~ filteredBlog:", filteredBlog)
  return (
    <div>
      <Header setFilteredBlog={setFilteredBlog} />
      <div className="d-flex flex-wrap gap-3 m-3">
        {filteredBlog.map((item) => (
          <PostCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
