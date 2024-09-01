import React, {useContext} from 'react';
import MyInfoContext from '../MyInfoContext';

const LandingHeaderSection = () => {
    const {robert} = useContext(MyInfoContext);

    return (
        <header>
            <h1>{robert.fullName}</h1>
            {robert.profession.map((title, key) => <h4 key={key} >{title}</h4>)}
        </header>
    )
};

export default LandingHeaderSection;