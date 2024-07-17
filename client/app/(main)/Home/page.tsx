import React from 'react';
import HomeNavBar from '@/components/Home/Hero/HomeNavBar';
import MainHero from '@/components/Home/Hero/MainHero';
import AuctionShippingComponent from '@/components/Home/Hero/AuctionComponent';
import Footer from '@/components/Footer';
import FAQ from '@/components/Home/FAQ/faq';
import FlashSales from "@/components/Home/FlashSales/flash-sales-section";
import Supplier from "@/components/Home/Supplier/supplier-section";


import { Testimonials } from '@/components/Home/Testimonial/testimonials';


export default function Page() {
  return (
    <div>
      <HomeNavBar/>
      <MainHero/>
      <AuctionShippingComponent/>
      <Supplier/>
      <FlashSales/>
      <FAQ />
      <Testimonials />
      <Footer/>
    </div>
  );
}



