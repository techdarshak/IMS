
import React, { useEffect, useState } from 'react'
//import Dashboard from '../components/Dashboard'
import Dashboard1 from './Dashboard1'
import { Link } from 'react-router-dom'
import axios from 'axios'

const url = "https://jsonplaceholder.typicode.com/posts"

const Home2 = () => {
  const [users,setUsers] = useState([]);
  const fetchData = async () =>{
    try{
      const res = await axios.get(url);
      const data = res.data;
      setUsers(data);
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div>
        {users.map((item)=>{
          return <h1>{item.title}</h1>
        })}
    </div>
  )
}


export default Home2