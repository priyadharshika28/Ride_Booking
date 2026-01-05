'use client'

import { useEffect, useState } from 'react'
import AutoCompleteAddress from './AutoCompleteAddress'
import Cars from './Cars'
import { Card } from '@mui/material'
import Cards from './Cards'

export default function Booking() {
  const [screenHeight, setScreenHeight] = useState(0)

  useEffect(() => {
    setScreenHeight(window.innerHeight * 0.72)
  }, [])

  return (
    // 👇 allow vertical scroll, prevent horizontal
    <div className="p-5 min-h-screen overflow-x-hidden overflow-y-auto">
      <h2 className="text-[20px] font-semibold mb-3">Booking</h2>

      <div
        className="border border-gray-200 p-5 rounded-md bg-white"
        style={{ minHeight: screenHeight }} // 👈 minHeight, not height
      >
        <AutoCompleteAddress />
        <Cars/>
        <Cards/>
        <button className='w-full bg-yellow-400
        p-1 rounded-md mt-4 cursor-pointer'>Book</button>
      </div>
    </div>
  )
}
