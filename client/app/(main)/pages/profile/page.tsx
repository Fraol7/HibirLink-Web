'use client';
import Link from 'next/link';
import { useState } from 'react';

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    language: '',
    country: '',
    telno: '',
    role: '',
    email: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submitProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
    <div className="p-4 flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <div className="flex justify-center md:justify-between lg:justify-between items-center bg-gradient-to-r from-green-500 h-16 rounded mb-6">
          <Link  href="/home">
            <button className="border-3 rounded bg-white text-black mx-5 px-4 py-2">
              Back to Home
            </button>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6">
          <div className="flex items-center mb-4 sm:mb-0">
            <img className="w-14 ml-5" src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
            <div className="ml-2">
              <h2 className="font-semibold text-base">User Name</h2>
              <p className="text-gray-500 text-sm">dummy@gmail.com</p>
            </div>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20">
            Save
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1 mb-6 md:mb-0">
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />

            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mt-4">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <label htmlFor="language" className="block text-sm font-medium text-gray-700 mt-4">Language</label>
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-500"
            >
              <option value="">Select Language</option>
              <option value="amharic">Amharic</option>
              <option value="english">English</option>
            </select>

            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-4">Add Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="New Email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Country</option>
            </select>

            <label htmlFor="telno" className="block text-sm font-medium text-gray-700 mt-4">Tel No</label>
            <input
              type="text"
              name="telno"
              placeholder="Tel No"
              value={formData.telno}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />

            <p className="block mt-4">Please Select Role</p>
            <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-row">
              <div className='mr-4'>
                <input
                  type="radio"
                  name="role"
                  value="user"
                  onChange={handleChange}
                  checked={formData.role === 'user'}
                  className="form-radio"
                />
                <span className="ml-2">User</span>
              </div>
              <div className='mr-4'>
                <input
                  type="radio"
                  name="role"
                  value="ServiceProvider"
                  onChange={handleChange}
                  checked={formData.role === 'ServiceProvider'}
                  className="form-radio"
                />
                <span className="ml-2">Service Provider</span>
              </div>
              <div>
                <input
                  type="radio"
                  name="role"
                  value="delivery"
                  onChange={handleChange}
                  checked={formData.role === 'delivery'}
                  className="form-radio"
                />
                <span className="ml-2">Delivery provider</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
