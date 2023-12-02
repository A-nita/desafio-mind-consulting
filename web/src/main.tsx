import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter,
         RouterProvider,
       } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
  path: "/",
  element: <Root />,
  errorElement: <ErrorPage />,
  },
  {
  path: "/dashboard",
  element: <App />,
  }
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </QueryClientProvider>
  </React.StrictMode>,
)
