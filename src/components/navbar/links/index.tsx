'use client';
import React, { useState } from 'react';
import {
  publicRouterToRender,
  authRouter,
  protectedRouter,
} from '@/utils/router';
import NavLink from './navLink';

const Links = () => {
  const session = true;
  const isAdmin = true;
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <nav className="hidden sm:flex items-center gap-3">
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
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="block sm:hidden text-sm lg:text-base"
      >
        Menu
      </button>
      {open && (
        <nav className="absolute top-[100px] right-0 w-1/2 h-screen bg-inherit flex flex-col items-center justify-center gap-[10px] overflow-hidden duration-500 ease-in-out">
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
      )}
    </div>
  );
};

export default Links;
