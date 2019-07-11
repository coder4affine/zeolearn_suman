import React from 'react';
import loadable from '@loadable/component';
import NotFound from './screens/NotFound';

const AsyncHome = loadable(() => import('./screens/Home'), {
  fallback: <div>Loading...</div>,
});
const AsyncAbout = loadable(() => import('./screens/About'), {
  fallback: <div>Loading...</div>,
});
const AsyncDetails = loadable(() => import('./screens/Details'), {
  fallback: <div>Loading...</div>,
});

const route = [
  {
    path: '/',
    exact: true,
    authRequire: false,
    component: AsyncHome,
    label: 'Home',
  },
  {
    path: '/about',
    component: AsyncAbout,
    label: 'About',
  },
  {
    path: '/details',
    component: AsyncDetails,
    label: 'Details',
  },
  {
    component: NotFound,
  },
];

export default route;
