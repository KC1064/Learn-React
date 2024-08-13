import React, { useState } from "react";
import "./Fetch.css";
import useFetch from "./UseFetch";

const Fetch = () => {
  const [users] = useFetch();
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container">
      <button className="get" onClick={handleButtonClick}>
        {isVisible ? "Hide Users" : "Get Users"}
      </button>
      <div className="canvas" style={{ display: isVisible ? "block" : "none" }}>
        {users.map((user) => {
          return (
            <div className="main" key={user.id}>
              <a href={user.html_url}>{user.login}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fetch;
