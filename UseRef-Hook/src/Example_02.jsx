import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const Example_02 = () => {
  //   const [count, setCount] = useState(0);
  const count = useRef(0);

  const handle = () => {
    // setCount(count + 1);
    count.current= count.current+1;
    console.log("Count: "+count.current);
  };

  useEffect(() => {
    console.log("The component has been rendered.");
  });

  return (
    <div>
      <button onClick={handle}>Count:{count.current}</button>
    </div>
  );
};

export default Example_02;
