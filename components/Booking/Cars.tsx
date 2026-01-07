import React, { useState } from 'react'
import Image from 'next/image'
import CarList from '@/data/CarList'

function Cars() {
  const [selectedCar, setSelectedCar] = useState<number | null>(null)

  return (
    <div className="mt-4">
      <h2 className="font-semibold mb-3">Choose a car</h2>
      <div className="grid grid-cols-3 gap-3">
        {CarList.map((car) => (
          <div
            key={car.id}
            className={`border p-3 rounded-md flex flex-col items-center cursor-pointer hover:shadow-md transition-all ${
              selectedCar === car.id ? 'border-yellow-400 shadow-lg' : 'border-gray-200'
            }`}
            onClick={() => setSelectedCar(car.id)}
          >
            <Image src={car.image} alt={car.name} width={80} height={50} />
            <div className="mt-2 text-sm font-medium">{car.name}</div>
            <div className="text-xs text-gray-500">${car.price.toFixed(2)} / km</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cars
