import React from "react";
import { DirectLinks, Categories } from "../../constants/constants";

const Sidebar = () => {
  return (
    <div className="py-4">
      <div className="direct-links space-y-4 text-center  my-4 py-4">
        {DirectLinks.map((linkObj) => (
          <div>
            <a href={`${linkObj.link}`}>{linkObj.label}</a>
          </div>
        ))}
      </div>
      <div className="divider px-4"></div>
      <div className="category-container text-center">
        <p className="text-xl">Categories</p>
        <div className="category-list-container px-2 mt-2 space-y-4 overflow-y-scroll scroll-content">
          {Categories.map((category) => (
            <div
              style={{ background: "rgba(255, 255, 255, 0.03)" }}
              className="badge badge-md mx-1 cursor-pointer"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
