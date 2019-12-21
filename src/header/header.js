import React from 'react';
import styles from './header.css';

const Header = () => {
    return (
        <div className="header-container">
            <ul className="header-menu-items">
                <li>Home</li>
                <li>Map</li>
                <li>About</li>
            </ul>
        </div>)
};

export default Header;