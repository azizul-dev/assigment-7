"use client"


import { TimelineContext } from '@/context/TimelineContext';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

// import { RechartsDevtools } from '@recharts/devtools';

// export const metadata = {
//     title: "KeenKeeper | Stats Page",
// };

const Stats = () => {
    const {calls} = useContext(TimelineContext);

    const callCount = calls.filter(item => item.type === "Call").length;
    const textCount = calls.filter(item=> item.type === "Text").length;
    const videoCount = calls.filter(item => item.type === "Video").length;



    const data = [
        { name: 'Call', value: callCount, fill: '#0088FE' },
        { name: 'Text', value: textCount, fill: '#00C49F' },
        { name: 'Video', value: videoCount, fill: '#FFBB28' },

    ];
    return (
        <div className='container mx-auto py-10 px-5'>
            <h2 className=' text-4xl font-bold py-10 text-center md:text-left'>Friendship Analytics</h2>
            <div className=' flex justify-center items-center shadow p-10 rounded-md border-slate-200 border'>
                <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                    <Pie
                        data={data}
                        innerRadius="60%"
                        outerRadius="80%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    {/* <RechartsDevtools /> */}
                    <Legend />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default Stats;


