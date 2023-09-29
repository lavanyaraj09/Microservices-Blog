import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <div >
    <Header />
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
      
    </div>
    <Footer />
    </div>
  );
};
export default App;
