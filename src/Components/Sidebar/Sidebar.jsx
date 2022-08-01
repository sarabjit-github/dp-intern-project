import React, { useState } from "react";
import "./sidebar.css";

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <>
      <div className="sidebar" style={{left: showSidebar ? "0px": "-160px"}}>
        <div className="s-header">
          <p style={{visibility: showSidebar ? "visible": "hidden"}}>Journey board</p>
          <div className="ham-menu" onClick={()=>setShowSidebar(!showSidebar)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <nav className="s-nav" style={{display: showSidebar ? "flex": "none"}}>
          <ol>
            <li>
              <h3>Demo task</h3>
            </li>
          </ol>
          <ul>
            <li>task heading 1</li>
            <li>task heading 2</li>
            <li>task heading 3</li>
            <li>task heading 4</li>
            <li>task heading 5</li>
            <li>task heading 6</li>
            <li>task heading 7</li>
            <li>task heading 8</li>
          </ul>
        </nav>
      </div>
    </>
  );
};
