
"use client";

import { TimelineContext } from '@/context/TimelineContext';
import React, { useContext } from 'react';

const Banner = ({friends}) => {

    const {calls} = useContext(TimelineContext);

    const totalFriends = friends.length;

    const onTrack = friends.filter(friend => friend.status === "on-track").length;


    const needAttention = totalFriends - onTrack;
    const interactionsThisMonth = calls.length;

    return (
        <div className=' p-5 container mx-auto py-10 space-y-3 bg-[#ffffff]'>
            <div className=' text-center  space-y-3'>
                <h2 className='text-3xl font-bold text-[#244D3F]'>Friends to keep close in your life</h2>
                <p className='text-gray-500'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.</p>
                    <button className=' bg-[#244D3F] text-white py-2 px-4 rounded-md'>+ Add a Friend</button>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 '>
                <div className='  p-4 w-full justify-center py-6 flex flex-col items-center  bg-white border border-gray-100 shadow-md rounded-xl'>
                    <h2>{totalFriends}</h2>
                    <p>Total Friends</p>
                </div>
                <div className='p-4 w-full py-6 flex justify-center flex-col items-center   bg-white border border-gray-100 shadow-md rounded-xl'>
                    <h2>{onTrack}</h2>
                    <p>On Track</p>
                </div>
                <div className='  p-4 w-full py-6 flex justify-center  flex-col items-center  bg-white border border-gray-100 shadow-md rounded-xl'>
                    <h2>{needAttention}</h2>
                    <p>Need Attention</p>
                </div>
                <div className='  p-4 w-full  justify-center py-6 flex flex-col items-center  bg-white border border-gray-100 shadow-md rounded-xl'>
                    <h2>{interactionsThisMonth}</h2>
                    <p>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;