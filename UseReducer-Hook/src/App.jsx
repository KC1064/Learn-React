import React, { useReducer } from "react";

const App = () => {
  const reducer = (state, action) => {
    if (action.type === "incr") {
      return { count: state.count + 1 };
    } else if (action.type === "decr") {
      return { count: state.count - 1 };
    } else {
      throw new Error("Not a valid action.");
    }
  };

  const [state,dispatch] = useReducer(reducer,{count:0}); 

  const handleInc = () => {
    dispatch({ type: "incr" });
  };

  const handleDec = () => {
    dispatch({ type: "decr" });
  };

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </div>
  );
};

export default App;