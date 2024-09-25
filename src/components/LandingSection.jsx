import React, {useContext} from 'react';
import MyInfoContext from '../MyInfoContext';
import ImageCarousel from './ImageCarousel';

const LandingSection = () => {
    const {robert} = useContext(MyInfoContext);

    return (
        <header className="about-section" id="top-of-page">

            <h1>{robert.fullName}</h1>
            {robert.profession.map((title, key) => {
                <h4 className="sub-headers" >{title}</h4>
            })}
            <article>
                {robert.about}
            </article>
        </header>
    )
};

export default LandingSection;