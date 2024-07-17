import React from "react";
import Card from "./Card";
import Img1 from '@/public/assets/Image1.png';
import Img2 from '@/public/assets/Image2.png';
import Img3 from '@/public/assets/Image3.png';


const AuctionShippingComponent = () => {
    return (
      <div className="p-8">
        <div className="relative text-center mb-16">
          <h1 className="text-7xl md:text-9xl font-extrabold bg-clip-text"><span className="text-[#c8aeff] opacity-30">EVERY</span><br/><span className="text-[#9ff3fe] opacity-30">WHERE</span></h1>
          <h2 className="absolute inset-0 text-3xl md:text-5xl font-extrabold translate-y-18 md:translate-y-20 text-primary-text tracking-wider">
            Facilitate Auctions and <br/> Manage Product Shipping
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-y-6 justify-between items-center gap-x-5 w-full md:w-[80%] mx-auto">
          <Card
            icon={Img1}
            title="Track Bids"
            description="Monitor the progress of your auctions and fixed-price sales"
          />
          <div className="h-3 w-3 rounded-full bg-purple-800 hidden md:inline-block"/>
          <Card
            icon={Img3}
            title="Sell"
            description="Confirm the sale and arrange for shipping"
          />
          <div className="h-3 w-3 rounded-full bg-purple-800 hidden md:inline-block"/>
          <Card
            icon={Img2}
            title="Ship"
            description="Provide tracking information to the buyer and ensure"
          />
        </div>
      </div>
    );
  };
  
  export default AuctionShippingComponent;