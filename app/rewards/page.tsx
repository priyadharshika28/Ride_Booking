"use client";

import { useBookingHistory } from '@/context/BookingHistoryContext';
import React from 'react';

const Rewards = () => {
    const { history } = useBookingHistory();

    const totalRides = history.length;
    const totalPoints = totalRides * 10;
    const totalSpent = history.reduce((acc, ride) => {
        const price = parseFloat(ride.price.replace('$', ''));
        return acc + (isNaN(price) ? 0 : price);
    }, 0).toFixed(2);

    // Static mock data for top drivers
    const drivers = [
        {
            id: 1,
            name: 'Michael Scott',
            rating: 4.9,
            rides: 1250,
            badge: 'Top Rated',
            image: '/driver1.jpg' // Placeholder, in real app would use real images or avatars
        },
        {
            id: 2,
            name: 'Dwight Schrute',
            rating: 4.8,
            rides: 3400,
            badge: 'Speed Demon',
            image: '/driver2.jpg'
        },
        {
            id: 3,
            name: 'Jim Halpert',
            rating: 4.7,
            rides: 980,
            badge: 'Customer Favorite',
            image: '/driver3.jpg'
        },
        {
            id: 4,
            name: 'Pam Beesly',
            rating: 5.0,
            rides: 540,
            badge: 'Safe Driver',
            image: '/driver4.jpg'
        },
    ];

    return (
        <div className='p-6'>
            <div className='mb-10'>
                <h2 className='text-3xl font-bold mb-4'>Your Stats</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div className='bg-yellow-400 p-6 rounded-lg text-white shadow-md'>
                        <h3 className='text-lg font-semibold'>Total Rides</h3>
                        <p className='text-4xl font-bold'>{totalRides}</p>
                    </div>
                    <div className='bg-green-500 p-6 rounded-lg text-white shadow-md'>
                        <h3 className='text-lg font-semibold'>Total Points</h3>
                        <p className='text-4xl font-bold'>{totalPoints} <span className='text-sm font-medium'>pts</span></p>
                    </div>
                    <div className='bg-blue-500 p-6 rounded-lg text-white shadow-md'>
                        <h3 className='text-lg font-semibold'>Total Spent</h3>
                        <p className='text-4xl font-bold'>${totalSpent}</p>
                    </div>
                </div>
            </div>

            <h2 className='text-3xl font-bold mb-6'>Driver Rewards & Ratings</h2>
            <p className='text-gray-600 mb-8'>Celebrate our top-performing drivers who go the extra mile.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {drivers.map((driver) => (
                    <div key={driver.id} className='border rounded-xl p-6 shadow-md hover:shadow-xl transition-all bg-white flex flex-col items-center text-center'>
                        <div className='w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-3xl'>
                            {/* Placeholder for driver image */}
                            🚗
                        </div>
                        <h3 className='text-xl font-bold'>{driver.name}</h3>
                        <div className='flex items-center gap-1 my-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-500 border-none">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <span className='font-semibold'>{driver.rating}</span>
                        </div>
                        <p className='text-sm text-gray-500 mb-4'>{driver.rides} rides completed</p>

                        <div className='px-4 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold uppercase tracking-wide'>
                            {driver.badge}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rewards;
