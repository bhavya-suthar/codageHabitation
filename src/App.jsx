import "./App.css";
import { post } from "../post.json";
import Header from "./Components/Header";
import PostCard from "./Components/PostCard";
console.log("🚀 ~ post:", post);

function App() {
  return (
    <div>
      <Header />
      <div>
        {post.map((item) => (
          <PostCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
