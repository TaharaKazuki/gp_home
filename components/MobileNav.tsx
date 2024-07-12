import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

type MobileNavProps = {
  setMobileNav: (_arg: boolean) => void;
};

const MobileNav = ({ setMobileNav }: MobileNavProps) => {
  return (
    <nav className="text-white">
      <div className="cursor-pointer" onClick={() => setMobileNav(false)}>
        <IoCloseOutline className="text-4xl" />
      </div>
    </nav>
  );
};

export default MobileNav;
