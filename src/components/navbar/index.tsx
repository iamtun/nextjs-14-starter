import React from 'react';
import Links from './links';
import Link from 'next/link';
import { publicRouter } from '@/utils/router';

const Navbar = () => {
  return (
    <header className="h-[100px] flex justify-between items-center">
      <Link
        className="text-3xl font-bold"
        href={publicRouter['home'].url}
      >
        Logo
      </Link>
      <Links />
    </header>
  );
};

export default Navbar;
