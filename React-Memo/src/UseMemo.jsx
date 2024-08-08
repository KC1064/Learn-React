import React, { useState, useMemo, useCallback } from "react";
import "./memo.css";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  let sum = 0;
  const res = useMemo(function slowfunction() {
    for (let i = 0; i < 100000000; i++) {}
    console.log("Slows down your PC.");
  }, []);
  const result = useCallback(function slowfunction() {
    for (let i = 0; i < 100000000; i++) {}
    console.log("Slows down your PC.");
  }, []);

  function handleInput(e) {
    setInput(e.target.value);
  }
  return (
    <div>
      <div>
        <button onClick={() => setCount(count + 1)}>Count is {count}</button>
      </div>
      <hr />
      <input type="text" value={input} onChange={handleInput} />
      <h1>Input: {input}</h1>
      <h1>{res}</h1>
      <p>{console.log(result)}</p>
      <p>
        The difference between useEffect and useMemo is useMemo returns a value
        but useEffect doesnot. Whereas useCallback returns the complete
        function.
      </p>
    </div>
  );
};

export default UseMemo;
