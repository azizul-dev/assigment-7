
import React from 'react';
import FriendsList from './FriendsList';

const FriendsData = async () => {
    const res = await fetch("http://localhost:3000/data.json");
    const friends = await res.json();
    return <FriendsList friends={friends} />;
};

export default FriendsData;