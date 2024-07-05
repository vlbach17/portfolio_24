// src/App.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from 'react-router-dom';
import ErrorBoundary from './ErrorBroundary';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/index.scss';
import { NavigationBar, Footer } from './components';
import { HomePage, NotFound, Portfolio, Resume, Contact } from './routes';

const router = createBrowserRouter([
  {
    path: '*',
    element: (
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: 'portfolio',
        element: <Portfolio />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: 'resume',
        element: <Resume />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: 'contact',
        element: <Contact />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: '*',
        element: <NotFound />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export function App() {
  return (
    <div>
      <div
        id="vb-page-header"
        className="vb-page-header container-fluid py-lg-1 px-lg-2 my-5"
      >
        <div className="container-lg p-0">
          <NavigationBar />
          <div className="p-4 vb-page-content-wrapper">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
