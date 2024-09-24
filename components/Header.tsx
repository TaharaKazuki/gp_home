'use client';

import { motion } from 'framer-motion';
import React, { useContext, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

import MobileNav from './MobileNav';
import Nav from './Nav';
import Socials from './Socials';
import { CursorContext } from '@/provider/CursorContext';

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className="fixed z-40 w-full bg-accent-100 pb-6 xl:bg-transparent xl:pb-[50px]">
      <div className="mb-6 bg-accent py-4 xl:mb-[50px] xl:h-[50px] xl:py-8">
        <div className="container mx-auto h-full">
          <div className="flex h-full items-center justify-between">
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="flex size-full flex-col items-center justify-between gap-2 lg:flex-row xl:w-auto xl:justify-normal xl:gap-6"
            >
              {/* phone */}
              <div className="flex items-center gap-2 text-white">
                <FaPhoneAlt />
                <span>090 0000 0000</span>
              </div>
              {/* email */}
              <div className="flex items-center gap-2 text-white">
                <IoMdMail />
                <span>sample@co.jp</span>
              </div>
            </motion.div>
            {/* socials */}
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="hidden xl:block"
            >
              <Socials containerStyles="flex gap-6 text-xl text-white" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* logo */}
        <div
          className="cursor-pointer xl:hidden"
          onClick={() => setMobileNav(true)}
        >
          <AiOutlineMenu className="text-3xl text-primary" />
        </div>

        {/* mobile nav */}
        <motion.div
          initial={{ right: '-100%' }}
          animate={{ right: mobileNav ? 0 : '-100%' }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
          className="fixed inset-y-0 right-0 z-50 w-[300px] bg-primary xl:hidden"
        >
          <MobileNav setMobileNav={setMobileNav} />
        </motion.div>
        {/* desktop nav */}
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden xl:block"
        >
          <Nav />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
