import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './layout/Root';
import Home from './routes/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
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
