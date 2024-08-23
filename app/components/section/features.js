import React from 'react';
import { CubeTransparentIcon, FolderOpenIcon } from '@heroicons/react/24/outline';

const Features = () => {
    return (
        <div className='flex flex-col rounded-2xl bg-white p-24 gap-8'>
            <div className='flex flex-col' >
                <div className='flex border border-gray-400 text-sm px-2 py-1 rounded-[8px] gap-2 w-fit content-center'>
                    <CubeTransparentIcon className='w-6 h-6 text-gray-600' />
                    <div className='content-center text-gray-600'>
                        Features
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='section-heading'>Everything You Need in One Tool</h2>
                    <p className='light-p'>Our tool’s exceptional flexibility can handle any type of work. And we never stop innovating to help you achieve more.</p>
                </div>
            </div>
            <div className='flex gap-24'>
                <div className='flex flex-col gap-6 w-1/2 '>
                    <div className="h-[400px] bg-gray-200 rounded-[26px] dark:bg-neutral-700 w-[100%] animate-pulse">
                    </div>
                    <div>
                        <div className='flex w-fit gap-2'>
                            <FolderOpenIcon className='w-6 h-6' />
                            <h3 className='content-center font-medium text-[18px]'>Smart Flashcards</h3>
                        </div>
                        <p className='light-p'>Easily create, organize, and review flashcards that adapt to your learning pace. Our smart algorithms ensure that you focus on what you need to learn the most.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6 w-1/2 '>
                    <div className="h-[400px] bg-gray-200 rounded-[26px] dark:bg-neutral-700 w-[100%] animate-pulse">
                    </div>
                    <div>
                        <div className='flex w-fit gap-2'>
                            <FolderOpenIcon className='w-6 h-6' />
                            <h3 className='content-center font-medium text-[18px]'>AI-Powered Insights</h3>
                        </div>
                        <p className='light-p'>Our AI analyzes your progress and provides insights to help you learn more effectively, offering personalized tips and suggestions tailored to your study habits.</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-24'>
                <div className='flex flex-col gap-6 w-1/2 '>
                    <div className="h-[400px] bg-gray-200 rounded-[26px] dark:bg-neutral-700 w-[100%] animate-pulse">
                    </div>
                    <div>
                        <div className='flex w-fit gap-2'>
                            <FolderOpenIcon className='w-6 h-6' />
                            <h3 className='content-center font-medium text-[18px]'>Seamless Collaboration</h3>
                        </div>
                        <p className='light-p'>Work together with your friends or classmates. Share flashcards, compare progress, and learn more effectively as a group.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6 w-1/2 '>
                    <div className="h-[400px] bg-gray-200 rounded-[26px] dark:bg-neutral-700 w-[100%] animate-pulse">
                    </div>
                    <div>
                        <div className='flex w-fit gap-2'>
                            <FolderOpenIcon className='w-6 h-6' />
                            <h3 className='content-center font-medium text-[18px]'>Comprehensive Statistics</h3>
                        </div>
                        <p className='light-p'>Track your progress with detailed statistics. See how much you have improved over time and identify areas that need more focus.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
