import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const LINKS = [
  { href: '/', name: 'Home', subText: 'ホーム' },
  { href: '/about', name: 'About', subText: '私たちについて' },
  { href: '/treatments', name: 'Treatments', subText: 'サンプル' },
  { href: '/contact', name: 'Contact', subText: 'コンタクト' },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="container mx-auto flex gap-8 text-center uppercase">
        {LINKS.map((link, i) => (
          <Link
            href={link.href}
            key={i}
            className={`${
              pathname === link.href && 'border-b-2 border-accent'
            }`}
          >
            {link.name}
            <div className="text-[9px]">{link.subText}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
