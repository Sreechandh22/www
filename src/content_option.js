const logotext = "SD";
<div style={{ color: '#20ec53 !important' }}>{logotext}</div>

const meta = {
    title: "Sreechandh",
    description: "I'm Sreechandh, a technologist and cybersecurity enthuist.",
};

const introdata = {
    title: "Hi, I'm Sreechandh",
    animated: {
        first: "Technologist",
        second: "Grand Challenge Scholar",
        third: "New American University Scholar",
        fourth: "Programmer",
        fifth: "ML Developer",
        sixth: "AI Enthusiast",
        seventh: "Ambidextrous",
        eighth: "Backend Developer",
        ninth: "Frontend Developer",
        tenth: "Funny",
        // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
    },
    description: "An inventive student who transforms complex challenges into elegant technological solutions with a passion for data-driven impact and a zest for continuous learning.",
    your_img_url: "https://i.postimg.cc/VsBfvj1L/pic.webp",
};

const dataabout = {
    title: "But... Who am I?",
    aboutme: "Hello world! \n\n I'm Sreechandh Devireddy, a computer science enthusiast who believes code can save the world, or at least make it a bit less confusing. When I'm not busy being a human debugger or a code whisperer at Arizona State University, you can find me diving deep into AI models, like that time I tackled the Nepal Water Crisis with nothing but TensorFlow and sheer determination. My stint at IBM? Think of it as my 'Monopoly' phase, where I played with economic algorithms like a pro, turning code into gold. As an IBM Barrett Research Fellow, I’m not just analyzing data; I’m on a first-name basis with every pixel in those medical records, helping forecast colon cancer risks. And my personal project, the AI-powered skin cancer app, wasn’t just a coding sprint - it was a marathon with a cause, sprinting past the finish line of innovation. Off the clock, I might be found philosophizing about how my next project could be the next big thing or contemplating the mysteries of the universe, like why printers never work when you need them most. In a nutshell, I'm the guy who's turning caffeine and pizza into smart solutions and maybe, just occasionally, into the latest meme."
    
    ,
};

const ResumeComponent = () => {
    const [showImage, setShowImage] = useState(false);

    const resume = {
        resumeLink: "https://drive.google.com/file/d/1mKNBSwNHY3_-9T6stQQkktx68_QU_gc6/view",
        title: "My Resume",
        description: "Explore my professional journey, technical skills, and academic achievements.",
        downloadText: "View Resume",
        viewPortfolioText: "View Portfolio",
        portfolioLink: "/portfolio",
    };

    const toggleImage = () => {
        console.log("Toggling Image");
        setShowImage(!showImage);
    };

    const openResumeLink = () => {
        window.open(resume.resumeLink, '_blank');
    };

    console.log("showImage state:", showImage);

    return (
        <div className="resume-section">
            <h1>{resume.title}</h1>
            <p>{resume.description}</p>
            <button onClick={() => { toggleImage(); openResumeLink(); }} className="download-resume-button">
                {resume.downloadText}
            </button>
            <Link to={resume.portfolioLink} className="view-portfolio-button">
                {resume.viewPortfolioText}
            </Link>
            {showImage && (
                <div className="resume-image">
                    <img src={resume.resumeLink} alt="Resume" />
                </div>
            )}
        </div>
    );
};
export default ResumeComponent;

    
const worktimeline = [{
        jobtitle: "Research Intern",
        where: "IBM",
        date: "2023",
    },
    {
        jobtitle: "Technological Consultant",
        where: "Arizona State University",
        date: "2024",
    },
    {
        jobtitle: "Teaching Assistant",
        where: "Arizona State University",
        date: "2023",
    },
];

const skills = [{
        name: "Python",
    },
    
    {
        name: "C/C++",
    },
    
    {
        name: "Java",
    },
    
    {
        name: "Bash",
    },

    {
        name: "Powershell",
    },

    {
        name: "JavaScript",
    },

    {
        name: "Web-Exploitation",
    },

    {
        name: "Network Exploitation",
    },
];

