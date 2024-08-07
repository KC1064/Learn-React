import Reac,{useState} from 'react'

const MultipleStatesToOneState = () => {
    // const [name,setName] = useState("");
    // const [email,setEmail] = useState("");
    // const [Pass,Password] = useState("");

    const [form,setForm] = useState({
        name:'',
        email:'',
        password:'',
    })

    const handleInput = () => {
        const{name,value} = e.target;
        setForm({...form,[name]:value})
        // console.log(name,value);
    }
    // const ChangeName = (e)=>{
    //     setName(e.target.value);
    // }

    // const ChangeMail = (e)=>{
    //     setName(e.target.value);
    // }

    // const ChangePass = (e)=>{
    //     setName(e.target.value);
    // }

    const handleSubmit = ()=>{
        e.preventDefault();
        console.log(form);
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" onChange={handleInput}/>
            <br/>
            <label>Email:</label>
            <input type="email" name="email" onChange={handleInput}/>
            <br/>
            <label>Password:</label>
            <input type="password" name="password" onChange={handleInput}/>
            <br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}


export default MultipleStatesToOneState