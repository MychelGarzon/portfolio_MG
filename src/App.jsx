import React from 'react';
import { createBrowserRouter, RouterProvider, useRouteError } from 'react-router-dom';
import Root from './layout/Root';
import Home from './routes/Home';
import ProjectDetail from './routes/SinglePage';
import Projects from './routes/Projects';
import ContactPage from './routes/ContactPage';
import SkillsPage from './routes/SkillsPage';
import WorkflowsPage from './routes/WorkflowsPage';

// Error component for router errors
const ErrorPage = () => {
  const error = useRouteError();
  console.error('Router error:', error);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Oops! Something went wrong</h1>
      <p>Sorry, we encountered an error while loading this page.</p>
      <details style={{ marginTop: '1rem' }}>
        <summary>Error details</summary>
        <pre style={{ textAlign: 'left', background: '#f5f5f5', padding: '1rem' }}>
          {error?.stack || error?.message || 'Unknown error'}
        </pre>
      </details>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: '/projects',
        element: <Projects />,
        errorElement: <ErrorPage />
      },
      {
        path: '/skills',
        element: <SkillsPage />,
        errorElement: <ErrorPage />
      },
      {
        path: '/projects/:projectId',
        element: <ProjectDetail />,
        errorElement: <ErrorPage />
      },
      {
        path: '/contact',
        element: <ContactPage />,
        errorElement: <ErrorPage />
      },
      {
        path: '/workflows',
        element: <WorkflowsPage />,
        errorElement: <ErrorPage />
      }
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
