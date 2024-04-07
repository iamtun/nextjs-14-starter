import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div>
      <h1>Post Page</h1>
      <ul>
        <li>
          <Link href={'/posts/1'}>Post #1</Link>
        </li>
        <li>
          <Link href={'/posts/2'}>Post #2</Link>
        </li>
        <li>
          <Link href={'/posts/3'}>Post #3</Link>
        </li>
      </ul>
      <Link href={'/'}>Back home</Link>
    </div>
  );
};

export default Page;
