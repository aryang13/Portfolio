export const aboutSection = {   
    aboutIntro: "I have always had the mindset to push myself further in order to learn and grow every step of the way. I believe determination, hard work, and creativity can always allow you to overcome the problems you face. When I was younger I was always the kid who attempted to solve problems using innovative ways to do so.",
    aboutCurrentLife: "Today, I am pursuing my Bachelor of Applied Science in Computer Engineering at the University of British Columbia and not much has changed. The difference is I now use the same mindset to develop innovative software to solve problems.",
    aboutSpareTime: "In my spare time when I am not programming, I can be found at the gym, reading a good book, listening to music, or watching the latest shows and movies.",
};

export const aboutTools = {
    aboutProgrammingLanguage: "MATLAB, Cypress, GitHub, Quartus, C, C++, Python, Java, Javascript, React, Redux, HTML, CSS, SQL, Verilog, ARM and x86",
    aboutHardware: "Microcontrollers, Oscilloscopes, Multimeter, Breadboards and DE1-SOC Board",
}

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const experienceImages = importAll(require.context('../images/experience', false, /\.(png|jpeg|svg|jpg)$/));

export const jobExperience = [
    {
        website: "https://www.sap.com/index.html",
        image: experienceImages["SAP.png"],
        companyName: "SAP",
        companyRole: "Agile Developer Intern - HANA and Analytics",
        descripton: "SAP, or Systems Applications and Products, is a widely-used enterprise resource planning (ERP) software. SAP creates a centralized system for businesses that enables every department to access and share common data.",
        roles: [
            "Formulate bug fixes and developed novel features through hands-on programming design utilizing Javascript to deliver an improved product to clients",
            "Develop, maintain and execute automated testing using Jasmine and Cypress frameworks",
            "Adopt lean and agile software development principles by collaborating in a team setting and using online tools such as GitHub and JIRA to organize workflow",
            "Interpret and improved code by working on a codebase using debugging tools and end-to-end software development"
        ],
        date: "May 2021 - Present",
        location: "Vancouver BC",
    },
    {
        website: "https://ubclaunchpad.com/",
        image: experienceImages["launchpad.jpg"],
        companyName: "UBC LaunchPad",
        companyRole: "Software Developer",
        descripton: "A leading student-run software club based in the University of British Columbia devoted to building applications in a collaborative and professional environment.",
        roles: [
            "Partnered with other developers and designers to ideate and build a project for 4-8 months",
            "Learned different languages such as Typescript and React.js in order to implement frontend and deployed SQL and Postgres for backend",
        ],
        date: "Sept 2020 - Present",
        location: "Vancouver BC",
    },
    {
        website: "https://ubcmarscolony.wordpress.com/",
        image: experienceImages["MarsColony.png"],
        companyName: "UBC Mars Colony",
        companyRole: "Architecture Team Member",
        descripton: "A team of UBC Engineering students looking into developing suitable living conditions for research and habitation on Mars.",
        roles: [
            "Responsible for designing components, ensuring team efficiency and production of high-quality work",
            "Primary designer for Hydroponics Project, currently in researching and data collection phase; future plan includes CAD design using SolidWorks",
        ],
        date: "Sept 2020 - Sept 2021",
        location: "Vancouver BC",
    },
    {
        website: "https://gdsc.community.dev/university-of-british-columbia-vancouver/",
        image: experienceImages["GDSC.png"],
        companyName: "Google Developer Student Club",
        companyRole: "Relations Director",
        descripton: "We are a program run by Google Developers, to empower students to build their professional and personal network, get access to Google Developer Resources, and work together to build solutions for local problems in a peer-to-peer learning environment.",
        roles: [
            "Plan events and arrange speakers for workshops and events",
            "Improved written and verbal communication and project management skills by planning events",
        ],
        date: "Aug 2020 - July 2021",
        location: "Vancouver BC",
    },
    {
        website: "https://www.ewb.ca/en/ubc-chapter/",
        image: experienceImages["EWB.png"],
        companyName: "Engineering Without Borders",
        companyRole: "Engi-You Youth Venture Member",
        descripton: "We focus on generating long-lasting meaningful impact in the projects that we take on and work rigorously to promote the personal development of our members. We work on fostering community and building strong leaders.",
        roles: [
            "Advocates for and develops innovated solutions for environmental change within the campus of UBC and across Vancouver",
            "Sets up presentations for different schools across Vancouver that informs and teaches students about engineering through interactive activities and presentations from various professional engineering",
            "Sets up events for first year engineering students in order to ensure their transition into first year is smooth and enjoyable"
        ],
        date: "Sept 2019 - Spet 2020",
        location: "Vancouver BC",
    },
    {
        website: "https://www.wizeprep.com/",
        image: experienceImages["wize.jpeg"],
        companyName: "Wize",
        companyRole: "Class Ambassador",
        descripton: "Wize is an online education platform that offers instant access to expert video lessons, exam-like practice, and study guides for high school and college.",
        roles: [
            "Providing weekly ‘course news’ updates of what you are studying in class, what topics are proving to be difficult, and what you need to focus on for your upcoming exam",
            "Completing quick reviews of your online exam-prep course(s) as you will get exclusive first access",
            "Creating course layouts in order to ensure the course is beneficial to student’s learning",
            "Working with your Wize Prof making sure their questions are answered",
            "Spreading the Wize word throughout your university and share free study resources with classmates"
        ],
        date: "Jan 2020 - May 2021",
        location: "Vancouver BC",
    }
]
  
