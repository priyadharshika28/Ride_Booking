import React from 'react';

const Help = () => {
    return (
        <div className='p-6'>
            <h2 className='text-3xl font-bold mb-6'>Help & Support</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='border rounded-lg p-6 shadow-sm hover:shadow-md transition-all bg-white'>
                    <h3 className='text-xl font-bold mb-4'>Call Center</h3>
                    <p className='text-gray-600 mb-2'>Our support team is available 24/7 to assist you with any issues.</p>
                    <div className='flex items-center gap-3 mt-4'>
                        <div className='bg-blue-100 p-3 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </div>
                        <div>
                            <p className='text-sm text-gray-500'>Primary Line</p>
                            <a href="tel:+15550123" className='text-lg font-bold text-gray-900 hover:text-blue-600'>+1 (555) 0123</a>
                        </div>
                    </div>
                </div>

                <div className='border rounded-lg p-6 shadow-sm hover:shadow-md transition-all bg-white'>
                    <h3 className='text-xl font-bold mb-4'>Email Support</h3>
                    <p className='text-gray-600 mb-2'>Prefer writing? Send us an email and we'll get back to you within 24 hours.</p>
                    <div className='flex items-center gap-3 mt-4'>
                        <div className='bg-green-100 p-3 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <div>
                            <p className='text-sm text-gray-500'>Support Email</p>
                            <a href="mailto:support@textgo.com" className='text-lg font-bold text-gray-900 hover:text-green-600'>support@textgo.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-8'>
                <h3 className='text-xl font-bold mb-4'>Frequently Asked Questions</h3>
                <div className='space-y-4'>
                    <div className='border-b pb-4'>
                        <h4 className='font-semibold'>How do I book a ride?</h4>
                        <p className='text-gray-600 mt-2'>Simply enter your pickup and dropoff locations on the home page, select your car type, and click "Book".</p>
                    </div>
                    <div className='border-b pb-4'>
                        <h4 className='font-semibold'>Can I cancel a ride?</h4>
                        <p className='text-gray-600 mt-2'>Yes, you can cancel a ride from the History page before the driver arrives.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;