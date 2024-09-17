'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import MobileNav from './MobileNav';
import Nav from './Nav';

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className="fixed z-40 w-full bg-accent-100 pb-6 xl:bg-transparent xl:pb-[50px]">
      <div className="mb-6 bg-secondary-100 py-4 xl:mb-[50px] xl:h-[50px] xl:py-8"></div>
      <div className="container mx-auto flex items-center justify-between px-6">
        <div>
          <Link href="/">
            <Image
              src="assets/logo.svg"
              width={120}
              height={44}
              className="object-cover"
              priority
              alt=""
            />
          </Link>
        </div>
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
        <div className="hidden xl:block">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
