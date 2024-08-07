import React, { useState, useEffect } from "react";
import "./Fetch.css";

const Fetch = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="canvas">
      {users.map((user) => {
        return (
          <div className="main" key={user.id}>
            <a href={user.html_url}>{user.login}</a>
          </div>
        );
      })}
    </div>
  );
};

export default Fetch;
