"use client";

import React from 'react';
import { PacmanLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
           <PacmanLoader color='#08c082' size={30} />

        </div>
    );
};

export default Loading;