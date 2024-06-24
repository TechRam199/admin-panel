import React from 'react'
import  "./prodchart.css"
import { Tooltip,Bar,Legend,XAxis,BarChart,CartesianGrid } from 'recharts'

import { chartData } from '../../Dummydata'

const ProdChart = () => {
  return (
    <div className='prodchart'> 
<BarChart width={730} height={250} data={chartData}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <XAxis/>
  <Tooltip />
  <Legend />
  <Bar dataKey="Sale" fill="#8884d8" />
  <Bar dataKey="qty" fill="#82ca9d" />
</BarChart>
    </div>
  )
}

export default ProdChart
