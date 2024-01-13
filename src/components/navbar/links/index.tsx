import Link from 'next/link';
import React from 'react';
import { publicRouterToRender } from '@/utils/router';

const Links = () => {
  return (
    <nav>
      {publicRouterToRender.map(({ title, url }, index) => (
        <Link
          href={url}
          key={index}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default Links;
