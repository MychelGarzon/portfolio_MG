import logo from '../assets/projects-images/logo.jpg';
import chanterelleImage from '../assets/projects-images/mushroom.png';
import alcorteImage from '../assets/projects-images/alcorte.png';
import earthImage from '../assets/projects-images/earth.svg';
import kwImage from '../assets/projects-images/kw.png';

const projectsData = [
    {
        id: 1,
        name: "Au2Mate",
        image: logo,  // Use imported image
        description: "Website created for selling and buying cars in Tasmania - Australia",
        link: "https://au2mate.au/",
        technologies : [
            // Frontend Technologies
            { id: 1, name: "React" },
            { id: 2, name: "TypeScript" },
            { id: 3, name: "Redux" },
            { id: 4, name: "Material-UI" },
            { id: 16, name: "Tailwind" },
        
            // Backend Technologies
            { id: 5, name: "Node.js" },
            { id: 6, name: "Express.js" },
            { id: 8, name: "Prisma / MySQL" },
        
            // Authentication & Security
            { id: 9, name: "AWS Cognito" },
            { id: 10, name: "JSON Web Tokens (JWT)" },
            { id: 17, name: "Google Authenticator" },
        
            // Database & Storage
            { id: 7, name: "AWS RDS" },
            { id: 12, name: "AWS S3" },
            { id: 14, name: "AWS Lightsail" },
        
            // Deployment & CI/CD
            { id: 11, name: "GitHub Actions" },
            { id: 13, name: "AWS CloudFront" },
        
            // Testing
            { id: 15, name: "Cypress" },
        
            // Project Management & Design
            { id: 18, name: "Jira" },
            { id: 19, name: "Scrum" },
            { id: 20, name: "Figma" },
        
            // Version Control
            { id: 21, name: "GitHub" }
        ]    
    },
    {
        id: 2,
        name: "Al Corte",
        image: alcorteImage,
        description: "Website created for buying food products in Colombia",
        link: "https://alcorte.netlify.app/",
        technologies : [
            // Frontend Technologies
            { id: 1, name: "React" },
            { id: 2, name: "TypeScript" },
            { id: 3, name: "Redux" },
            { id: 4, name: "Material-UI" },
            { id: 16, name: "Tailwind" },
        
            // Backend Technologies
            { id: 5, name: "Node.js" },
            { id: 6, name: "Express.js" },
            { id: 8, name: "Prisma / MySQL" },
        
            // Authentication & Security
            { id: 9, name: "AWS Cognito" },
            { id: 10, name: "JSON Web Tokens (JWT)" },
            { id: 17, name: "Google Authenticator" },
        
           
        
            // Deployment & CI/CD
            { id: 11, name: "GitHub Actions" },
            { id: 13, name: "AWS CloudFront" },
        
            // Testing
            { id: 15, name: "Cypress" },
        
            // Project Management & Design
            { id: 18, name: "Jira" },
            { id: 19, name: "Scrum" },
            { id: 20, name: "Figma" },
        
            // Version Control
            { id: 21, name: "GitHub" }
        ]
    
    },
    {
        id: 3,
        name: "Mushroom Checker",
        image: chanterelleImage,
        description: "A web-based application to classify and identify mushroom species.",
        link: "https://mushroomchecker.netlify.app/"
    },
    {
        id: 4,
        name: "Countries with React",
        image: earthImage,
        description: "This is a country app that displays country information.",
        link: "https://countries-react-mg.netlify.app/"
    },
    {
        id: 5,
        name: "KW Catering",
        image: kwImage,
        description: "Website for a catering service.",
        link: "https://kiraw.fi/"
    },
    {
        id: 6,
        name: "KW Catering",
        image: kwImage,
        description: "Website for a catering service.",
        link: "https://kiraw.fi/"
    }
];

export default projectsData;
