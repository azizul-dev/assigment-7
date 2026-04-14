"use client";

import React, { useContext } from 'react';
import { IoMdText } from 'react-icons/io';
import { MdAddCall, MdMissedVideoCall } from 'react-icons/md';
import { TimelineContext } from '@/context/TimelineContext';

const CallDetails = ({friend}) => {

    const {calls, setCalls} = useContext(TimelineContext);

    const handleCheck = () =>{
        setCalls([...calls, friend]);
        console.log("check")
        
    }

    return (
        <div>
            <div className='bg-white rounded-xl shadow p-5'>
                <h3 className='font-bold text-lg mb-3'>Quick Check-In</h3>
                <div className='grid grid-cols-3 gap-3'>
                    <button onClick={handleCheck} className='border rounded-xl py-4 flex flex-col items-center gap-1 hover:bg-gray-50'>
                        <span className='text-xl'><MdAddCall /></span>
                        <span className='text-sm'>Call</span>
                    </button>
                    <button onClick={handleCheck} className='border rounded-xl py-4 flex flex-col items-center gap-1 hover:bg-gray-50'>
                        <span className='text-xl'><IoMdText /></span>
                        <span className='text-sm'>Text</span>
                    </button>
                    <button onClick={handleCheck} className='border rounded-xl py-4 flex flex-col items-center gap-1 hover:bg-gray-50'>
                        <span className='text-xl'><MdMissedVideoCall /></span>
                        <span className='text-sm'>Video</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CallDetails;