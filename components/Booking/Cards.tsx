import CardLists from '@/data/CardLists'
import React, { useState } from 'react'
import Image from 'next/image'

function Cards({ selectedPayment, setSelectedPayment }: any) {

  return (
    <div className='mt-4'>
      <h2 className='font-semibold mb-3'>Payment Methods</h2>
      <div className='grid grid-cols-5 mt-4'>
        {CardLists.map((item, index) => (
          <div key={index} className={`w-[50px] border-[1px]
            flex items-center justify-center rounded-md
            cursor-pointer hover:scale-110 transition-all hover:border-yellow-400 border-gray-300
            ${selectedPayment?.name == item.name ? 'border-yellow-400 border-[2px]' : null}`}
            onClick={() => setSelectedPayment(item)}>
            <Image src={item.image} alt={item.name}
              width={30} height={50}></Image>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
