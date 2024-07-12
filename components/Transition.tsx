'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

// variants
const animation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '-100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
};

const Transition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="pointer-events-none fixed inset-x-0 top-0 z-50 hidden xl:flex xl:h-screen xl:w-screen">
            <motion.div
              variants={animation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: 'easeInOut',
                delay: 0.4,
              }}
              className="relative size-full bg-[#e2cfbd]"
            />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default Transition;
