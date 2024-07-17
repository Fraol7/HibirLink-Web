"use client";
import React, { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import Image from 'next/image';

const FAQ = () => {
    const [expandedItem, setExpandedItem] = useState(null);

    const handleAccordionClick = (value:any) => {
        if (expandedItem === value) {
            setExpandedItem(null); // Collapse if clicking again
        } else {
            setExpandedItem(value);
        }
    };

    return (
        <div className="flex flex-wrap gap-20 justify-between mt-20 mb-20 p-5 sm:pl-40 sm:pr-40">
            <div className='faq-container flex justify-center w-full md:w-auto'>
                <div style={{ position: 'relative' }} className="bg-primary h-70 w-60 text-white p-5 rounded-lg shadow-md flex-3">
                    <Image style={{ position: 'absolute', top: '-20px', right: '-50px', width: '400px' }} src="/assets/faq2.png" alt="FAQ Image" width={400} height={300} />
                    <p className='text-2xl mb-3 mt-32'>Still no luck? We can help!</p>
                    <p>Contact us and we will get back to you as soon as possible.</p>
                    <button className="bg-gray-500 text-white py-2 px-4 rounded mt-4">Submit a Request</button>
                </div>
            </div>
            <div className="flex-1">
                <h2 className="text-primary text-2xl font-bold mb-4 mt-6 sm:mt-0">Common Questions</h2>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger
                            className={`py-2 px-4 rounded cursor-pointer mb-2 ${expandedItem === 'item-1' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-primary'}`}
                            onClick={() => handleAccordionClick('item-1')}
                        >
                            What is Hibirlink?
                        </AccordionTrigger>
                        <AccordionContent className="bg-gray-100 text-black py-2 px-4 rounded mb-2">
                            Hibirlink is a startup aimed at revolutionizing the digital economy in Ethiopia and beyond by creating an online ecosystem platform. This platform integrates an online product marketplace, trusted delivery services, streamlined service provider connections, and a flexible online auction system.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger
                            className={`py-2 px-4 rounded cursor-pointer mb-2 ${expandedItem === 'item-2' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-primary'}`}
                            onClick={() => handleAccordionClick('item-2')}
                        >
                            How does Hibirlink support small businesses and entrepreneurs?
                        </AccordionTrigger>
                        <AccordionContent className="bg-gray-100 text-black py-2 px-4 rounded mb-2">
                            Hibirlink offers a platform for small businesses to reach broader markets and manage their inventories efficiently. By integrating a product marketplace, delivery services, and service provider connections, it aims to provide comprehensive support to small businesses and entrepreneurs.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger
                            className={`py-2 px-4 rounded cursor-pointer mb-2 ${expandedItem === 'item-3' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-primary'}`}
                            onClick={() => handleAccordionClick('item-3')}
                        >
                            What services does Hibirlink provide?
                        </AccordionTrigger>
                        <AccordionContent className="bg-gray-100 text-black py-2 px-4 rounded mb-2">
                            Hibirlink provides a range of services including an online product marketplace, trusted delivery services, streamlined connections with service providers, and a flexible online auction system for trading used products.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger
                            className={`py-2 px-4 rounded cursor-pointer mb-2 ${expandedItem === 'item-4' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-primary'}`}
                            onClick={() => handleAccordionClick('item-4')}
                        >
                            How does the auction system work?
                        </AccordionTrigger>
                        <AccordionContent className="bg-gray-100 text-black py-2 px-4 rounded mb-2">
                            The online auction system on Hibirlink allows users to trade used products in a flexible and efficient manner. Users can list their products for auction, set starting bids, and buyers can place bids until the auction ends.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger
                            className={`py-2 px-4 rounded cursor-pointer mb-2 ${expandedItem === 'item-5' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-primary'}`}
                            onClick={() => handleAccordionClick('item-5')}
                        >
                            How can I become a service provider on Hibirlink?
                        </AccordionTrigger>
                        <AccordionContent className="bg-gray-100 text-black py-2 px-4 rounded mb-2">
                            To become a service provider on Hibirlink, you need to sign up on our platform and complete the required registration process. Once registered, you can offer your services to a wide range of users looking for both real-time and virtual services.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQ;