const skillsImages = importAll(require.context('../images/skills', false, /\.(png|jpeg|svg|jpg)$/));

export const skills = [
    {
        category: "Programming Language",
        items: [
            {
                name: "C",
                image: skillsImages["C.png"]
            },
            {
                name: "C++",
                image: skillsImages["C++.png"]
            },
            {
                name: "Python",
                image: skillsImages["Python.png"]
            },
            {
                name: "Javascript",
                image: skillsImages["JS.png"]
            },
            {
                name: "Java",
                image: skillsImages["Java.jpg"]
            },
            {
                name: "SQL",
                image: skillsImages["SQL.png"]
            },
        ]
    },
    {
        category: "Front End",
        items: [
            {
                name: "React",
                image: skillsImages["React.png"]
            },
            {
                name: "Redux",
                image: skillsImages["Redux.jpg"]
            },
            {
                name: "Django",
                image: skillsImages["Django.png"]
            },
            {
                name: "HTML",
                image: skillsImages["HTML.png"]
            },
            {
                name: "CSS",
                image: skillsImages["CSS.png"]
            },
        ]
    },
    {
        category: "Back End",
        items: [
            {
                name: "Node",
                image: skillsImages["Node.png"]
            },
            {
                name: "Postgres",
                image: skillsImages["PostGres.png"]
            },
            {
                name: "Firebase",
                image: skillsImages["Firebase.png"]
            },
            {
                name: "XSJS",
                image: skillsImages["XSJS.png"]
            },
        ]
    },
    {
        category: "Hardware",
        items: [
            {
                name: "Verilog",
                image: skillsImages["Verilog.png"]
            },
            {
                name: "ARM",
                image: skillsImages["ARM.png"]
            },
            {
                name: "Quartus",
                image: skillsImages["Quartus.png"]
            },
            {
                name: "Model Sim",
                image: skillsImages["ModelSim.png"]
            },
        ]
    },
    {
        category: "Software Tools",
        items: [
            {
                name: "Github",
                image: skillsImages["Github.png"]
            },
            {
                name: "Linux",
                image: skillsImages["Linux.png"]
            },
            {
                name: "Cypress",
                image: skillsImages["Cypress.png"]
            },
            {
                name: "Jenkins",
                image: skillsImages["Jenkins.png"]
            },
            {
                name: "MatLab",
                image: skillsImages["Matlab.png"]
            },
            {
                name: "MS Office",
                image: skillsImages["MS.png"]
            },
        ]
    }
]
    
