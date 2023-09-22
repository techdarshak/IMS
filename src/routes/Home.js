import React, { useEffect, useState } from 'react'
//import Dashboard from '../components/Dashboard'
import Dashboard1 from './Dashboard1'
import { Link } from 'react-router-dom'
import axios from 'axios'

const url = "https://jsonplaceholder.typicode.com/posts"

const Home = () => {
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
    Hello
    </div>
  )
}


export default Home