"use client";

export { TimelineContext }

import React, { createContext, useState } from 'react';

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