import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from "./routes/Home";
import Login from "./routes/Login";
import "./index.css";
import Dashboard1 from './routes/Dashboard1';
import Tabledata from './pages/Tabledata';
import SharedLayout from './pages/SharedLayout';
import Form from './pages/Form';
import AddSite from './pages/AddSite';
import Home2 from './routes/Home2';

function App () {
  
  return (
    <div>
    <Routes>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/home2' element={<Home2 />} />
    <Route path='/' element={<SharedLayout />}>
    <Route index element={<Home />} />
        <Route path='/Dashboard1' element={<Dashboard1/>}/>
        <Route path='/table' element={<Tabledata />} />
        <Route path='/form' element={<Form />} />
        <Route path='/AddSite' element={<AddSite/>} />
      </Route>
    </Routes>
    </div>
  )
}

export default App
