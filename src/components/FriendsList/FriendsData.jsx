
import React from 'react';
import FriendsList from './FriendsList';

const FriendsData = async () => {
    const res = await fetch("https://assignment-7-swart-one.vercel.app/", { cache: "no-store" });
    const friends = await res.json();
    return <FriendsList friends={friends} />;
};

export default FriendsData;