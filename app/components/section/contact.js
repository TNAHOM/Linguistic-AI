import React from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Contact = () => {
    return (
        <div className="text-white p-24 rounded-2xl h-[100%] w-full flex bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <div className='flex flex-col w-full gap-6'>
                <div className='flex border border-gray-400 text-sm px-2 py-1 rounded-[8px] gap-2 w-fit content-center'>
                    <PhoneIcon className='w-6 h-6 text-gray-200' />
                    <div className='content-center text-gray-200 '>
                        Contact Us
                    </div>
                </div>
                <div className='flex justify-between gap-4'>
                    <h2 className='section-heading'>We’re Here to Help</h2>
                    <div className='flex flex-col gap-8'>
                        <div className='bg-[#1E1E1E] text-white py-4 px-8 rounded-[13px] h-[120px] w-[500px]'>
                            <div className='flex justify-between text-[17px]'>
                                <div className='text-gray-400'>
                                    <PhoneIcon className='w-6 h-6 text-gray-400' />
                                </div>
                                <div>
                                    +1-234-567-890
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#1E1E1E] text-white py-4 px-8 rounded-[13px] h-[120px] w-[500px]'>
                            <div className='flex justify-between text-[17px]'>
                                <div className='text-gray-400'>
                                    <EnvelopeIcon className='w-6 h-6 text-gray-400' />
                                </div>
                                <div>
                                    support@example.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <p className='text-gray-400 w-4/5'>Have any questions or need assistance? Reach out to us via phone or email, and we’ll be happy to help.</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
