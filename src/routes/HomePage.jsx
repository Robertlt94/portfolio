import React from 'react';
import Headshot from '../components/Headshot';
import NavBar from '../components/NavBar';
import LandingHeaderSection from '../components/sections/LandingHeaderSection/LandingHeaderSection';
import AboutMeSection from '../components/sections/AboutMeSection/AboutMeSection';
import ExperiencesSection from '../components/sections/ExperiencesSection/ExperiencesSection';

const HomePage = () => {

    return (
        <div>
            <LandingHeaderSection />
            <AboutMeSection />
            <ExperiencesSection />
        </div>
    )
}

export default HomePage;