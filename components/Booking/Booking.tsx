'use client'
// fixed import issue

import { useEffect, useState } from 'react'
import AutoCompleteAddress from './AutoCompleteAddress'
import Cars from './Cars'

import Cards from './Cards'
import { useBookingHistory } from '@/context/BookingHistoryContext'
import { useRouter } from 'next/navigation'

export default function Booking() {
  const [screenHeight, setScreenHeight] = useState(0)
  const [selectedCar, setSelectedCar] = useState<any>()
  const [source, setSource] = useState("")
  const [destination, setDestination] = useState("")
  const [selectedPayment, setSelectedPayment] = useState<any>()

  const { addToHistory } = useBookingHistory()
  const router = useRouter()

  useEffect(() => {
    setScreenHeight(window.innerHeight * 0.72)
  }, [])

  const handleBook = () => {
    if (!selectedCar || !source || !destination || !selectedPayment) return

    const ride = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      pickup: source,
      dropoff: destination,
      price: `$${selectedCar.price}`,
      paymentMethod: selectedPayment.name,
      status: 'Booked'
    }

    addToHistory(ride)
    router.push('/history')
  }

  return (
    // 👇 allow vertical scroll, prevent horizontal
    <div className="p-5 min-h-screen overflow-x-hidden overflow-y-auto">
      <h2 className="text-[20px] font-semibold mb-3">Booking</h2>

      <div
        className="border border-gray-200 p-5 rounded-md bg-white"
        style={{ minHeight: screenHeight }} // 👈 minHeight, not height
      >
        <AutoCompleteAddress
          source={source}
          setSource={setSource}
          destination={destination}
          setDestination={setDestination}
        />
        <Cars selectedCar={selectedCar}
          setSelectedCar={(value: any) => setSelectedCar(value)} />
        <Cards selectedPayment={selectedPayment}
          setSelectedPayment={(value: any) => setSelectedPayment(value)} />
        <button className={`w-full bg-yellow-400
        p-1 rounded-md mt-4 
        ${!selectedCar || !source || !destination || !selectedPayment ? 'bg-gray-200 text-gray-400' : 'cursor-pointer'}`}
          disabled={!selectedCar || !source || !destination || !selectedPayment}
          onClick={handleBook}
        >Book
          {selectedCar ?
            <span className='ml-2 text-[14px]'>${selectedCar.price}</span> : null}
        </button>

      </div>
    </div>
  )
}
