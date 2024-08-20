import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]); 
  

  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then(function (response) {
        setData(response.data); 
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []); 

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.login}</div>
      ))}
    </div>
  );
};

export default App;
