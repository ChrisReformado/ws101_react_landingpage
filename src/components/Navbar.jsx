import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = () => {
        setIsOpen(false); // Close the menu when a link is clicked
    };

    return (
        <nav>
            <div className="logo">Chris</div>
            <div className="burger" onClick={toggleMenu}>
                {isOpen ? (
                    <div className="close">✖</div>
                ) : (
                    <>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </>
                )}
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#hero" onClick={handleLinkClick}>Home</a></li>
                <li><a href="#about" onClick={handleLinkClick}>Importance</a></li>
                <li><a href="#contacts" onClick={handleLinkClick}>Tools</a></li>
                <li><a href="#footer" onClick={handleLinkClick}>Footer</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
