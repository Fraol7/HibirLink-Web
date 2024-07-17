import React from 'react';
import Countdown from 'react-countdown';

const renderer = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="text-center">
            <div className="text-gray-700 mb-2">Live bid starting in</div>
            <div className="flex justify-center space-x-2 mb-4">
                <div>
                    <div className="text-2xl font-bold">{days}</div>
                    <div className="text-gray-500">Days</div>
                </div>
                <div className="text-2xl font-bold">:</div>
                <div>
                    <div className="text-2xl font-bold">{hours}</div>
                    <div className="text-gray-500">Hours</div>
                </div>
                <div className="text-2xl font-bold">:</div>
                <div>
                    <div className="text-2xl font-bold">{minutes}</div>
                    <div className="text-gray-500">Minutes</div>
                </div>
                <div className="text-2xl font-bold">:</div>
                <div>
                    <div className="text-2xl font-bold">{seconds}</div>
                    <div className="text-gray-500">Seconds</div>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md mb-2">Register for Bid</button>
                <button className="border border-gray-400 text-gray-700 py-2 px-4 rounded-md">Add to Calendar</button>
            </div>
        </div>
    );
};

const CountdownCard = () => {
    const countdownDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); 
    return (
        <div className="flex-2 my-auto p-6 bg-blue-50 rounded-md shadow-md">
            <Countdown date={countdownDate} renderer={renderer} />
        </div>
    );
};

export default CountdownCard;
