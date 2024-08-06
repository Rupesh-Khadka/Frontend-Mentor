import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LearningPath from '../pages/LearningPath';
import Challenges from '../pages/Challenges';
import Solution from '../pages/Solution';
import Articles from '../pages/Articles';
import UnlockPro from '../pages/UnlockPro';
import Home from '../pages/Home';

const Welcome = () => {
  const routes = [
    {
        path: "/",
        element: <Home/>,
      },

    {
      path: "/learningpath",
      element: <LearningPath />,
    },
    {
      path: "/challenges",
      element: <Challenges />,
    },
    {
      path: "/solution",
      element: <Solution />,
    },
    {
      path: "/articles",
      element: <Articles />,
    },
    {
      path: "/unlockpro",
      element: <UnlockPro />,
    },
  ];

  return (
    <div>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};

export default Welcome;
