import React, { useState } from "react";
import datas from "./data.json";
const Data = () => {
  const handleClick = () => {
    setData([]);
  };

  const [data, setData] = useState(datas);

  const handleRemove = (id)=>{
    setData(data.filter(item => item.id!==id))
  }

  const handleUpdate = (id)=>{
    setData(data.map(item=>{
        if(id == item.id){
            return {firstName:"Updated"}
        }else{
            return item;
        }
    }))
  }

  
  console.log(datas[0].id);
  console.log(datas[0].firstName);
  return (
    <div>
      <ul>
        {data.map((ele) => {
          return (
            <div>
              <li key={ele.id}>
                {ele.firstName}
              </li>
              {/* /*The below line will not work so we will return this from a function
              <button onClick={handleRemove(ele.id)}>Remove</button>*/}
              <button onClick={()=>handleRemove(ele.id)}>Remove</button>
              <button onClick={()=>handleUpdate(ele.id)}>Update</button>
            </div>
          );
        })}
      </ul>
      <button onClick={handleClick}>Clear</button>
    </div>
  );
};

export default Data;
