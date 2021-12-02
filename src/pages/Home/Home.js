import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Resume from '../Resume/Resume/Resume';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
            <About></About>
            <Services></Services>
            <Resume></Resume>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;