import React,{useState,useEffect} from "react";
import './Example.css'
const Example = () => {

    const [clicked,SetClicked] = useState('');
    const [name,setName] = useState('');
    useEffect(()=>{
        if(clicked === "Fear of fog"){
            setName("Nebulaphobia");
        }else if(clicked === "A quilt with a design inspired by quantum mechanics"){
            setName("Quantumquilt");
        }else if(clicked === "Plants that emit light naturally"){
            setName("Luminaflora");
        }else{
            setName("");
        }
        console.log(clicked);
    },[clicked])
  return (
    <div className="example">
      <div className="btn">
        <button onClick={()=>{
            SetClicked("Fear of fog")
            
        }}>Nebulaphobia</button>
        <button onClick={()=>{
            SetClicked("A quilt with a design inspired by quantum mechanics")
            
        }}>Quantumquilt</button>
        <button onClick={()=>{
            SetClicked("Plants that emit light naturally")
        }}>Luminaflora</button>
        <div className="remark">{clicked}</div>
        <div className="effect">USEEFFECT: {name}</div>
      </div>
    </div>
  );
};

export default Example;