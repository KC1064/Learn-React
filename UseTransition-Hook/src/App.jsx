import React, { useState, useTransition } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [lists, setLists] = useState([]);

  const [isPending, setTransition] = useTransition();

  const LIST_SIZE = 50000;

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInput(value);

    setTransition(() => {
      const datalist = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        datalist.push(value);
      }
      setLists(datalist);
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      {
        isPending ? (
          <div>Loading</div>
        ) : (
          lists.map((list, index) => {
            return <p key={index}>{list}</p>;
          })
        )
      }
    </div>
  ); 
};
export default App;
