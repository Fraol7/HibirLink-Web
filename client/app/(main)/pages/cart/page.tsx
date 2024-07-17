'use client';

import React from 'react';
import Cart from '@/components/CartComp/Cart';
import Footer from '@/components/MarketPlace/footer';


const page = () => {
  return (
    <div className='py-10'>
        <Cart/>
        <Footer/>
    </div>
  )
}

export default page
