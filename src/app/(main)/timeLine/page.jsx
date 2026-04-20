"use client";

import React, { useContext, useState } from 'react';
import { TimelineContext } from '@/context/TimelineContext';
import { IoMdText } from 'react-icons/io';
import { MdAddCall, MdMissedVideoCall } from 'react-icons/md';
import { FaHandshake } from 'react-icons/fa';
import ElectricBorder from '@/components/ElectricBorder';


const TimelinePage = () => {

    const { calls } = useContext(TimelineContext);


    const [open, setOpen] = useState(false);

    const [filter, setFilter] = useState("All");

    const getIcon = (type) => {
        if (type === "Text") return <IoMdText />;
        if (type === "Call") return <MdAddCall />;
        if (type === "Video") return <MdMissedVideoCall />;
        if (type === "Meetup") return <FaHandshake />;

    };
    const filteredCalls = filter === "All" ? calls :
        calls.filter(item => item.type === filter);



    return (
        <div className="min-h-screen  p-6">
            <div className="max-w-2xl mx-auto">

                <h1 className="text-2xl font-bold mb-4">Timeline</h1>
                <div className="min-h-screen p-6">
                    <div className="max-w-2xl mx-auto">

                        <h1 className="text-2xl font-bold mb-4">Timeline</h1>


                        <div className="mb-4 flex items-start gap-2">

                            {open && (
                                <div className="flex flex-col border  z-10 bg-gray-800 electric-glow">
                                    <p onClick={() => { setFilter("All"); setOpen(false); }}
                                        className="px-4 py-2 hover:bg-gray-600 cursor-pointer">All</p>
                                    <p onClick={() => { setFilter("Call"); setOpen(false); }}
                                        className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Call</p>
                                    <p onClick={() => { setFilter("Text"); setOpen(false); }}
                                        className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Text</p>
                                    <p onClick={() => { setFilter("Video"); setOpen(false); }}
                                        className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Video</p>
                                </div>
                            )}

                            <div
                                onClick={() => setOpen(!open)}
                                className="flex-1  electric-glow rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer"
                            >
                                <span>{filter}</span>
                                <span>⌄</span>
                            </div>

                        </div>


                        {calls.length === 0 && (
                            <p className="">No interactions yet</p>
                        )}

                        {filteredCalls.map((item, index) => (
                            <ElectricBorder key={index}>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full shadow">
                                        {getIcon(item.type)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">
                                            <span className="font-semibold">{item.type}</span> with {item.name}
                                        </p>
                                        <p className="text-xs">
                                            {new Date(item.date).toLocaleDateString('en-US', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </ElectricBorder>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default TimelinePage;