import React from 'react';

const FriendsDetailPage = async ({params}) => {
    const {id} = await params;
    console.log(id, "params");
    return (
        <div>
            This is a friends page
        </div>
    );
};

export default FriendsDetailPage;