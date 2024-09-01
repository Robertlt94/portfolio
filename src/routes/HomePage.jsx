import React from 'react';
import Headshot from '../components/Headshot';
import NavBar from '../components/NavBar';
import LandingHeaderSection from '../components/LandingHeaderSection';
import AboutMeSection from '../components/AboutMeSection';
import ExperiencesSection from '../components/ExperiencesSection';

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