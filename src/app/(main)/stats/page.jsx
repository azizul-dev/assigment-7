"use client"


import ElectricBorder from '@/components/ElectricBorder';
import { TimelineContext } from '@/context/TimelineContext';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';


const Stats = () => {
    const {calls} = useContext(TimelineContext);

    const callCount = calls.filter(item => item.type === "Call").length;
    const textCount = calls.filter(item=> item.type === "Text").length;
    const videoCount = calls.filter(item => item.type === "Video").length;



    const data = [
        { name: 'Call', value: callCount, fill: '#08c082' },
        { name: 'Text', value: textCount, fill: '#00C49F' },
        { name: 'Video', value: videoCount, fill: '#FFBB28' },

    ];
    return (
        <div className='container mx-auto py-10 px-5'>
            <h2 className=' text-4xl font-bold py-10 text-center md:text-left text-[#07ba7e]'>Friendship Analytics</h2>
            <ElectricBorder>
    <div className='p-5'>
        <p className='text-xl font-bold text-gray-300 mb-4'>By Interaction Type</p>
        <div className='flex justify-center items-center'>

           
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={130}
                    cornerRadius={10}
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                />
                <Legend />
                <Tooltip />
            </PieChart>

        </div>
    </div>
</ElectricBorder>
        </div>
    );
};

export default Stats;


