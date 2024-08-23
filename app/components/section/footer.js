import React from 'react'

const Footer = () => {
    return (
        <div className='text-white bg-black/[0.96] antialiased bg-grid-white/[0.02] w-full justify-center py-24 rounded-2xl text-center flex flex-col items-center gap-8'>
            <div className='text-center w-3/4 flex flex-col items-center'>
                <h2 className='section-heading'>A Better way to Work Today Together</h2>
                <div className="font-normal text-xs md:text-xl dark:text-neutral-200 py-4 text-center font-helvetica text-[#838383] w-5/6">
                    Here's what some of our customers are saying about our platform Here's what some of our customers are saying about our platform of our customers are saying about our platform </div>
            </div>
            <div className="flex gap-4 text-[17px]">
                <button className="bg-white dark:bg-white rounded-2xl w-fit text-black px-7 py-4 font-medium font-helvetica">
                    Get Started
                </button>
                <button className="border-white border-[0.75px] text-white dark:bg-white rounded-2xl w-fit bg-[#232222] px-7 py-4 font-medium font-helvetica">
                    How it works
                </button>
            </div>


        </div>
    )
}

export default Footer