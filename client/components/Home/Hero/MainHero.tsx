import React from 'react'
import TypeWriterComponent from './TypeWriter'
import Image from 'next/image'
import Hero from '@/public/assets/Hero.svg';
import { CiSearch } from "react-icons/ci";


const MainHero = () => {
  return (
    <div className='py-40'>
      <div className='flex flex-col md:flex-row gap-y-10 justify-between items-center w-[70%] mx-auto'>
        <div className="flex flex-col items-start gap-8 ">
            <TypeWriterComponent/>
            <div className="flex items-center border rounded-full overflow-hidden p-1 bg-blue-200">
                <input
                    type="text"
                    placeholder="search for anything"
                    className="flex-grow px-2 md:px-4 py-1 md:py-2 bg-transparent focus:outline-none"
                />
                <button className="px-3">
                    <CiSearch className="" size={20} />
                </button>
            </div>
        </div>
        <div className="animate-custom-bounce ">
            <Image src={Hero} alt="Heroimage" />
        </div>
      </div>
    </div>
  )
}

export default MainHero
