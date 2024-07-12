import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const LINKS = [
  { href: '/', name: 'Home' },
  { href: '/about', name: 'About' },
  { href: '/treatments', name: 'Treatments' },
  { href: '/contact', name: 'Contact' },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="container mx-auto flex gap-8">
        {LINKS.map((link, i) => (
          <Link
            href={link.href}
            key={i}
            className={`${
              pathname === link.href && 'border-b-2 border-accent'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
