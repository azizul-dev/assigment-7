"use client";



import React, { createContext, useState } from 'react';

export { TimelineContext }

const TimelineContext = createContext();
const TimelineProvider = ({children}) => {
    const [calls, setCalls] = useState([]);
    const data = {
        calls,
        setCalls,
    };
    return (
        <TimelineContext.Provider value={data}>
            {children}
        </TimelineContext.Provider>
    );
};

export default TimelineProvider;