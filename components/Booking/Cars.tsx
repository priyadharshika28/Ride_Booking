import CardLists from '@/data/CardLists'
import React, { useState } from 'react'
import Image from 'next/image'

<<<<<<< HEAD
import React, { useState } from "react";
import Image from "next/image";
import CarList from "@/data/CarList";

function Cars() {
  const [selectedCar, setSelectedCar] = useState<number | null>(null);
  
=======
function Cards() {
  const [activeIndex,setActiveIndex]=useState<any>();
>>>>>>> a9469aaf87ddd2617fce845f31983576ce919ced

  return (
    <div className='mt-4'>
        <h2 className='font-semibold mb-3'>Payment Methods</h2>
        <div className='grid grid-cols-5 mt-4'>
          {CardLists.map((item,index)=>(
            <div key={index} className={`w-[50px] border-[1px]
            flex items-center justify-center rounded-md
            cursor-pointer hover:scale-110 transition-all hover:border-yellow-400 border-gray-300
            ${activeIndex==index?'border-yellow-400 border-[2px]':null}`}
            onClick={()=>setActiveIndex(index)}>
              <Image src={item.image} alt={item.name}
              width={30} height={50}></Image>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Cards
