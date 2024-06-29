import type { Metadata } from 'next';
import clsx from 'clsx';
import { Marcellus, Montserrat, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-marcellus',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: 'GP_Home',
  description: 'GP_Home Web site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-screen">
      <body
        className={clsx(
          marcellus.variable,
          montserrat.variable,
          notoSansJP.variable,
          'font-sans',
          'overflow-x-hidden'
        )}
      >
        {children}
      </body>
    </html>
  );
}
