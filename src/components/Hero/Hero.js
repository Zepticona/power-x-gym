import React, { useState } from 'react';
import HomeHero from './HomeHero/HomeHero';

const Hero = () => {
    // Load different content based on navigation data
    const [notHomePage, setNotHomePage] = useState(false);

    const pageChangedHandler = () => {
        setNotHomePage(!notHomePage);
        console.log('clicked!');
    }

    let heroContent = <HomeHero btnClicked={pageChangedHandler} />
    if(notHomePage) {
        heroContent = (
            <article className="other-hero">
                <h2>Our Classes</h2>
            </article>
        )
    }
    return (
        <section className="hero">
            {heroContent}
        </section>
    );
};

export default Hero;