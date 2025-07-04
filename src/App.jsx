import "./App.css";
import { post } from "../post.json";
import Header from "./Components/Header";
import PostCard from "./Components/PostCard";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AuthorPage from "./Components/AuthorPage";
console.log("🚀 ~ post:", post);

function App() {
  const [filteredBlog, setFilteredBlog] = useState(post);
  console.log("🚀 ~ App ~ filteredBlog:", filteredBlog);
  return (
    <div>
      <Header setFilteredBlog={setFilteredBlog} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="d-flex flex-wrap mx-3">
              {filteredBlog.map((item) => (
                <PostCard item={item} key={item.id} />
              ))}
            </div>
          }
        />
        <Route path="/author/:authorname" element={<AuthorPage />} />
      </Routes>
    </div>
  );
}

export default App;
