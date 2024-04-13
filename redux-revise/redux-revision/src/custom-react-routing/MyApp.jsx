import React from 'react';
import Router from './Router';
import Link from './Link';

import NotFound from './components/NotFound';
import MyHome from './components/MyHome';
import MyAbout from './components/MyAbout';

const routes = {
  '/': <MyHome />,
  '/about': <MyAbout />,
};

const MyApp = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Router routes={routes} />
    </div>
  );
};

export default MyApp;
