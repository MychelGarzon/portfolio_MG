import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './layout/Root';
import Home from './routes/Home';
import ProjectDetail from './routes/SinglePage';
import ProjectCards from './components/ProjectCard';
import Projects from './routes/Projects';
import Skills from './components/Skills';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/projects',
        element: <ProjectCards />
      },
      {
        path: '/skills',
        element: <Skills />
      },
      {
        path: '/projects/:projectId',
        element: <ProjectDetail />
      },

    ]
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />

    </React.StrictMode>
  );
}

export default App;
