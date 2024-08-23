'use client'
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Spotlight } from '../ui/spotlight';
import { Highlight } from '../ui/hero-highlight';
import Link from 'next/link';

export default function Header() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  return (
    <motion.div
      initial={{ y: '100vh', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 90,
        damping: 15,
        mass: 1
      }}
      viewport={{ once: true, margin: '-1000px 0px -1000px 0px' }}
      className="text-center rounded-2xl h-[100vh] w-full flex pt-[100px] md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
    >
      <Spotlight
        className="-top-20 left-0 md:left-60 md:-top-20 text-white"
        fill="white"
      />
      <motion.div
        className="relative flex flex-col gap-3 items-center px-4 w-3/6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.5,
            },
          },
        }}
      >
        <motion.div
          initial={{ y: '100px', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
          className="text-3xl md:text-7xl font-bold dark:text-white text-white min-w-[900px]"
        >
          One Tool For
          <div>
            <Highlight>
              Learning Together
            </Highlight>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: '100px', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
          className="font-normal text-xs md:text-xl dark:text-neutral-200 py-4 text-center font-helvetica text-[#838383]"
        >
          Our tool enables you to achieve clarity and significant results by linking learning tasks to your overarching goals. Study smarter, not harder.
        </motion.div>
        <motion.div
          initial={{ y: '100px', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.1 }}
          className="flex gap-4 text-[17px]"
        >
          <Link href="/question">
            <button className="bg-white dark:bg-white rounded-2xl w-fit text-black px-7 py-4 font-medium font-helvetica">
              Get Started
            </button>
          </Link>
          <motion.div
            initial={{ x: '-40px', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.4 }}
            className="flex gap-4 text-[17px]"
          >
            <button className="border-white border-[0.75px] text-white dark:bg-white rounded-2xl w-fit bg-[#232222] px-7 py-4 font-medium font-helvetica">
              How it works
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
