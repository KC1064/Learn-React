import React,{ useState, useEffect } from 'react'
import './Fetch.css'


const MultipleReturn = () => {
    const [users, setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
  
    useEffect(() => {
        async function fetchusers(){
            try{
                const response = await fetch("https://api.github.com/users");
                const data = await response.json();
                setUsers(data);
                setLoading(false);
            }catch(error){
                setError(error.message);
                setLoading(false);
            }

        }
        

        fetchusers();
    }, []);

    if(loading){
        return <div>Loading...</div>;
    }

    if(error){
        return <div>Error: {error.message}</div>;
    }
  
    return (
      <div className="canvas">
        {users.map((user) => {
          return (
            <div className="main" key={user.id}>
              <a href={user.html_url}>{user.login}</a>
            </div>
          );
        })}
      </div>
    );
  };

export default MultipleReturn