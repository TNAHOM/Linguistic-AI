import React from 'react';
import { CubeTransparentIcon, FolderOpenIcon } from '@heroicons/react/24/outline';
import { BoltIcon } from '@heroicons/react/24/solid';


const Why = () => {
    return (
        <div className='flex flex-col rounded-2xl bg-white p-24 gap-8'>
            <div className='flex flex-col' >
                <div className='flex border border-gray-400 text-sm px-2 py-1 rounded-[8px] gap-2 w-fit content-center'>
                    <CubeTransparentIcon className='w-6 h-6 text-gray-600' />
                    <div className='content-center text-gray-600 '>
                        Why [Name]
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='section-heading'>Increase Productivity and Boost Sales</h2>
                    <p className='light-p'> Ganttify’s exceptional flexibility can handle any type of work. And we never stop innovating
                    </p>
                </div>
            </div>
            <div className='flex gap-8 p-5 mt-3'>
                <div className='flex flex-col gap-6 w-1/3 '>
                    <div className='space-y-2 gap-4 border rounded-2xl p-9'>
                        <div className='bg-blue-600 p-2 rounded-[5px] w-fit'>
                            <BoltIcon className='w-5 h-5  text-white' />
                        </div>
                        <h3 className='content-center font-medium text-[18px]'>Project Managment</h3>
                        <p className='light-p'> Manage your project from start to finish. With all your projects in [NAME], And we never stop innovating</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6 w-1/3 '>
                    <div className='space-y-2 gap-4 border rounded-2xl p-9'>
                        <div className='bg-blue-600 p-2 rounded-[5px] w-fit'>
                            <BoltIcon className='w-5 h-5  text-white' />
                        </div>
                        <h3 className='content-center font-medium text-[18px]'>Project Managment</h3>
                        <p className='light-p'> Manage your project from start to finish. With all your projects in [NAME], And we never stop innovating</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6 w-1/3 '>
                    <div className='space-y-2 gap-4 border rounded-2xl p-9'>
                        <div className='bg-blue-600 p-2 rounded-[5px] w-fit'>
                            <BoltIcon className='w-5 h-5  text-white' />
                        </div>
                        <h3 className='content-center font-medium text-[18px]'>Project Managment</h3>
                        <p className='light-p'> Manage your project from start to finish. With all your projects in [NAME], And we never stop innovating</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Why