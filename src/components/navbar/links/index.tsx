import React from 'react';
import {
  publicRouterToRender,
  authRouter,
  protectedRouter,
} from '@/utils/router';
import NavLink from './navLink';

const Links = () => {
  const session = true;
  const isAdmin = true;

  return (
    <nav className="flex items-center gap-3">
      {publicRouterToRender.map(({ title, url }, index) => (
        <NavLink
          url={url}
          title={title}
          key={index}
        />
      ))}

      {session ? (
        <>
          {isAdmin && (
            <NavLink
              url={protectedRouter['admin'].url}
              title={protectedRouter['admin'].title}
            />
          )}
          <button className="h-auto bg-white p-2 text-black font-medium">
            Logout
          </button>
        </>
      ) : (
        <NavLink
          url={authRouter['login'].url}
          title={authRouter['login'].title}
        />
      )}
    </nav>
  );
};

export default Links;
