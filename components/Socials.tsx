import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
type SocialsProps = {
  containerStyles: string;
};

const SOCIALS = [
  {
    href: '/',
    icon: <FaFacebook />,
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
