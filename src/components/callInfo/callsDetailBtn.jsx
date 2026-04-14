"use client";

import React, { useContext } from 'react';
import { IoMdText } from 'react-icons/io';
import { MdAddCall, MdMissedVideoCall } from 'react-icons/md';
import { TimelineContext } from '@/context/TimelineContext';
import { toast } from 'react-toastify';

const CallDetails = ({ friend }) => {

    const { calls, setCalls } = useContext(TimelineContext);

    const handleCheck = (type) => {
        const newCall = {
            ...friend,
            type: type,
            date: new Date().toISOString()
            
        };

        setCalls([...calls, newCall]);

        // 🔥 TOAST
    if (type === "Call") toast.success("📞 Call logged!");
    if (type === "Text") toast.info("💬 Text sent!");
    if (type === "Video") toast("📹 Video call added!");
        
    };

    return (
        <div>
            <div className='bg-white rounded-xl shadow p-5'>
                <h3 className='font-bold text-lg mb-3'>Quick Check-In</h3>
                <div className='grid grid-cols-3 gap-3'>
                    <button onClick={() => handleCheck("Call")} className='border rounded-xl py-4 flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-50'>
                        <span className='text-xl'><MdAddCall /></span>
                        <span className='text-sm'>Call</span>
                    </button>
                    <button onClick={() => handleCheck("Text")} className='border rounded-xl py-4 flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-50'>
                        <span className='text-xl'><IoMdText /></span>
                        <span className='text-sm'>Text</span>
                    </button>
                    <button onClick={() => handleCheck("Video")} className='border cursor-pointer rounded-xl py-4 flex flex-col items-center gap-1 hover:bg-gray-50'>
                        <span className='text-xl'><MdMissedVideoCall /></span>
                        <span className='text-sm'>Video</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CallDetails;