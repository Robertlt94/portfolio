import React, {useContext} from 'react';
import MyInfoContext from '../MyInfoContext';

const ProjectSection = () => {
    const {projects} = useContext(MyInfoContext);

    return (
        <section className='project-section' >
            <h1 className='sub-headers' id="project-section-anchor">Projects</h1>
            <div>
                {projects.map(((project, key) => {
                    return (
                        <div className="education-container">
                            <ul>
                                <li>{project.name}</li>
                                <li>{project.media}</li>
                                <li>{project.tech}</li>
                                <li>{project.details}</li>
                            </ul>
                        </div>
                    )
                }))}
            </div>
        </section>
    )
}

export default ProjectSection;