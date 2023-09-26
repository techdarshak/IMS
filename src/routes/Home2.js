
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
       <table class="table mx-auto w-50 h-50" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
    </tr>
  </thead>

  {users.map((item)=>{
    return <tr key={item.id}>
    <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
  })}
</table>
    </div>
  )
}


export default Home2