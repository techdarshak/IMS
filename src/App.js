import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from "./routes/Home";
import Login from "./routes/Login";
import "./index.css";
import Dashboard1 from './routes/Dashboard1';
import Tabledata from './pages/Tabledata';
import Tabledata2 from './pages/Tabledata2';
import Tabledata1 from './pages/TableData1';
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
        <Route path='/table1' element={<Tabledata1 />} />
        <Route path='/table2' element={<Tabledata2 />} />
        <Route path='/form' element={<Form />} />
        <Route path='/AddSite' element={<AddSite/>} />
      </Route>
    </Routes>
    </div>
  )
}

export default App
