import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LINKS } from '@/constant';

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="container mx-auto flex gap-8 text-center capitalize">
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
