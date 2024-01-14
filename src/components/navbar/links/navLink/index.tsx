'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
  url: string;
  title: string;
}

const NavLink: React.FC<Props> = ({ url, title }) => {
  const pathName = usePathname();
  return (
    <Link
      href={url}
      className={`min-w-[100px] p-[10px] rounded-[20px] font-medium text-center hover:bg-white hover:text-bg-soft-color ${
        pathName === url ? 'bg-white text-bg-soft-color' : ''
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
