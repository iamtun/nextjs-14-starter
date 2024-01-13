interface IRouter {
  [key: string]: {
    url: string;
    title: string;
  };
}

const publicRouter: IRouter = {
  home: {
    url: '/',
    title: 'Home',
  },
  about: {
    url: '/about',
    title: 'About',
  },
  blog: {
    url: '/blog',
    title: 'Blog',
  },
  contact: {
    url: '/contact',
    title: 'Contact',
  },
};

const protectedRouter = {
  admin: {
    url: '/admin',
    title: 'Admin',
  },
};

const authRouter = {
  login: {
    url: '/login',
    title: '',
  },
  register: {
    url: '/register',
    title: '',
  },
  forgotPassword: {
    url: '/forgot-password',
    title: '',
  },
};

const publicRouterToRender = Object.keys(publicRouter).map(
  (key) => publicRouter[key],
);

export { protectedRouter, publicRouter, authRouter, publicRouterToRender };
