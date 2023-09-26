import React, { useState } from 'react'
import './LoginStyles.css'
import img1 from '../assests/login.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [data,setData] = useState({
    email:"",
    password:""
  })

const handleChange = (e) =>{
  const details = { ...data, [e.target.name]: e.target.value };
  setData(details);
}
const handleSubmit = (e) =>{
  e.preventDefault()
  if(!data.email || !data.password){
    console.log("error logging in")
    return;
  }
  navigate('/Dashboard1')
}
  return (
    <form onSubmit={handleSubmit}>    
    <div className='container'>
      <div className='leftcontainer'>
        <div className='left'>
         <p className='largetext'>SIGN IN</p>
         <h2 className='smalltext'>Sign in to continue our application</h2>
         <div className='form'>
         <div><input type='email' placeholder="youremail@gmail.com" className='mb-6 p-2' name='email' value={data.email} onChange={handleChange}></input></div>
         <div><input type='password' placeholder="Password" className='p-2' name='password' value={data.password} onChange={handleChange}></input></div>
         <button type='submit' className='btn-blue'>Sign in</button>
        </div>
        </div>
      </div>
      <div className='right'>
        <img className='into-img' src={img1}/>
      </div>
    </div>
    </form>
  )
}

export default Login