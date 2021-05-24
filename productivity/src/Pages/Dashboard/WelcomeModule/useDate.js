import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import geoTz from 'geo-tz';

export const useDate = () => {
    const locale = 'en';
    const [date, setDate] = useState(new Date());
    
    const {
        latitude,
        longitude
    } = useSelector((state) => state.dashboard.location);

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);

    const time = date.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });

    const timezone = geoTz(latitude, longitude);

    return {
        date,
        time,
        timezone
    };
};