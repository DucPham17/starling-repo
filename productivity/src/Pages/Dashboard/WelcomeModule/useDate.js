import React, { useEffect, useState } from 'react';

export const useDate = () => {
    const locale = 'en';
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);

    const time = date.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });

    return {
        date,
        time
    };
};