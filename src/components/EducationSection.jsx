import React, {useContext} from 'react';
import MyInfoContext from '../MyInfoContext';

const EducationSection = () => {
    const {education} = useContext(MyInfoContext);

    return (
        <section className='education-section' >
            <h1 className='sub-headers' id="education-section-anchor">Education</h1>
            {education.map(((degree, index) => {
                return (
                    <div className="education-container" key={index}>
                        <ul>
                            <li>{degree.school}</li>
                            <li>{degree.graduationYear}</li>
                            <li>{degree.subject}</li>
                            <li>{degree.type}</li>
                        </ul>
                    </div>
                )
            }))}
        </section>
    )
}

export default EducationSection;