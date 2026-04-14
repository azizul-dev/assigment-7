import React from 'react';
import FriendsList from '../FriendsList/FriendsList';

const Friends = async () => {
    const res = await fetch("http://localhost:3000/data.json");
    const friends = await res.json();
    return (
        <div className=' container mx-auto'>
            <h2 className=' font-bold text-2xl'>Your Friends</h2>
            <FriendsList friends={friends}/>
        </div>
    );
};

export default Friends;