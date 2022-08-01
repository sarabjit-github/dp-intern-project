import React, { useState } from "react";
import "./task.css";

export const Task = ({ assetTitle, assetDesc, assetDesc2 }) => {
  const [isCollapse, setIsCollapse] = useState(true);

  return (
    <div className="task-container">
      <div className="task-heading">
        <p>{assetTitle}</p>
      </div>
      <div className="task-content">
        <div className="t-content-1">
          <p>{assetDesc}</p>
        </div>
        <div
          className="t-content-2"
          style={{ display: isCollapse ? "none" : "block" }}
        >
          <p>{assetDesc2}</p>
        </div>
        <div className="arr-container">
          <div
            className="arrow-icon"
            style={{
              transform: isCollapse ? "rotate(0deg)" : "rotate(180deg)",
            }}
            onClick={() => setIsCollapse(!isCollapse)}
          ></div>
        </div>
      </div>
    </div>
  );
};
