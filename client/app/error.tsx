'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const router = useRouter()
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='space-y-3 text-center'>
          <img src='/assets/404.png' alt='404' className='mb-4'/>
          <p className='text-xl'>page not found</p>
          <button className='rounded-lg text-white text-center p-4 bg-blue-800' onClick={() => router.push("/home") } >Back to Home page</button>
      </div>
    </div>
  )
}

export default NotFound
