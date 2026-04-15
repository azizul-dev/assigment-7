"use client";



import React, { createContext, useState } from 'react';

const TimelineContext = createContext();
export { TimelineContext };

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