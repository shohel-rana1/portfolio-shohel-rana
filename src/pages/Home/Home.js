import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Skills from '../Resume/Resume';
const Home = () => {
    return (
        <div>
            <About></About>
            <Services></Services>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;