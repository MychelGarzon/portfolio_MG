import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './layout/Root';
import Home from './routes/Home';
import ProjectDetail from './routes/SinglePage';
import ProjectCards from './components/ProjectCard';

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
        path: '/projects', // Route to the projects page
        element: <ProjectCards /> // Show the list of projects
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
