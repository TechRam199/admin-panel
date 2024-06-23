import React from 'react'
import  Style from "./Chart.module.css"
import { ResponsiveContainer,Line,XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart } from 'recharts';



function Chart({data, title , dataKey, grid }) {

  return (
    <div className={Style.Containor}>
       <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd"></XAxis>
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd"  />
          <Tooltip />
         {grid &&  <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          <Legend/>
          <YAxis/>
        </LineChart>
      </ResponsiveContainer>
    
    </div> 
  )
}

export default Chart
