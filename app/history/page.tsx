"use client";
import { useBookingHistory } from '@/context/BookingHistoryContext';
import React from 'react';

const History = () => {
    // Static mock data for rides
    const { history } = useBookingHistory();
    const rides = history;
    /*const rides = [
        {
            id: 1,
            date: '2024-01-01',
            time: '10:30 AM',
            pickup: 'Central Park, NY',
            dropoff: 'Times Square, NY',
            price: '$15.00',
            status: 'Completed'
        },
        
    ];*/

    return (
        <div className='p-6'>
            <h2 className='text-3xl font-bold mb-6'>Ride History</h2>
            <div className='grid grid-cols-1 gap-4'>
                {rides.map((ride) => (
                    <div key={ride.id} className='border rounded-lg p-4 shadow-sm hover:shadow-md transition-all'>
                        <div className='flex justify-between items-center mb-2'>
                            <div>
                                <h3 className='font-bold text-lg'>{ride.date} at {ride.time}</h3>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold  ${ride.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                }`}>
                                {ride.status}
                            </span>
                        </div>

                        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                            <div className='flex-1'>
                                <div className='flex items-center gap-2 mb-1'>
                                    <div className='w-3 h-3 rounded-full bg-blue-500'></div>
                                    <p className='text-gray-600 text-sm'>From: <span className='text-gray-900 font-medium'>{ride.pickup}</span></p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='w-3 h-3 rounded-full bg-red-500'></div>
                                    <p className='text-gray-600 text-sm'>To: <span className='text-gray-900 font-medium'>{ride.dropoff}</span></p>
                                </div>
                            </div>

                            <div className='flex items-center justify-between md:justify-end gap-6 min-w-[150px]'>
                                <p className='text-xl font-bold'>{ride.price}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {rides.length === 0 && (
                    <div className='text-center py-10 text-gray-500'>
                        No history found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default History;