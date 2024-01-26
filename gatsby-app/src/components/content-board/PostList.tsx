import React from "react";
import { postList } from "../../constants/constants";

const PostList = () => {
  return (
    <>
      <div className="w-full text-right px-20">
        <div className="btn-group">
            <button className="p-4">English</button>
            <button className="p-4">Hindi</button>
        </div>
      </div>
      <div className="scroll-content overflow-y-scroll h-full w-full px-20">
        {postList.map((post) => (
          <div
            style={{ background: "rgba(255, 255, 255, 0.03)" }}
            className="p-5 space-y-2 my-2"
          >
            <p className="text-2xl">{post.title}</p>
            <p>
              {post.createdAt} &nbsp;&nbsp; Last updated: {post.lastUpdated}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostList;
