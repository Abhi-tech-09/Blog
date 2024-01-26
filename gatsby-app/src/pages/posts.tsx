import { HeadFC } from "gatsby";
import React from "react";
import '../styles/posts.css';

const PostsPage = () => {
  return (
    <div className="h-screen flex flex-col w-full lg:flex-row">
      <div className="h-full w-1/5 border border-red-500 grid flex-grow rounded-box place-items-center">
        content
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="h-full w-4/5 border border-red-500 grid flex-grow rounded-box place-items-center">
        content
      </div>
    </div>
  );
};
export default PostsPage;
export const Head: HeadFC = () => <title>Abhi's Blog</title>;
