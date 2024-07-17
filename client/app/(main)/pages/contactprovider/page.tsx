'use client';
import { useState } from 'react';
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import 'react-time-picker/dist/TimePicker.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    phonenumber: '',
    description: '',
    email: ''
  });
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [time, setTime] = useState('10:00');

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submitProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, selectedDate, time }),
      });
      if (response.ok) {
        console.log('Form submitted successfully');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="p-4 flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 border-2 border-blue-300 rounded-lg shadow-md w-full max-w-5xl mt-10">
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1 mb-6 md:mb-0">
            <div className='flex justify-center'>
              <div className='text-2xl font-semibold mb-8'>
                Contact Service Provider
              </div>
            </div>
            <label htmlFor="fullName" className="block font-medium text-gray-700 mb-3">Full Name</label>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              className="mt-1 bg-zinc-100 block w-full rounded-md shadow-sm py-2 px-3 sm:text-sm h-12"
            />
            <label htmlFor="phonenumber" className="block font-medium text-gray-700 mt-4 mb-3">Phone Number</label>
            <input
              type="text"
              name="phonenumber"
              placeholder="Phone Number"
              value={formData.phonenumber}
              onChange={handleChange}
              className="mt-1 bg-zinc-100 block w-full rounded-md shadow-sm py-2 px-3 sm:text-sm h-12"
            />
            <label htmlFor="description" className="block mb-3 font-medium text-gray-700 mt-4">Service Details</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full bg-zinc-100 rounded-md h-48 shadow-sm py-2 px-3 sm:text-sm"
            ></textarea>
          </div>
          {/* this is the right side div */}
          <div className="flex-1 flex flex-col justify-center items-center">
            <p className='text-gray-600'>Pick Time and Date</p>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="text-blue-500 border-2 border-gray-300 rounded-lg p-4 mt-2"
            />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="-mt-0 border-t-0 border-2 border-gray-300 text-blue-500 rounded-md shadow-sm py-2 px-5 min-w-44"
            />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded m-7">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
