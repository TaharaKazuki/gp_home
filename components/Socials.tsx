import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
type SocialsProps = {
  containerStyles: string;
};

const SOCIALS = [
  {
    href: '/',
    icon: <FaYoutube />,
  },
  {
    href: '/',
    icon: <FaFacebook />,
  },
  {
    href: '/',
    icon: <FaTwitter />,
  },
  {
    href: '/',
    icon: <FaInstagram />,
  },
];

const Socials = ({ containerStyles }: SocialsProps) => {
  return (
    <ul className={`${containerStyles}`}>
      {SOCIALS.map((social, i) => (
        <li key={i}>
          <Link href={social.href}>{social.icon}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
