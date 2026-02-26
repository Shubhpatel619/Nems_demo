import './App.css';
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SkeletonLoader from './components/SkeletonLoader';

// Lazy loaded components
const NavBar = lazy(() => import('./components/NavBar'));
const Footer = lazy(() => import('./components/Footer'));
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const PageWrapper = lazy(() => import('./components/PageWrapper'));

function App() {
  return (
    <Router>

      {/* Navbar */}
      <Suspense fallback={<SkeletonLoader />}>
        <NavBar title="NEMS" />
      </Suspense>

      {/* Main Content - FULL WIDTH LEFT ALIGNED */}
      <div
        className="content-wrapper w-100 m-0 p-0"
        style={{ minHeight: "80vh" }}
      >
        <Suspense fallback={<SkeletonLoader />}>
          <Routes>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              }
            />
          </Routes>
        </Suspense>
      </div>

      {/* Footer */}
      <Suspense fallback={<SkeletonLoader />}>
        <Footer />
      </Suspense>

    </Router>
  );
}

export default App;