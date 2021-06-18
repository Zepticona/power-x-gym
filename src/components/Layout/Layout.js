import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Container from './Container/Container';
import FullWidthBg from './FullWidthBg/FullWitdhBg';
const Layout = () => {
    return (
        <div className="">
            <Router>
                <FullWidthBg>
                    <Container>
                        <Header />
                        <Hero />
                    </Container>
                </FullWidthBg>
            </Router>
        </div>
    );
};

export default Layout;