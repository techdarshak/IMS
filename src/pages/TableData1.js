
import React,{useState,useEffect} from 'react'
import '../../src/Table.css'
import { Link ,useNavigate } from 'react-router-dom'
import axios from 'axios'

const url = "https://jsonplaceholder.typicode.com/posts"

const Tabledata1 = () => {
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
<>
<h1 className='heading'></h1>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg ml-44 top1">
<div className='bg-white mb-12' >
<h1 className='text-6xl bg-white-600 p-6'>Products</h1>
</div>
<div className='bg-white '>
<div className=''>
<Link to='/AddSite' className='text-white bg-blue-700  font-medium  text-sm px-6 py-4 text-center b1'>Add Site</Link>
</div>
<h1 className='mb-8 ml-4 text-2xl'>Products</h1>
<div>
<table class="table">
  <thead>
    <tr>
      <th scope="col"><input type='checkbox'></input></th>
      <th scope="col">First</th>
      <th scope="col">Middle</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><input type='checkbox'></input></th>
      <td>Mark</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row"><input type='checkbox'></input></th>
      <td>Jacob</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row"><input type='checkbox'></input></th>
      <td>Larry</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
    </div>
</div>
</>

  )
}

export default Tabledata1