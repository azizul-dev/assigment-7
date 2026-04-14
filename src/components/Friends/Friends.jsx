import React, { Suspense } from 'react';
import FriendsData from '../FriendsList/FriendsData';
import { PacmanLoader } from 'react-spinners';

const Friends = () => {
    return (
        <div className='container mx-auto'>

            <Suspense fallback={
                <div className='flex justify-center items-center py-20'>
                    <PacmanLoader color='#244D3F' size={30} />
                </div>
            }>
                <FriendsData />
            </Suspense>
        </div>
    );
};

export default Friends;