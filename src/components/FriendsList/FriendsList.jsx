"use client";

import Image from 'next/image';
import React from 'react';


const getStatusStyle = (status) => {
    if (status === "overdue") return {
        className: "text-white border border-[#EF4444]",

        style: { backgroundColor: "#EF4444" }
    };
    if (status === "on-track") return {
        className: "text-white",
        style: { backgroundColor: "#244D3F" }
    };
    if (status === "almost due") return {
        className: " text-white border border-[#EFAD44]",
        style: { backgroundColor: "#EFAD44" }
    };
    return { className: "text-white", style: { backgroundColor: "#D1D5DB" } };
};

const FriendsList = ({ friends }) => {
    return (

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 container mx-auto p-4'>
            {friends.map((friend, index) => (

                <div key={index} className='bg-white shadow-md rounded-xl p-5 flex flex-col items-center gap-2 space-y-4'>


                    <Image
                        src={friend.picture}
                        alt={friend.name}
                        width={80}
                        height={80}
                        className='rounded-full object-cover'
                    />


                    <h3 className='font-bold text-lg text-center'>{friend.name}</h3>


                    <p className='text-sm text-gray-400'>{friend.days_since_contact}d ago</p>

                    <div className='flex flex-wrap justify-center items-center gap-3'>
                        {friend.tags.map((tag, i) => (
                            <span
                                key={i}
                                // ✅ bg-green-100 সরিয়ে style দিয়ে background দাও
                                className='text-green-700 p-2 rounded-md uppercase'
                                style={{ backgroundColor: "#DCFCE7" }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <span
                        className={`text-xs px-4 py-1 rounded-full font-semibold capitalize ${getStatusStyle(friend.status).className}`}
                        style={getStatusStyle(friend.status).style}
                    >
                        {friend.status}
                    </span>

                </div>
            ))}
        </div>
    );
};

export default FriendsList;