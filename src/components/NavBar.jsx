import React from 'react';
import mobileNavIcons from './mobileNavIcons';

const navBar = ({viewPortWidth}) => {

    return (
        <section className="navbar">
            {viewPortWidth < 600?
                <>
                    <ul>
                        <li><a href="#top-of-page"><mobileNavIcons /></a></li>
                        <li><a href="#education-section-anchor"><mobileNavIcons /></a></li>
                        <li><a href="#experiences-section-anchor"><mobileNavIcons /></a></li>
                        <li><a href="#project-section-anchor"><mobileNavIcons /></a></li>
                        <li><a href="#bottom-of-page"><mobileNavIcons /></a></li>
                    </ul>
                </>
            :
                <>
                    <ul>
                        <li><a href="#top-of-page">Robert Thao</a></li>
                        <li><a href="#education-section-anchor">Education</a></li>
                        <li><a href="#experiences-section-anchor">Experiences</a></li>
                        <li><a href="#project-section-anchor">Projects</a></li>
                        <li><a href="#bottom-of-page">Connect</a></li>
                    </ul>
                </>
            }
        </section>
    )
}

export default navBar;