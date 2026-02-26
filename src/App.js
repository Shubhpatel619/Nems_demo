import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    /* 
      The basename property ensures the app works in the /Nems_demo/ subfolder on GitHub.
      process.env.PUBLIC_URL is empty locally, so it won't break your local development.
    */
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar title="NEMS" />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
