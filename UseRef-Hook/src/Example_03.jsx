import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Example_03 = () => {
  const element = useRef(null);

//   useEffect(() => {
//     element.current.focus();
//   }, []);

function handleFocus (){
    element.current.style.backgroundColor = 'salmon';
}

function handleBlur() {
    element.current.style.backgroundColor = '';
}
  return (
    <div>
      <input
        ref={element}
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Example_03;


