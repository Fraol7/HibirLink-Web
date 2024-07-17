import React from 'react';
import { RiFacebookLine } from "react-icons/ri";
import { RiTwitterLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";
import { VscSend } from "react-icons/vsc";

const Footer: React.FC = () => {
  return (
    <footer className="bg-cover min-h-[596px] bg-center flex items-end bg-blue-700 md:bg-[url('/assets/footer.png')] md:bg-transparent">
      <div className="text-white py-10 mx-auto">
        <div className="container mx-auto px-6 lg:px-8 flex flex-wrap gap-8">
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Exclusive</h3>
            <p className="mt-2">Get 10% off your first order</p>
            <form className="mt-4 flex items-center border-2 border-white rounded-md overflow-hidden">
            <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-blue-600 p-2 text-white outline-none"
            />
            <button type="submit" className="bg-blue-600 p-2">
                <VscSend />
            </button>
            </form>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>Till Biry bazar, Chokta, Dh 1518, Bangladesh</li>
              <li>exclusive@gmail.com</li>
              <li>+88017-88889-9999</li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Account</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-black">My Account</a></li>
              <li><a href="#" className="hover:text-black">Login / Register</a></li>
              <li><a href="#" className="hover:text-black">Cart</a></li>
              <li><a href="#" className="hover:text-black">Wishlist</a></li>
              <li><a href="#" className="hover:text-black">Shop</a></li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Quick Link</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black">Terms of Use</a></li>
              <li><a href="#" className="hover:text-black">FAQ</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Download App</h3>
            <div className="flex mt-4 gap-2">
              <img src="/assets/QRcode.png" alt="QR Code" className="mb-4" />
              <div className="flex flex-col space-y-2">
                <a href="#" className='hover:transform'>
                <img src="/assets/google-play-badge.png" alt="Google Play Store" />
                </a>
                <a href="#">
                <img src="/assets/app-store-badge.png" alt="App Store" />
                </a>
              </div>
            </div>
            <div className="mt-2 mr-12 h-24 flex justify-evenly">
              <a href="#" className="hover:text-black"><RiFacebookLine /></a>
              <a href="#" className="hover:text-black"><RiTwitterLine /></a>
              <a href="#" className="hover:text-black"><RiInstagramLine /></a>
              <a href="#" className="hover:text-black"><RiLinkedinLine /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <p>© 2024 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
