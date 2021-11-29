import React from 'react';
import About from '../../About/About';
import Protfolio from '../../Portfolio/Portfolio';
import Services from '../../Services/Services';
import Skills from '../../Skills/Skills';
const Home = () => {
    return (
        <div>
            <About></About>
            <Services></Services>
            <Skills></Skills>
            <Protfolio></Protfolio>
        </div>
    );
};

export default Home;