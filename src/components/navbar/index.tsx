import React from 'react';
import Links from './links';

const Navbar = () => {
  return (
    <header className='h-[100px] flex justify-between items-center'>
      <div className='text-3xl font-bold'>Logo</div>
      <Links />
    </header>
  );
};

export default Navbar;
