'use client';
import { useState } from 'react';

const ProductPage = () => {
  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    description: '',
    productimage: null,
    contact: '',
    address: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'productimage') {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    try {
      const response = await fetch('/api/submitProfile', {
        method: 'POST',
        body: formDataToSend,
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
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg w-full max-w-5xl mt-10">
        <div className='text-blue-500 text-xl mb-8 border-b-2'>
            Product Information
        </div>
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1 mb-6 md:mb-0">
            <label htmlFor="productName" className="block font-medium text-gray-700 mb-3">Product Name</label>
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              value={formData.productName}
              onChange={handleChange}
              className="mt-1 bg-zinc-100 block w-full rounded-md shadow-sm py-2 px-3 sm:text-sm h-12"
            />

            <label htmlFor="price" className="block  font-medium text-gray-700 mt-4 mb-3">Price in Birr</label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 bg-zinc-100 block w-full  rounded-md shadow-sm py-2 px-3 sm:text-sm h-12"
            />
            
            <label htmlFor="description" className="block mb-3  font-medium text-gray-700 mt-4">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1  block w-full bg-zinc-100 rounded-md h-48 shadow-sm py-2 px-3 sm:text-sm"
            >
            </textarea>
            <input 
                type="text" 
                name="imagelink" 
                className='border border-black py-2 px-4 rounded mt-4 w-full '
                onChange={handleChange}
                placeholder='Image Link here'
            />
          </div>

          <div className="flex-1">
            <label htmlFor="contact" className="block mb-3 font-medium text-gray-700">Contact Number</label>
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              className="mt-1 bg-zinc-100 block w-full  rounded-md shadow-sm py-2 px-3 sm:text-sm h-12"
            />
            <label htmlFor="address" className="block mb-3 font-medium text-gray-700 mt-4">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 bg-zinc-100 block w-full rounded-md shadow-sm py-2 px-3 sm:text-sm h-12"
            />
            <label htmlFor="category" className="block mb-3 font-medium text-gray-700 mt-4">Category</label>
            <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 bg-zinc-100 block w-full rounded-md shadow-sm py-2 px-3 text-gray-600 h-12 sm:text-sm"
                 >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothes">Clothes</option>
                <option value="Furniture">Furniture</option>
                <option value="Books">Books</option>
                <option value="Others">Others</option>
            </select>
            <div className='flex justify-center md:justify-end lg:justify-end'>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20 m-7">
                   Save
                </button>
            </div>
            
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductPage;

