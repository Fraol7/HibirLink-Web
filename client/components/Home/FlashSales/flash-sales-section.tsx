import React from 'react'
import TimeWrapper from "@/components/Home/FlashSales/time-wrapper";
import { CarouselSpacing } from './carousel';
const FlashSales = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row lg:flex-row m-12 items-center md:items-end lg:items-end space-x-16'>
          <div className='flex flex-col text-left gap-3 m-2 md:m-4'>
              <div className='flex flex-row m-4 h-8 gap-2 '>
                  <div className='bg-blue-500 w-4 rounded-md'/>
                  <h2 className='font-inter text-[#3B4B64] font-semibold justify-center text-xl'>Today's</h2>
              </div>
              <h1 className='font-inter text-[#3B4B64] ml-4 font-bold text-3xl'>Flash Sales</h1>
          </div>
          <TimeWrapper/>
      </div>
      <CarouselSpacing />
    </div>
  )
}

export default FlashSales