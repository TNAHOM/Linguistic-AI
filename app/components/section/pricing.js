import React from 'react';
import { Spotlight } from '../ui/spotlight';
import { CreditCardIcon } from '@heroicons/react/24/outline';

const Pricing = () => {
    return (
        <div className="text-white p-24 rounded-2xl h-[100%] w-full flex bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className='flex flex-col w-full gap-6'>
                <div className='flex border border-gray-400 text-sm px-2 py-1 rounded-[8px] gap-2 w-fit content-center'>
                    <CreditCardIcon className='w-6 h-6 text-gray-200' />
                    <div className='content-center text-gray-200 '>
                        Pricing
                    </div>
                </div>
                <h2 className='section-heading'>Simple and Flexible Pricing</h2>
                <p className='text-gray-400'>Choose the plan that suits your needs and start learning smarter today.</p>
                <div className='flex justify-between gap-8 mt-12'>
                    <div className='flex flex-col items-center bg-[#1E1E1E] text-white py-8 px-10 rounded-[13px] w-[400px]'>
                        <h3 className='text-xl font-bold mb-4'>Basic Plan</h3>
                        <p className='text-3xl font-bold'>$0</p>
                        <p className='text-gray-400 mb-6'>Free forever</p>
                        <ul className='text-gray-400 mb-6 space-y-2'>
                            <li>Access to basic features</li>
                            <li>Limited flashcards</li>
                            <li>Basic statistics</li>
                        </ul>
                        <button className='bg-white text-black py-2 px-6 rounded-lg font-medium'>Get Started</button>
                    </div>
                    <div className='flex flex-col items-center bg-[#1E1E1E] text-white py-8 px-10 rounded-[13px] w-[400px]'>
                        <h3 className='text-xl font-bold mb-4'>Pro Plan</h3>
                        <p className='text-3xl font-bold'>$9.99</p>
                        <p className='text-gray-400 mb-6'>Per month</p>
                        <ul className='text-gray-400 mb-6 space-y-2'>
                            <li>Unlimited flashcards</li>
                            <li>Advanced statistics</li>
                            <li>Priority support</li>
                        </ul>
                        <button className='bg-white text-black py-2 px-6 rounded-lg font-medium'>Start Free Trial</button>
                    </div>
                    <div className='flex flex-col items-center bg-[#1E1E1E] text-white py-8 px-10 rounded-[13px] w-[400px]'>
                        <h3 className='text-xl font-bold mb-4'>Enterprise Plan</h3>
                        <p className='text-3xl font-bold'>$29.99</p>
                        <p className='text-gray-400 mb-6'>Per month</p>
                        <ul className='text-gray-400 mb-6 space-y-2'>
                            <li>Everything in Pro</li>
                            <li>Team collaboration features</li>
                            <li>Dedicated support</li>
                        </ul>
                        <button className='bg-white text-black py-2 px-6 rounded-lg font-medium'>Contact Us</button>
                    </div>
                </div>
                <p className='text-gray-400 text-center mt-12'>Try our tool free for 7 days. No commitments, cancel anytime.</p>
            </div>
        </div>
    )
}

export default Pricing;
