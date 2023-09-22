import "./DashboardStyles.css"
import pro1 from "../assests/billing (1).png"
import React from 'react'
import { NavLink } from "react-router-dom"

const DashboardCard = (props) => {
  return (
    <div>
        <div className="project-card">
                <div className="alignimg">
                    <img src={props.imgsrc} alt="image"/>
                </div>
                 <div className="content">
                    <h2 className="project-title">{props.title}</h2>
                   <div className="pro-details">
                    <p>{props.text}</p>
                   </div>    
                </div>       
        </div>
        <div className="project-card">
                <div className="alignimg">
                    <img src={props.imgsrc} alt="image"/>
                </div>
                 <div className="content">
                    <h2 className="project-title">{props.title}</h2>
                   <div className="pro-details">
                    <p>{props.text}</p>
                   </div>    
                </div>       
        </div>
    </div>
  )
}

export default DashboardCard