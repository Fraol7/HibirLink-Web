"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Testimonials() {
    return (
        <>
            <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <h2 className="absolute inset-0 text-3xl md:text-5xl font-extrabold translate-y-18 md:translate-y-20 text-primary-text tracking-wider text-center">
                    Testimonials
                </h2>
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </>
    );
}

const testimonials = [
    {
        quote:
            "Thanks to Hibirlink, my small-scale clothing business has expanded beyond my expectations. I now sell my traditional Ethiopian garments to customers across the country through their online marketplace.",
        name: "Dakarai chike",
        occupation: "Small-Scale Merchant",
        image: '/assets/avatar1.webp'
    },
    {
        quote:
            "Being a freelance graphic designer, Hibirlink has connected me with clients not only locally but across Ethiopia. Their streamlined service provider connections make it easy for me to showcase my skills and find new opportunities.",
        name: "Mulugeta Tekle",
        occupation: "Freelance Graphic Designer",
        image: '/assets/avatar2.jpg'
    },
    {
        quote:
            "I love the flexibility of Hibirlink's online auction system. It allows me to sell my handmade crafts and artwork directly to interested buyers, promoting sustainable consumption and supporting local artisans like me.",
        name: "Tizita Alemu",
        occupation: "Artisan",
        image: '/assets/avatar3.jpg'
    },
    {
        quote:
            "Hibirlink has made it possible for my bookstore to reach customers beyond my neighborhood. Their reliable delivery services ensure that our books reach avid readers all over Ethiopia, promoting literacy and education.",
        name: "Kaleb Mekonnen",
        occupation: "Bookstore Owner",
        image: '/assets/avatar4.jpg'
    },
];
