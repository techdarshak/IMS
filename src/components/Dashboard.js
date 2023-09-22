import "./DashboardStyles.css"
import DashboardCard from "./Dashboardcard.js"
import DashboardCardData from "./Dashboardcarddata.js"

import React from 'react'


const Dashboard = () => {
  return (
    <div className="work-container">
        <div className="dashboard">
            <h4>Dashboard</h4>
            <h3>Dashboard</h3>
        </div>
        <div className="project-container">
            {DashboardCardData.map((val, ind) => {
                return(
                    <DashboardCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text ={val.text}
                    view={val.view}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Dashboard