"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        occupation: string;
        image:string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="w-[350px] bg-primary max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
                        
                        key={item.name}
                    >
                        <blockquote>
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            ></div>
                                                    <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    className="w-10 h-10 rounded-full mr-4"
                                    style={{width: '70px', height: '70px'}}
                                    width={100}
                                    height={100}
                                />
                                <div>
                                    <span className="block text-sm font-medium text-white">{item.name}</span>
                                    <span className="block text-xs text-gray-300">{item.occupation}</span>
                                </div>
                            </div>
                            <FaQuoteRight className="text-3xl text-gray-300" />
                        </div>
                        <blockquote>
                            <span className="text-sm leading-[1.6] text-gray-100 font-normal">
                                {item.quote}
                            </span>
                        </blockquote>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
