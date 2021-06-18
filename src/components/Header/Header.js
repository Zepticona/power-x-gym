import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <a href="/home" className="header__logo">Power  <span className="header__logo--X">X</span></a>
            <nav className="header__nav">
                <NavLink className="header__nav-item" activeClassName="header__nav-item--active" to="/home">Home</NavLink>
                <NavLink className="header__nav-item" activeClassName="header__nav-item--active" to="/services">Services</NavLink>
                <NavLink className="header__nav-item" activeClassName="header__nav-item--active" to="our-classes">Our Classes</NavLink>
                <NavLink className="header__nav-item" activeClassName="header__nav-item--active" to="about-us">About us</NavLink>
                <NavLink className="header__nav-item" activeClassName="header__nav-item--active" to="blog">Blog</NavLink>
                <NavLink className="header__nav-item" activeClassName="header__nav-item--active" to="pricing">Pricing</NavLink>
                <NavLink className="header__nav-item" activeClassName="header__nav-item--active" to="contact-us">Contact Us</NavLink>
            </nav>
        </header>
    );
};

export default Header;