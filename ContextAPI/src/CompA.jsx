// Problem With ContextAPI
// import React from "react";
// import CompB from "./CompB";
// const CompA = () => {
//     const text = "Hello";
//   return <CompB greet={text}/>;
// };

// export default CompA;
import React, { createContext } from "react";
import CompB from "./CompB";

const Context1 = createContext();
const Context2 = createContext();
const text1 = "Hello";
const text2 = "Hii";

const CompA = () => {
  return (
    <Context1.Provider value={text1}>
      <Context2.Provider value={text2}>
        <CompB></CompB>
      </Context2.Provider>
    </Context1.Provider>
  );
};

export default CompA;
export { Context1, Context2 };
