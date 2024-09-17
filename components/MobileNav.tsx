import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

import Socials from './Socials';
import { LINKS } from '@/constant';

type MobileNavProps = {
  setMobileNav: (_arg: boolean) => void;
};

const MobileNav = ({ setMobileNav }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <nav className="relative flex h-full flex-col justify-between p-8">
      <div
        className="cursor-pointer text-accent"
        onClick={() => setMobileNav(false)}
      >
        <IoCloseOutline className="text-4xl" />
      </div>
      <ul className="flex flex-col gap-10 text-xl text-white">
        {LINKS.map((link, i) => (
          <Link
            href={link.href}
            key={i}
            className={`${
              pathname === link.href && 'border-b-2 border-accent'
            } mx-auto max-w-max uppercase`}
          >
            {link.name}
          </Link>
        ))}
      </ul>
      <Socials containerStyles="text-white text-lg flex gap-6 justify-center" />
    </nav>
  );
};

export default MobileNav;
