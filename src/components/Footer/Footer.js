import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
      <div className="footer">
        <div className="left-section">
          <h4>FWD SERVICES LLC</h4>
          <p>&copy; amar bessedik - All Rights Reserved - July 2020.</p>
        </div>
        <div className="right-section">
          <ul>
            <li>
              <Link to='/'>Service</Link>
            </li>
            <li>
              <Link to='/'>Service</Link>
            </li>
            <li>
              <Link to='/'>Service</Link>
            </li>
            <li>
              <Link to='/'>Service</Link>
            </li>
            </ul>
          <ul>
            <li>
              <Link to='/'>Service</Link>
            </li>
            <li>
              <Link to='/'>Service</Link>
            </li>
            <li>
              <Link to='/'>Service</Link>
            </li>
            <li>
              <Link to='/'>Service</Link>
            </li>
            </ul>
          <ul>
            <li>
              <Link to='/'>Service</Link>
            </li>
            <li>
              <Link to='/'>Service</Link>
            </li>
            <li>
              <Link to='/'>Service</Link>
            </li>
            <li>
              <Link to='/'>Service</Link>
            </li>
            </ul>
        </div>
      </div>
    );
};

export default Footer;
