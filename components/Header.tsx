'use client';

import { motion } from 'framer-motion';
import React, { useContext } from 'react';

import { CursorContext } from '@/app/provider/CursorContext';

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.header
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="p-24"
    >
      header
    </motion.header>
  );
};

export default Header;
