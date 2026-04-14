
import React from 'react';
import FriendsList from './FriendsList';

const FriendsData = async () => {
    const res = await fetch("/data.json", { cache: "no-store" });
    const friends = await res.json();
    return <FriendsList friends={friends} />;
};

export default FriendsData;