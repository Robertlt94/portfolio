import React, {useState, useEffect} from 'react';
import Headshot from '../components/ImageCarousel';
import NavBar from '../components/NavBar';
import LandingSection from '../components/LandingSection';
import AboutMeSection from '../components/AboutMeSection';
import ExperiencesSection from '../components/ExperiencesSection';

const HomePage = () => {
    // variable to hold the width value of the viewport of the device the user is currently on
    const [viewPortWidth, setViewPortWidth] = useState(window.innerWidth);

    useEffect(() => {
        // function to obtain the 
        function viewPortChange() {
            setViewPortWidth(window.innerWidth)
        };
        // call function with initial load to obtain initial value
        viewPortChange();
        console.log(viewPortWidth)
        // add event listener - on viewport change, get new viewport width
        window.addEventListener("resize", viewPortChange);
        // remove event listener
        return () => {
            window.removeEventListener("resize", viewPortChange);
        }
    }, []);

    return (
        <div>
            {viewPortWidth > 425 ? <NavBar /> : <></>}
            <LandingSection />
            <ExperiencesSection />
            {viewPortWidth < 425 ? <NavBar /> : <></>}
        </div>
    )
}

export default HomePage;