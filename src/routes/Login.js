import React from 'react'
import './LoginStyles.css'
import img1 from '../assests/login.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='container'>
      <div className='leftcontainer'>
        <div className='left'>
         <p className='largetext'>SIGN IN</p>
         <h2 className='smalltext'>Sign in to continue our application</h2>
         <div className='form'>
         <div><input placeholder="youremail@gmail.com" className='mb-6 p-2'></input></div>
         <div><input  placeholder="Password" className='p-2'></input></div>
         <Link to= '/Dashboard1' className='btn-blue'>Sign in</Link>
        </div>
        </div>
      </div>
      <div className='right'>
        <img className='into-img' src={img1}/>
      </div>
    </div>
  )
}

export default Login