import React, { useContext } from 'react';
import { LineChart,AreaChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, PolarGrid } from 'recharts';
import { CatagoryContext } from '../../Layout/Root';

const Statistics = () => {
    const itesm= useContext(CatagoryContext)
 return (
    <div className='m-auto mt-20'>
        <h2 className='text-center text-4xl font-bold'>Quiz Total Analytics</h2>
    <ResponsiveContainer width='80%'height={500}>
         <AreaChart className='m-10' width={700}height={500} data={itesm}>
             <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
            
             <XAxis dataKey="name" />
             <YAxis dataKey="total"/>
             <Tooltip></Tooltip>
            </AreaChart>
    </ResponsiveContainer>
    </div>
   
    
    );
};

export default Statistics;