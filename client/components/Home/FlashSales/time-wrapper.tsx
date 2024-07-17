"use client";
import React, { useState, useEffect, useRef } from 'react';

const TimeWrapper = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [partyTime, setPartyTime] = useState(false);
    const countDownDate = useRef(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
        const now = new Date();
        countDownDate.current = new Date();
        countDownDate.current.setDate(now.getDate() + (7 - now.getDay()) % 7);
        countDownDate.current.setHours(18, 0, 0, 0);

        const difference = countDownDate.current.getTime() - now.getTime();

        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setDays(d);
        setHours(h);
        setMinutes(m);
        setSeconds(s);

        if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
        setTimeout(() => {setPartyTime(false)}, 3600000);
        }
    }, 1000);

    return () => clearInterval(interval);
    }, []);

    const roundedDate = new Date(Math.round(countDownDate.current.getTime() / 60000) * 60000);
    const dateWords = roundedDate.toString().split(' ');

    return (
        <div className="text-2xl font-mono flex flex-col space-x-4 gap-2">
            {partyTime ? <div className="flex space-x-1 m-4 items-center"><h1 className="text-center">It's time for Flash Sales!</h1></div> : null}
            <div className="flex flex-row m-4">
                <div className='flex flex-col items-center'>
                    <p className="font-inter font-semibold text-sm text-[#546177] opacity-[0.8]">Days</p>
                    <div className="font-bold text-[#546177] font-inter rounded-md px-2 text-3xl p-1">{Math.floor(days/10)}{days%10}</div>
                </div>
                <div className="text-[#E07575] font-mono my-auto text-3xl pt-4">:</div>
                <div className='flex flex-col items-center'>
                    <p className="font-inter font-semibold text-sm text-[#546177] opacity-[0.8]">Hours</p>
                    <div className="font-bold text-[#546177] font-inter rounded-md px-2 text-3xl p-1">{Math.floor(hours/10)}{hours%10}</div>
                </div>
                <div className="text-[#E07575] font-mono my-auto text-3xl pt-4">:</div>
                <div className='flex flex-col items-center'>
                    <p className="font-inter font-semibold text-sm text-[#546177] opacity-[0.8]">Minutes</p>
                    <div className="font-bold text-[#546177] font-inter rounded-md px-2 text-3xl p-1">{Math.floor(minutes/10)}{minutes%10}</div>
                </div>
                <div className="text-[#E07575] font-mono my-auto text-3xl pt-4">:</div>
                <div className='flex flex-col items-center'>
                    <p className="font-inter font-semibold text-sm text-[#546177] opacity-[0.8]">Seconds</p>
                    <div className="font-bold text-[#546177] font-inter rounded-md px-2 text-3xl p-1">{Math.floor(seconds/10)}{seconds%10}</div>
                </div>
            </div>
        </div>    
    );
};

export default TimeWrapper;
