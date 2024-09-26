import React, {useContext} from 'react';
import MyInfoContext from '../MyInfoContext';
import LandingImage from './LandingImage';

const LandingSection = () => {
    const {robert} = useContext(MyInfoContext);

    return (
        <header id="top-of-page">
            <div className='landing-image-container'>
                <LandingImage />
            </div>
            <h1 className="sub-headers">{robert.fullName}</h1>
            {robert.profession.map((title, index) => {
                <h4 className="sub-headers" key={index}>{title}</h4>
            })}
            <article>
                <p>{robert.about}</p>
            </article>
        </header>
    )
};

export default LandingSection;