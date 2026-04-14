// app/friends/[id]/page.jsx
import CallDetails from '@/components/callInfo/callsDetailBtn';
import Image from 'next/image';
import React from 'react';
import { FaArchive, FaHandshake, FaVideo } from 'react-icons/fa';
import { FiEdit, FiPhone } from 'react-icons/fi';
import { HiBellSnooze } from 'react-icons/hi2';
import { IoMdText } from 'react-icons/io';
import { IoTime } from 'react-icons/io5';
import { MdAddCall, MdDeleteSweep, MdMissedVideoCall } from 'react-icons/md';


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
        className: "text-white border border-[#EFAD44]",
        style: { backgroundColor: "#EFAD44" }
    };
    return { className: "text-white", style: { backgroundColor: "#D1D5DB" } };
};

const FriendsDetailPage = async ({ params }) => {
    const res = await fetch("https://assignment-7-swart-one.vercel.app/data.json");
    const friends = await res.json();
    const { id } = await params;
    const friend = friends.find((friend) => friend.id == id);

    return (
        <div className='min-h-screen bg-[#f0f4f3] p-4 md:p-6 '>

            <div
                style={{ maxWidth: '1400px', margin: '0 auto' }}
                className='grid grid-cols-1 md:grid-cols-12 gap-6'
            >


                <div className='md:col-span-4 flex flex-col gap-4'>

                    <div className='bg-white rounded-xl shadow p-6 flex flex-col items-center gap-2'>
                        <Image
                            src={friend.picture}
                            alt={friend.name}
                            width={96}
                            height={96}
                            className='rounded-full object-cover w-24 h-24'
                        />
                        <h2 className='font-bold text-xl'>{friend.name}</h2>
                        <span
                            className={`text-xs px-3 py-1 rounded-full font-semibold capitalize ${getStatusStyle(friend.status).className}`}
                            style={getStatusStyle(friend.status).style}
                        >
                            {friend.status}
                        </span>

                        <div className='flex flex-wrap justify-center gap-1'>
                            {friend.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className='text-green-700 text-xs px-3 py-1 rounded-full uppercase font-medium'
                                    style={{ backgroundColor: "#DCFCE7" }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className='text-sm text-gray-500 italic text-center'>
                            {friend.bio}
                        </p>
                        <p className='text-sm text-gray-500'>
                            Preferred: {friend.email}
                        </p>
                    </div>


                    <div className='bg-white rounded-xl shadow divide-y'>
                        <button className='w-full text-sm p-4 hover:bg-gray-50 flex items-center justify-center gap-2'>
                            <HiBellSnooze /> Snooze 2 Weeks
                        </button>
                        <button className='w-full flex items-center justify-center gap-2 text-sm p-4 hover:bg-gray-50'>
                            <FaArchive /> Archive
                        </button>
                        <button className='w-full text-sm p-4 flex items-center justify-center gap-2 text-red-500 hover:bg-gray-50'>
                            <MdDeleteSweep /> Delete
                        </button>
                    </div>

                </div>

                <div className='md:col-span-8 flex flex-col gap-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                        <div className='bg-white rounded-xl shadow p-4 text-center'>
                            <h3 className='text-3xl font-bold text-[#244D3F]'>
                                {friend.days_since_contact}
                            </h3>
                            <p className='text-sm text-gray-400 mt-1'>
                                Days Since Contact
                            </p>
                        </div>

                        <div className='bg-white rounded-xl shadow p-4 text-center'>
                            <h3 className='text-3xl font-bold text-[#244D3F]'>
                                {friend.goal}
                            </h3>
                            <p className='text-sm text-gray-400 mt-1'>
                                Goal (Days)
                            </p>
                        </div>

                        <div className='bg-white rounded-xl shadow p-4 text-center'>
                            <h3 className='text-xl font-bold text-[#244D3F]'>
                                {new Date(friend.next_due_date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}
                            </h3>
                            <p className='text-sm text-gray-400 mt-1'>
                                Next Due
                            </p>
                        </div>
                    </div>


                    <div className='bg-white rounded-xl shadow p-5'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-bold text-lg'>Relationship Goal</h3>
                            <button className='border text-sm px-3 py-1 rounded-md hover:bg-gray-50'>
                                Edit
                            </button>
                        </div>
                        <p className='text-gray-500 mt-2'>
                            Connect every <strong>{friend.goal} days</strong>
                        </p>
                    </div>


                    {/* <div className='bg-white rounded-xl shadow p-5'>
                        <h3 className='font-bold text-lg mb-3'>Quick Check-In</h3>
                        <div className='grid grid-cols-3 gap-3'>
                            <button className='border rounded-xl py-4 flex flex-col items-center gap-1 hover:bg-gray-50'>
                                <span className='text-xl'><MdAddCall /></span>
                                <span className='text-sm'>Call</span>
                            </button>
                            <button className='border rounded-xl py-4 flex flex-col items-center gap-1 hover:bg-gray-50'>
                                <span className='text-xl'><IoMdText /></span>
                                <span className='text-sm'>Text</span>
                            </button>
                            <button className='border rounded-xl py-4 flex flex-col items-center gap-1 hover:bg-gray-50'>
                                <span className='text-xl'><MdMissedVideoCall /></span>
                                <span className='text-sm'>Video</span>
                            </button>
                        </div>
                    </div> */}
                    <CallDetails friend={friend}/>


                    <div className='bg-white rounded-xl shadow p-5'>
                        <div className='flex justify-between items-center mb-3'>
                            <h3 className='font-bold text-lg'>Recent Interactions</h3>
                            <button className='border text-sm px-3 py-1 rounded-md hover:bg-gray-50 flex gap-1 items-center'>
                                <IoTime /> Full History
                            </button>
                        </div>

                        {friend.interactions?.length > 0 ? (
                            friend.interactions.map((item, i) => (
                                <div
                                    key={i}
                                    className='flex items-center justify-between py-3 border-b last:border-b-0 gap-3'
                                >
                                    <div className='flex items-center gap-3'>
                                        <span>
                                            {item.type === 'Text' ? <IoMdText /> :
                                                item.type === 'Meetup' ? <FaHandshake /> :
                                                    item.type === 'Call' ? <MdAddCall /> :
                                                        item.type === 'Video' ? <FaVideo /> : <FiEdit />}
                                        </span>
                                        <div>
                                            <p className='text-sm font-medium'>{item.type}</p>
                                            <p className='text-xs text-gray-400'>{item.note}</p>
                                        </div>
                                    </div>
                                    <span className='text-xs text-gray-400'>
                                        {new Date(item.date).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <p className='text-sm text-gray-400'>
                                No recent interactions found.
                            </p>
                        )}
                    </div>

                </div>

            </div>

        </div>
    );
};

export default FriendsDetailPage;