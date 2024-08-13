import React, { useState } from "react";
import "./Fetch.css";
import useFetch from "./UseFetch";

const Fetch = () => {
  const [users] = useFetch();
  const [showCanvas, setShowCanvas] = useState(false);

  const handleButtonClick = () => {
    setShowCanvas(true);
  };

  return (
    <div className="container">
      <button className="get" onClick={handleButtonClick}>Get Users</button>
      {showCanvas && (
        <div className="canvas">
          {users.map((user) => {
            return (
              <div className="main" key={user.id}>
                <a href={user.html_url}>{user.login}</a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Fetch;
