import { HeadFC } from "gatsby";
import React from "react";
import "../styles/posts.css";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/content-board/Content";
import PostList from "../components/content-board/PostList";


const PostsPage = () => {
  return (
    <div className="h-screen flex flex-col w-full lg:flex-row">
      <div className="h-full w-1/5 rounded-box">
        <Sidebar/>
      </div>
      <div className="divider lg:divider-horizontal py-4"></div>
      <div className="h-full w-4/5 grid flex-grow rounded-box place-items-center">
        <PostList />
      </div>
    </div>
  );
};

export default PostsPage;
export const Head: HeadFC = () => <title>Abhi's Blog</title>;
