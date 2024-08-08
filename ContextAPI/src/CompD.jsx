// import React from 'react'

// const CompD = (props) => {
//   return (
//     <div>Greet: {props.greet}</div>
//   )
// }

// export default CompD

import React from "react";
import { Context1, Context2 } from "./CompA";

const CompD = () => {
  return (
    <Context1.Consumer>
      {(val) => (
        <Context2.Consumer>
          {(val2) => (
            <div>
              <h1>
                {val} Good Morning {val2} <br />
                Alex Here
              </h1>
            </div>
          )}
        </Context2.Consumer>
      )}
    </Context1.Consumer>
  );
};

export default CompD;
