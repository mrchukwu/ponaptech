// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "../src/pages/Home";
import Services from '../src/pages/Services';
import AboutUs from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Navbar from '../src/components/navbar/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
