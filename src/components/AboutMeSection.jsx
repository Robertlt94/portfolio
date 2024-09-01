import React, {useContext} from 'react';
import MyInfoContext from '../MyInfoContext';

const AboutMeSection = () => {
    const {robert} = useContext(MyInfoContext);

    return (
        <article>
            <p>{robert.about}</p>
        </article>
    )
}

export default AboutMeSection;