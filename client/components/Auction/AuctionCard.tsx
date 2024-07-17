import Image from 'next/image';
import React from 'react';

const AuctionCard = ({ id, imageUrl, title, currentPrice, originalPrice, rating, reviewsCount }: { id: number, imageUrl: string, title: string, currentPrice: number, originalPrice: number, rating: number, reviewsCount: number }) => {
    return (
        <div key={id} className="py-5 px-10">
            <div className="shadow-md rounded-md overflow-hidden">
                <div className='relative'>
                    <p className='absolute top-0 left-5 bg-red-700 animate-pulse text-white py-1 px-2  rounded-md text-sm'>Live</p>
                    <div className='m-12'>
                        <Image src={imageUrl} alt={title} className="w-full h-48 object-cover" />
                        
                    </div>
                </div>
                <hr className='h-0.5 w-[70%] mx-auto bg-black'/>
                <div className="p-4 md:p-8 flex justify-between items-center">
                    <div className='basis-2/3'>
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <div className='flex gap-x-3'>
                            <p className="text-gray-500 line-through">${originalPrice}</p>
                            <p className="text-green-500 font-semibold">${currentPrice}</p>
                        </div>
                        <div className="flex items-center">
                            <div className="text-yellow-500">
                                {'★'.repeat(rating)}
                                {'☆'.repeat(5 - rating)}
                            </div>
                            <span className="ml-2 text-gray-600">({reviewsCount} reviews)</span>
                        </div>
                    </div>
                    <button className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md basis-1/3">
                        Explore
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuctionCard;
