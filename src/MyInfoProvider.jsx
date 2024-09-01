import React, {useState} from 'react';
import MyInfoContext from './MyInfoContext';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckIcon from '@mui/icons-material/Check';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import Monicat from './components/assets/monicatdata_logo.jpeg';
import Mdh from './components/assets/reading_math_inc_logo.jpeg';
import Walmart from './components/assets/walmart_logo.jpeg';
import Brakebush from './components/assets/brakebush_chicken_logo.jpeg';
import Randstad from './components/assets/randstadusa_logo.jpeg';
import Teksystems from './components/assets/teksystems_logo.jpeg';
import Sppl from './components/assets/saint_paul_public_library_logo.jpeg';

const MyInfoProvider = ({children}) => {
    const [robert] = useState(
        {
            fullName: "Robert Thao",
            profession: ["IT Professional", "Software Engineer", "Project Manager"],
            location: "Minnesota",
            about: "With a rich background spanning public health, retail, and community outreach, I bring a unique perspective to IT, software engineering, and project management. My journey across various industries has refined my problem-solving abilities, leadership skills, and customer-centric approach. Alongside my non-traditional path, I’ve pursued certifications in front-end and back-end development, full-stack software engineering, and project management, driven by a passion for technology and innovation. I thrive in dynamic, fast-paced environments, and am eager to leverage my multifaceted skills to create impactful solutions that meet the needs of both teams and clients."
        }
    );
    const [experiences] = useState(
        [
            {
                duration: "July 2024 - Aug 2024",
                title: "Software Engineer Intern",
                icon: <CodeIcon color="" />,
                logo: <img src={Monicat} className='company-logo' />,
                company: "Monicat Data",
                details: [
                    "QA tested web applications manually for bugs and ensured they met final development standards before handoff to clients.",
                    "Contributed to frontend development using React.js and Next.js, enhancing UI and UX consistency across platforms.",
                    "Utilized Scrum and Agile methodologies to develop, test, and deliver web applications through iterative sprints, ensuring timely and efficient project completion."
                ]
            },
            {
                duration: "Aug 2023 - Jul 2024",
                title: "Public Health Project Coordintor",
                icon: <GroupsIcon />,
                logo: <img src={Mdh} className='company-logo' />,
                company: "Ampact",
                details: [
                    "Served my service term at the Minnesota Department of Health with their Community Health Worker Traning Program",
                    "Researched missing data, identified potential networking opportunities, apprenticeship and scholarship recipient sites, and enhanced project capacity through strategic initiatives.",
                    "Established presence with various partners and organizations statewide, focusing on diversity to address gap areas identified in year 1 of the initiative.",
                    "Assisted in progress reports, weekly meetings, and presentations to ensure seamless project coordination.",
                    "Acquired proficiency in Adobe Captivate 2023 to modernize e-learning materials for the state's Learning Management System (LMS).",
                    "Formulated documents to consolidate data and resources for streamlined reporting processes."
                ]
            },
            {
                duration: "Apr 2021 - Dec 2021",
                title: "Front End Team Lead",
                icon: <GroupsIcon />,
                logo: <img src={Walmart} className='company-logo' />,
                company: "Walmart",
                details: [
                    "Oversaw daily operations, including opening/closing, cash handling, self-checkouts, and the maintenance team.",
                    "Analyzed sales reports to mitigate profit loss.",
                    "Managed a team of 20-30 members per shift, emphasizing customer satisfaction and team morale.",
                    "Conducted training sessions for new hires on company policies, procedures, and technical skills."
                ]
            },
            {
                duration: "Jul 2020 - Apr 2021",
                title: "Quality Assurance Specialist & Backup Receiver",
                icon: <CheckIcon />,
                logo: <img src={Brakebush} className='company-logo' />,
                company: "Brakebush Chicken",
                details: [
                    "Ensured compliance with USDA and company standards through facility testing and inspections.",
                    "Collaborated with department leads and managers to address deficiencies and violations.",
                    "Conducted product assessments and utilized SAP for data tracking.",
                    "Enforced USDA, OSHA, and company standards and trained employees on compliance.",
                    "Certified to operate pallet jacks and scissor lifts, contributing to facility operations.",
                    "Contributed to policy implementation and improvement through collaboration with leadership."
                ]
            },
            {
                duration: "Jul 2019 - Feb 2020",
                title: "Customer Service Intermediate",
                icon: <ScreenSearchDesktopIcon />,
                logo: <img src={Randstad} className='company-logo' />,
                company: "Randstad USA",
                details: [
                    "Resolved technical issues as a Tier 1 Help Desk support in Target North Campus' HRO IT department, enhancing user experience.",
                    "Leveraged SalesForce, ServiceNow, ActiveDirectory, and other proprietary software to streamline support processes and improve efficiency.",
                    "Collaborated with third-party vendors to identify and implement effective solutions, ensuring timely issue resolution.",
                    "Diagnosed and resolved issues on various operating systems including Windows, MacOS, Androids, and iOS systems.",
                    "Troubleshot network devices such as cameras, printers, and POS systems to maintain seamless operations at retail locations."
                ]
            },
            {
                duration: "Mar 2019 - May 2019",
                title: "Support Analyst",
                icon: <ScreenSearchDesktopIcon />,
                logo: <img src={Teksystems} className='company-logo' />,
                company: "TEKsystems",
                details: [
                    "Supported Tier 1 Help Desk operations for the company's software utilized in computer testing in school districts across the nation, ensuring seamless user experience.",
                    "Documented and escalated issues effectively using SalesForce CRM, enhancing tracking and resolution efficiency.",
                    "Collaborated with engineers, district engineers, and school IT staff to troubleshoot and resolve technical issues promptly."
                ]
            },
            {
                duration: "Feb 2013 - May 2016",
                title: "Library Customer Service Assistant 1 & CreaTech Studio Mentor",
                icon: <GroupsIcon />,
                logo: <img src={Sppl} className='company-logo' />,
                company: "Saint Paul Public Library",
                details: [
                    "Managed and curated the library's collection, including special collections, ensuring accessibility and organization.",
                    "Developed and executed community programming tailored to address the specific needs of the local community, promoting engagement and inclusivity.",
                    "Established a nurturing environment for teenagers to explore mentorship opportunities, cutting-edge technology, and social connections, fostering a sense of belonging and personal growth.",
                    "Managed user databases including Sprockets, Sierra, and ActiveNet to facilitate seamless operations within the shared space between Saint Paul Public Libraries and Saint Paul Parks and Recreation.",
                    "Proactively acquired proficiency in new software and hardware to support ongoing technological advancements, enabling effective training and assistance for volunteers, teens, and other stakeholders."
                ]
            }
        ]
    );
    const [projects] = useState(
        [
            {
                name: "",
                media: "",
                details: ""
            }
        ]
    );

    return (
        <MyInfoContext.Provider value={{robert, experiences, projects}} >
            {children}
        </MyInfoContext.Provider>
    )
}

export default MyInfoProvider;