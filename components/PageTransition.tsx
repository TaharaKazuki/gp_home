'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { type ReactNode } from 'react';

type PageTransitionProps = {
  children: ReactNode;
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 1, ease: 'easeIn' },
        }}
        className="pointer-events-none fixed top-0 z-40 h-screen w-screen bg-white xl:z-40"
      />
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;
