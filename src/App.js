import './App.css';
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SkeletonLoader from './components/SkeletonLoader';

// Lazy loaded components
const NavBar = lazy(() => import('./components/NavBar'));
const Footer = lazy(() => import('./components/Footer'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const PageWrapper = lazy(() => import('./components/PageWrapper'));

// UPDATED: Now importing from components folder
const PillarDetail = lazy(() => import('./components/PillarDetail'));

function App() {
  return (
    <Router>
      <Suspense fallback={<SkeletonLoader />}>
        <NavBar title="NEMS" />
      </Suspense>

      <div className="content-wrapper w-100 m-0 p-0" style={{ minHeight: "80vh" }}>
        <Suspense fallback={<SkeletonLoader />}>
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/pillar/:type" element={<PageWrapper><PillarDetail /></PageWrapper>} />
          </Routes>
        </Suspense>
      </div>

      <Suspense fallback={<SkeletonLoader />}>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
