
import React from 'react';
import AuctionCard from './AuctionCard';
import { auctionItems } from './cardData';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const NextArrow = ({ onClick }: { onClick: () => void }) => {
    return (
        <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 cursor-pointer bg-gray-300 rounded-full z-10"
            onClick={onClick}
        >
            <FaArrowRight />
        </div>
    );
};

const PrevArrow = ({ onClick }: { onClick: () => void }) => {
    return (
        <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 cursor-pointer bg-gray-300 rounded-full z-10"
            onClick={onClick}
        >
            <FaArrowLeft />
        </div>
    );
};

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow onClick={function (): void {
            throw new Error('Function not implemented.');
        } } />,
        prevArrow: <PrevArrow onClick={function (): void {
            throw new Error('Function not implemented.');
        } } />,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="relative md:w-[70%] mx-auto mt-10 md:mt-20">
            <Slider {...settings}>
                {auctionItems.map((item) => (
                    <AuctionCard
                        key={item.id}
                        id={item.id}
                        imageUrl={item.imageUrl}
                        title={item.title}
                        currentPrice={item.currentPrice}
                        originalPrice={item.originalPrice}
                        rating={item.rating}
                        reviewsCount={item.reviewsCount}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;