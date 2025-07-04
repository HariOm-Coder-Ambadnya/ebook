// src/component/Nav.js
import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './index.css';
import { ThemeContext } from './ThemeProvider';

export function Nav() {
    const { theme , toggleTheme } = useContext(ThemeContext); // ✅ Will work only if wrapped correctly
    console.log('Theme:', theme);

    let thymeStyle = {};

    if (theme === 'light') {
      thymeStyle = { backgroundColor: 'white', color: 'black' };
    } else {
      thymeStyle = { backgroundColor: 'black', color: 'white' };
    }

    return (
        <>
            <header>
                <nav className="navbar" id="navs" style={thymeStyle}>
                    <div className="logo">MySite</div>
                    <ul className="nav-links">
                        <li style={{color:'black'}}><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/apps">Product</Link></li>
                    </ul>
                    <button
            onClick={toggleTheme}
            style={{
              marginLeft: 'auto',
              padding: '6px 12px',
              cursor: 'pointer',
              backgroundColor: theme === 'light' ? '#222' : '#eee',
              color: theme === 'light' ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
                </nav>
            </header>
        </>
    );
}
