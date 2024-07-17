'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import monitor from '@/public/assets/monitor.svg';
import joystick from '@/public/assets/joystick.png';
import { useRouter } from 'next/navigation';
import { IoArrowBackCircle } from "react-icons/io5";


const Cart = () => {
    const router = useRouter();
    const [items, setItems] = useState([
        { id: 1, name: 'LCD Monitor', price: 650, quantity: 1, image: monitor },
        { id: 2, name: 'HI Gamepad', price: 550, quantity: 2, image: joystick }
    ]);

    const handleQuantityChange = (id: number, quantity: string) => {
        setItems(items.map(item => 
            item.id === id ? { ...item, quantity: parseInt(quantity) } : item
        ));
    };

    const calculateSubtotal = (price: number, quantity: number) => price * quantity;
    const calculateTotal = () => items.reduce((total, item) => total + calculateSubtotal(item.price, item.quantity), 0);

    return (
        <div className="container mx-auto p-4">
        <div className='w-[80%] mx-auto py-6'>
            <IoArrowBackCircle size={30} className='text-blue-700 cursor-pointer' onClick={() => router.push("/marketplace")} />
        </div>
            <div className="text-lg font-bold hidden md:flex justify-between items-center px-4 py-2 shadow-lg w-[80%] mx-auto">
                <h2>Product</h2>
                <h2>Price</h2>
                <h2>Quantity</h2>
                <h2>Subtotal</h2>
            </div>
            <div className="md:hidden text-lg font-bold text-center mb-4">
                <h2>Cart Products</h2>
            </div>
            <div className="space-y-8 mt-4">
                {items.map(item => (
                    <div key={item.id} className="flex flex-col md:flex-row items-center justify-between shadow-lg p-4 rounded-lg w-[80%] mx-auto">
                        <div className="flex items-center space-x-4">
                            <Image src={item.image} alt={item.name} className="w-24 h-24"/>
                            <div className="flex flex-col">
                                <p className="font-semibold">{item.name}</p>
                                <p className="md:hidden">Price: {item.price} ETB</p>
                                <p className="md:hidden">Subtotal: {calculateSubtotal(item.price, item.quantity)} ETB</p>
                            </div>
                        </div>
                        <p className="hidden md:block">{item.price} ETB</p>
                        <input 
                            type="number" 
                            value={item.quantity} 
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)} 
                            className="border p-1 rounded w-16 mt-2 md:mt-0" 
                            min="1"
                        />
                        <p className="hidden md:block">{calculateSubtotal(item.price, item.quantity)} ETB</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-8 space-y-4 md:space-y-0 w-full md:w-[80%] mx-auto">
                <button className="border p-3 bg-blue-600 text-center text-white hover:bg-blue-700 rounded-lg" onClick={() => router.push("/marketplace")}>Return to Shop</button>
                <button className="border p-3 bg-blue-600 text-center text-white hover:bg-blue-700 rounded-lg">Update Cart</button>
            </div>
            <div className="flex flex-col items-start gap-y-3 mt-8 w-full md:w-[80%] mx-auto">
                <input type="text" placeholder="Coupon Code" className="border p-2 rounded w-full md:w-1/4" />
                <button className="border p-2 bg-blue-700 text-center text-white hover:bg-blue-700 rounded-lg w-full md:w-auto">Apply Coupon</button>
            </div>
            <div className="mt-8 p-4 rounded border border-black w-full md:w-[40%] mx-auto space-y-3">
                <h3 className="text-xl font-semibold">Cart Total</h3>
                <div className='flex justify-between'>
                    <span>Subtotal:</span>
                    <span>{calculateTotal()} ETB</span>
                </div>
                <hr/>
                <div className='flex justify-between'>
                    <span>Shipping:</span>
                    <span>Free</span>
                </div>
                <hr/>
                <div className='flex justify-between'>
                    <span>Total: </span>
                    <span>{calculateTotal()} ETB</span>
                </div>
                <button className="w-full p-2 rounded-lg text-white mt-4 bg-blue-700 hover:bg-blue-800 text-center" onClick={() => router.push("/pages/checkout")}>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
