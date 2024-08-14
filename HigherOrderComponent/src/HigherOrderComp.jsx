import React,{useState} from "react";

const HigherOrderComp = (Og_Comp) => {
  const Enhanced_comp = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    return (
        <Og_Comp func={increment} cnt={count}/>
    )
  };
  return Enhanced_comp;
};

export default HigherOrderComp;
