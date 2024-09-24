import React, {useContext} from 'react';
import MyInfoContext from '../MyInfoContext';
import TechTip from './TechTip';

const AboutMeSection = () => {
    const {robert} = useContext(MyInfoContext);

    return (
        <article>
            <p>{robert.about}</p>
        </article>
    )
}

export default AboutMeSection;