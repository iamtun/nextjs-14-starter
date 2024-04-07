import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <main>
      <h1>About Page</h1>
      <Link href={'/'}>Back home</Link>
    </main>
  );
};

export default Page;
