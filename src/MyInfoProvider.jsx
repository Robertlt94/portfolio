import React, {useState} from 'react';
import MyInfoContext from './MyInfoContext';

const MyInfoProvider = ({children}) => {
    const [myInfo] = useState(
        {
            name: "Robert",
            location: "Minnesota",

        }
    )
    const [myImages] = useState([])
    const [myExperiences] = useState(
        [
            {
                start: "July 2024",
                end: "Aug 2024",
                title: "Software Engineer Intern",
                logo: "./components/assets/monicatdata_logo.jpeg",
                company: "Monicat Data",
                details: [
                    "QA tested web applications manually for bugs and ensured they met final development standards before handoff to clients.",
                    "Contributed to frontend development using React.js and Next.js, enhancing UI and UX consistency across platforms.",
                    "Utilized Scrum and Agile methodologies to develop, test, and deliver web applications through iterative sprints, ensuring timely and efficient project completion."
                ]
            },
            {
                start: "Aug 2023",
                end: "Jul 2024",
                title: "Public Health Project Coordintor",
                logo: "./components/assets/reading_math_inc_logo.jpeg",
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
                start: "Apr 2021",
                end: "Dec 2021",
                title: "Front End Team Lead",
                logo: "./components/assets/walmart_logo.jpeg",
                company: "Walmart",
                details: [
                    "Oversaw daily operations, including opening/closing, cash handling, self-checkouts, and the maintenance team.",
                    "Analyzed sales reports to mitigate profit loss.",
                    "Managed a team of 20-30 members per shift, emphasizing customer satisfaction and team morale.",
                    "Conducted training sessions for new hires on company policies, procedures, and technical skills."
                ]
            },
            {
                start: "Jul 2020",
                end: "Apr 2021",
                title: "Quality Assurance Specialist & Backup Receiver",
                logo: "./components/assets/brakebush_chicken_logo.jpeg",
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
                start: "Jul 2019",
                end: "Feb 2020",
                title: "Customer Service Intermediate",
                logo: "./components/assets/randstadusas_logo.jpeg",
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
                start: "Mar 2019",
                end: "May 2019",
                title: "Support Analyst",
                logo: "./components/assets/teksystems_logo.jpeg",
                company: "TEKsystems",
                details: [
                    "Supported Tier 1 Help Desk operations for the company's software utilized in computer testing in school districts across the nation, ensuring seamless user experience.",
                    "Documented and escalated issues effectively using SalesForce CRM, enhancing tracking and resolution efficiency.",
                    "Collaborated with engineers, district engineers, and school IT staff to troubleshoot and resolve technical issues promptly."
                ]
            },
            {
                start: "Feb 2013",
                end: "May 2016",
                title: "Library Customer Service Assistant 1 & CreaTech Studio Mentor",
                logo: "./components/assets/saint_paul_public_library_logo.jpeg",
                company: "Saint Paul Public Library",
                details: [
                    "Managed and curated the library's collection, including special collections, ensuring accessibility and organization.",
                    "Proficiently utilized databases such as Sprockets, ActiveNet, and Sierra to streamline library operations and facilitate efficient information retrieval.",
                    "Played a role in establishing a groundbreaking partnership between Saint Paul Public Libraries and Saint Paul Parks and Recreation at the Arlington Hills Community Center.",
                    "Nurtured the Createch Studio into a supportive environment for local teens and tweens, fostering mentorship opportunities and facilitating STEM-related projects in collaboration with BestBuy.",
                    "Developed and executed community programming tailored to address the specific needs of the local community, promoting engagement and inclusivity.",
                    "Established a nurturing environment for teenagers to explore mentorship opportunities, cutting-edge technology, and social connections, fostering a sense of belonging and personal growth.",
                    "Collaborated with the Library Associate, the Supervisor within the space, to identify and interview volunteers, ensuring a team of skilled and diverse individuals that represent the community and are capable of providing mentorship and guidance to teens.",
                    "Managed user databases including Sprockets, Sierra, and ActiveNet to facilitate seamless operations within the shared space between Saint Paul Public Libraries and Saint Paul Parks and Recreation.",
                    "Proactively acquired proficiency in new software and hardware to support ongoing technological advancements, enabling effective training and assistance for volunteers, teens, and other stakeholders."
                ]
            }
        ]
    );
    const [myProjects] = useState(
        [
            {
                name: "",
                media: "",
                details: ""
            }
        ]
    );

    return (
        <MyInfoContext.Provider value={{myInfo, myImages, myExperiences, myProjects}}>
            {children}
        </MyInfoContext.Provider>
    )
}

export default MyInfoProvider;