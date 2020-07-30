import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NoMatch from './pages/NoMatch/NoMatch';
import { Route, Switch} from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="outer-container">
      <Navbar />
      <div className="inner-container">
        <div className="main-content">
          <Hero />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <div className="sidebar-content">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
