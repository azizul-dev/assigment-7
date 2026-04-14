"use client";

import React, { useContext, useState } from 'react';
import { TimelineContext } from '@/context/TimelineContext';
import { IoMdText } from 'react-icons/io';
import { MdAddCall, MdMissedVideoCall } from 'react-icons/md';
import { FaHandshake } from 'react-icons/fa';


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
        <div className="min-h-screen bg-[#f0f4f3] p-6">
            <div className="max-w-2xl mx-auto">

                <h1 className="text-2xl font-bold mb-4">Timeline</h1>
                <div className="mb-4 relative">

                    <div
                        onClick={() => setOpen(!open)}
                        className="w-full bg-white border rounded-xl px-4 py-3 flex justify-between items-center shadow-sm cursor-pointer"
                    >
                        <span className="text-gray-500">{filter}</span>
                        <span>⌄</span>
                    </div>

                    {
                        open && (
                            <div className="absolute mt-2 w-full bg-white border rounded-xl shadow-md z-10">
                                <p
                                    onClick={() => {
                                        setFilter("All");
                                        setOpen(false);
                                    }}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    All
                                </p>

                                <p
                                    onClick={() => {
                                        setFilter("Call");
                                        setOpen(false);
                                    }}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    Call
                                </p>

                                <p
                                    onClick={() => {
                                        setFilter("Text");
                                        setOpen(false);
                                    }}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    Text
                                </p>

                                <p
                                    onClick={() => {
                                        setFilter("Video");
                                        setOpen(false);
                                    }}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    Video
                                </p>
                            </div>
                        )
                    }

                </div>


                {
                    calls.length === 0 && (
                        <p className="text-gray-500">No interactions yet</p>
                    )
                }


                {
                    filteredCalls.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 bg-gray-50 border rounded-xl p-4 mb-3"
                        >
                            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow">
                                {getIcon(item.type)}
                            </div>

                            <div>
                                <p className="text-sm font-medium text-gray-700">
                                    <span className="font-semibold">{item.type}</span> with {item.name}
                                </p>
                                <p className="text-xs text-gray-400">
                                    {new Date(item.date).toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default TimelinePage;