const dataportfolio = [{
        img: "https://i.postimg.cc/vmYPbwQv/DALL-E-2023-12-11-19-45-11-An-illustration-representing-Sreechandh-Devireddy-s-research-project-on.png",
        description: "In a fusion of AI and healthcare, my project with IBM in 2023 revolutionized colorectal cancer risk prediction, harnessing TensorFlow and PyTorch's power ",
        link: "https://github.com/Sreechandh22/ClinicalBert",
    },
    {
        img: "https://i.postimg.cc/9FGkPp0s/DALL-E-2023-12-11-19-59-17-An-image-illustrating-the-Safe-Side-project-a-cutting-edge-emergency.png",
        description: "In a lifesaving blend of tech and emergency preparedness, I led the development of SafeSide– a mobile app designed to guide users during active shooter situations with real-time, data-driven evacuation routes, helping to navigate crises with clarity and confidence. ",
        link: "https://docs.google.com/presentation/d/1EUVMYWGnS6hZUFlFK_QXBeGXTspLorB16OprJDfExcg/edit#slide=id.g2118dbc31e5_1_100",
    },
    {
        img: "https://i.postimg.cc/15QSZ4qh/DALL-E-2023-12-11-20-17-33-A-portrait-image-showcasing-the-Special-Wheels-project-associated-wit.png",
        description: " I steered the project, infusing MATLAB magic into a special-needs go-kart. It was a journey of marrying mechanical engineering with control systems, where I transformed challenges into triumphs, elevating the kart's performance and joy for its riders.",
        link: "https://www.youtube.com/watch?v=CbzaHm2dbsY",
    },
    {
        img: "https://i.postimg.cc/dVVzqCQX/DALL-E-2023-12-11-20-20-01-A-portrait-image-representing-the-Varuna-Springs-project-at-Arizona-St.png",
        description: "I turned a creative lens on groundwater analysis. We blended advanced machine learning with remote sensing to ingeniously map groundwater levels with over 95% accuracy, offering vital data for industries like agriculture and environmental management.",
        link: "https://docs.google.com/presentation/d/1yBjsfSxMTCzIWX5ZB--ld4hwvqDRyMeq2ImdjdzxVrI/edit#slide=id.g132a5a6d9ae_0_0",
    },
    {
        img: "https://i.postimg.cc/cJ8kHMpD/DALL-E-2023-12-11-20-22-06-A-portrait-image-showcasing-the-Harnessing-AI-and-Quantum-Computing-p.png",
        description: "Blended AI and quantum computing to bolster cybersecurity. Tackled data vulnerabilities in small businesses and homes, reducing cyber threats by 50% with our AI-driven security protocols.",
        link: "https://docs.google.com/presentation/d/1ArWq_8ZB1y3Z2X0A_C3BHfnb5A5xYCX6MYRdac2vQQk/edit?usp=sharing",
    },
    {
        img: "https://i.postimg.cc/L5vN7yPs/DALL-E-2023-12-11-20-22-38-A-portrait-image-representing-the-Spot-Check-AI-Powered-Skin-Cancer-De.png",
        description: "Developed an AI-driven web app for early skin cancer detection, harnessing machine learning to analyze images and assess risks effectively.",
        link: "https://github.com/Sreechandh22/HackMIT",
    },
];

const contactConfig = {
    YOUR_EMAIL: "sreechandh2204@gmail.com",
    description: "Looking forward to hearing from you!",
    YOUR_SERVICE_ID: "service_8kaqom3",
    YOUR_TEMPLATE_ID: "template_ls0jmgj",
    YOUR_USER_ID: "8MdcvXaCA950fT-GZ",
};


const socialprofils = {
    github: "https://github.com/Sreechandh22",
    linkedin: "https://www.linkedin.com/in/sreechandh-devireddy-88611423a/",
};

export {
    meta,
    dataabout,
    ResumeComponent,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
