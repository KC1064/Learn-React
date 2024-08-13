import React, { useState, useTransition } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [lists, setLists] = useState([]);

  const [isPending, setTransition] = useTransition();

  const LIST_SIZE = 10000;

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInput(value);

    const datalist = [];
    setTransition(() => {
      for (let i = 0; i < LIST_SIZE; i++) {
        datalist.push(value);
      }
      setLists(datalist);
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      {lists.map((lists, index) => {
        return <p key={index}>{lists}</p>;
      })}
    </div>
  );
};

export default App;
