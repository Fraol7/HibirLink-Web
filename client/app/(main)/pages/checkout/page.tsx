'use client';
import React from 'react';
import monitor from '@/public/assets/monitor.svg';
import joystick from '@/public/assets/joystick.png';
import Image from 'next/image';
import chapa from '@/public/assets/chapa.svg';
import telebirr from '@/public/assets/telebirr.svg';
import Footer from '@/components/MarketPlace/footer';
import { IoArrowBackCircle } from "react-icons/io5";
import { useRouter } from 'next/navigation';


const Checkout = () => {
    const router = useRouter();
    return (
        <div className=''>
            <div className='w-[80%] mx-auto py-10'>
                <IoArrowBackCircle size={30} className='text-blue-700 cursor-pointer' onClick={() => router.push("/pages/cart")} />
            </div>
            <div className="container p-4 md:w-[80%] mx-auto shadow-lg md:py-20">
            <div className="flex flex-col md:flex-row justify-between gap-x-10">
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700">First Name*</label>
                            <input type="text" className="border p-2 rounded w-full" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Recipient's Name (if you are sending for another person)</label>
                            <input type="text" className="border p-2 rounded w-full" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Street Address*</label>
                            <input type="text" className="border p-2 rounded w-full" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Apartment, floor, etc. (optional)</label>
                            <input type="text" className="border p-2 rounded w-full" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Town/City*</label>
                            <input type="text" className="border p-2 rounded w-full" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Phone Number*</label>
                            <input type="text" className="border p-2 rounded w-full" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email Address*</label>
                            <input type="email" className="border p-2 rounded w-full" />
                        </div>
                        <div>
                            <input type="checkbox" className="mr-2" />
                            <label className="text-gray-700">Save this information for faster check-out next time</label>
                        </div>
                    </form>
                </div>

                <div className="w-full md:w-1/2 p-4 space-y-10">
                    <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Image src={joystick} alt="Gamepad" className="w-20 h-20"/>
                            <p className="flex-grow ml-4">LCD Monitor</p>
                            <p>$650</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <Image src={monitor} alt="LCD Monitor" className="w-20 h-20"/>
                            <p className="flex-grow ml-4">HI Gamepad</p>
                            <p>$1100</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Subtotal:</p>
                            <p>$1750</p>
                        </div>
                        <hr/>
                        <div className="flex justify-between items-center">
                            <p>Shipping:</p>
                            <p>Free</p>
                        </div>
                        <hr className='h-2'/>
                        <div className="flex justify-between items-center font-bold">
                            <p>Total:</p>
                            <p>$1750</p>
                        </div>
                    </div>

                    <div className="mt-4 space-y-8">
                        <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <input type="radio" name="payment" className="mr-2" />
                                <label>Bank</label>
                            </div>
                            <div className='flex gap-x-5 px-10'>
                                <div className="flex items-center">
                                    <Image src={chapa} alt="chapa logo" className="w-20 h-20"/>
                                </div>
                                <div className="flex items-center">
                                    <Image src={telebirr} alt="telebirr logo" className="w-20 h-20"/>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="payment" className="mr-2" />
                                <label>Cash on delivery</label>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <input type="text" placeholder="Coupon Code" className="border p-2 rounded w-1/2"/>
                        <button className="ml-2 bg-primary hover:bg-blue-800 outline-none text-white py-2 px-3 rounded-sm">Apply Coupon</button>
                    </div>

                    <button className="bg-primary hover:bg-blue-800 outline-none text-white py-2 rounded-md mt-4 w-full">Place Order</button>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Checkout;
