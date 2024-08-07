import React,{useState} from 'react'

const MultipleStates = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [Pass,Password] = useState("");

    const ChangeName = (e)=>{
        setName(e.target.value);
    }

    const ChangeMail = (e)=>{
        setName(e.target.value);
    }

    const ChangePass = (e)=>{
        setName(e.target.value);
    }

    const handleSubmit = ()=>{
        e.preventDefault();
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="" id="" onChange={ChangeName}/>
            <br/>
            <label>Email:</label>
            <input type="email" name="" id="" onChange={ChangeMail}/>
            <br/>
            <label>Password:</label>
            <input type="password" name="" id="" onChange={ChangePass}/>
            <br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default MultipleStates