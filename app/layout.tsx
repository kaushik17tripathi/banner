import '@/app/_styles/globals.css';

import { Josefin_Sans } from 'next/font/google';
export const metadata = {
  title: 'Banner App',
  description: 'App to create banners',
};

const josefin = Josefin_Sans({
  //improves performance as font don't need to be downloaded from google server but from the local server
  subsets: ['latin'], //latin characters
  display: 'swap', //until the font is loaded, the browser will use a fallback font
});

import React,{ ReactNode } from 'react';

interface MyComponentProps {
  children: ReactNode;
}

const Layout:React.FC<MyComponentProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${josefin.className} text-gray-600`}>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

export default Layout;
