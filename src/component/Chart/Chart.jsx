<<<<<<< HEAD
import React from 'react'
import  Style from "./Chart.module.css"
import { ResponsiveContainer,Line,XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart } from 'recharts';



function Chart({data, title , dataKey, grid }) {

  return (
    <div className={Style.Containor}>
       <h3 className="chartTitle">{title}</h3>
=======
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart({title ,data,dataKey , grid}) {
 
  
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
>>>>>>> origin/main
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
<<<<<<< HEAD
    
    </div> 
  )
}

export default Chart
=======
    </div>
  );
}

// export {title,data, dataKey , CartesianGrid , }
export default Chart;
>>>>>>> origin/main
