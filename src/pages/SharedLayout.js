
import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import Dashboard1 from '../routes/Dashboard1'

const SharedLayout = () => {
  return (
    <div>
        <Dashboard1 />
        <Outlet />
    </div>
  )
}

export default SharedLayout