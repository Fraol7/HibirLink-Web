'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Logo from '@/public/assets/Logo.png';
import Dropdown from './DropDown';
import avatarimage from '@/public/assets/avatar1.webp';

const HomeNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <div className={`fixed flex justify-between items-center w-full bg-white mt-9 py-4 md:px-20 px-5 z-30 ${scrollActive ? "shadow-sm" : ""}`}>
      <Link href='/home' className="flex gap-x-1 items-center">
        <Image src={Logo} alt='logoImage' />
        <h1 className='font-bold underline'>HibirLink</h1>
      </Link>
      <div className="hidden md:flex justify-center items-center gap-x-4">
        <Link href='#'>Home</Link>
        <Dropdown />
        <Link href='#about'>About</Link>
        <Link href='#faq'>FAQ</Link>
      </div>
      <div className="flex gap-x-6 items-center">
        <Link href=''>
          <IoIosHeartEmpty size={20} className='hover:text-primary' />
        </Link>
        <Link href=''>
          <IoCartOutline size={20} className='hover:text-primary' />
        </Link>
        {isLoggedIn ? (
          <div className="flex items-center gap-x-4">
            <Link href='/pages/userprofile'>
              <Image src={avatarimage} alt="Profile" className="rounded-full w-12 h-12 cursor-pointer" width={40} height={40} />
            </Link>
            <button onClick={handleLogout} className="hidden md:inline-block px-4 py-2 bg-primary text-white rounded-2xl text-xm hover:bg-blue-500">Logout</button>
          </div>
        ) : (
          <Link href='/auth/login'>
            <button className='px-4 py-2 bg-primary text-white rounded-2xl text-xm hover:bg-blue-500 hidden md:block'>GetStarted</button>
          </Link>
        )}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
        </button>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 flex justify-end">
          <div className="w-2/3 sm:w-1/3 h-full bg-white shadow-lg flex flex-col p-6">
            <button className="self-end mb-6" onClick={toggleMenu}>
              <IoMdClose size={30} />
            </button>
            <Link href='#' className='mb-4' onClick={toggleMenu}>Home</Link>
            <Link href='#about' className='mb-4' onClick={toggleMenu}>About</Link>
            <Link href='#faq' className='mb-4' onClick={toggleMenu}>FAQ</Link>
            <Dropdown />
            {isLoggedIn ? (
              <button onClick={handleLogout} className='px-4 py-2 mt-4 bg-primary text-white rounded-lg text-xm hover:bg-blue-500 mb-4'>Logout</button>
            ) : (
              <Link href='/auth/login'>
                <button className='px-4 py-2 mt-4 bg-primary text-white rounded-lg text-xm hover:bg-blue-500 mb-4'>GetStarted</button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default HomeNavBar;
