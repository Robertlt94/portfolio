import React, {useContext} from 'react';
import MyInfoContext from '../MyInfoContext';

const FooterSection = () => {
    const {connects} = useContext(MyInfoContext);

    return (
        <section className='project-section' >
            <h1 className='sub-headers' id="bottom-of-page">Connect with me:</h1>
            <div>
            {connects.map(((connect, key) => {
                return (
                    <div className="education-container">
                        <div>
                            {connect.logo}
                        </div>
                        <h1>{connect.platform}</h1>
                    </div>
                )
            }))}
            </div>
        </section>
    );
};

export default FooterSection;