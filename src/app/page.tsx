'use client';
import React, { useState } from 'react';

export default function NewHotel() {
  const [file, setFile] = useState<File | undefined>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append('speciality', ['South Indian', 'North Indian', 'Chinese', 'Sandwich', 'Pizza', 'Fast Food', 'Desserts', 'Beverages']);
    formData.append('contacts', ['9090909090']);

    try {
      const response = await fetch('/api/hotels/add', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Hotel created:', data);
      } else {
        console.error('Failed to create hotel');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className='p-[10dvh]'>
      <form encType="multipart/form-data" onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div>
          <label>Hotel Name</label>
          <input name="hotel_name" type="text" id="hotel_name" className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-transparent leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div>
          <label>Email</label>
          <input name="email" type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-transparent leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-transparent leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div>
          <label>Address</label>
          <textarea id="address" name="address" className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-transparent leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div>
          <label>Ratings</label>
          <input name="ratings" type="text" id="ratings" className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-transparent leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div>
          <label>Hotel Logo (image)</label>
          <input name="logo" id='logo' type="file" accept="image/*" className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-transparent leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setFile(e.target.files?.[0])} required />
        </div>
        <div>
          <label>Website</label>
          <input name="website" type="url" id="website" className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-transparent leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <button type="submit" className='border px-2 py-3 rounded mt-10'>Add Hotel</button>
      </form>
    </div>
  );
}

