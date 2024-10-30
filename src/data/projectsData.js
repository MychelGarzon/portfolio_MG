import logo from '../assets/projects-images/logo.jpg';
import chanterelleImage from '../assets/projects-images/mushroom.png';
import alcorteImage from '../assets/projects-images/alcorte.png';
import earthImage from '../assets/projects-images/earth.svg';
import kwImage from '../assets/projects-images/kw.png';
import shopping from '../assets/projects-images/shopping.jpg';

const projectsData = [
    {
        id: 1,
        name: "Au2Mate",
        image: logo,  // Use imported image
        description: "Website created for selling and buying cars in Tasmania - Australia",
        link: "https://au2mate.au/",
        specificDescription: "Au2Mate is a web-based application that allows users to buy and sell cars in Tasmania, Australia. The application provides a platform for users to list their cars for sale and browse listings of cars for sale. Users can search for cars based on make, model, year, and price. The application also provides information about the cars, including photos, specifications, and contact information for the seller. Au2Mate is designed to be user-friendly and intuitive, with a clean and modern interface that makes it easy to find and list cars for sale.",
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
        specificDescription: "Al Corte is a web-based application that allows users to buy food products in Colombia. The application provides a platform for users to browse and purchase a variety of food products, meats, and ready products. Users can search for products based on category. The application also provides information about the products, including photos and descriptions. Al Corte is designed to be user-friendly and intuitive, with a clean and modern interface that makes it easy to find and purchase food products.",
        technologies : [
            // Frontend Technologies
            { id: 1, name: "React" },
            { id: 2, name: "TypeScript" },
            { id: 3, name: "Redux" },
            { id: 4, name: "Material-UI" },
            { id: 16, name: "Tailwind" },
        
            // Backend Technologies
            { id: 5, name: "Node.js" },
            
        
            // Authentication & Security
            { id: 17, name: "Firebase" },
            { id: 21, name: "SonarCloud" },
           
        
            // Deployment & CI/CD
            { id: 11, name: "GitHub Actions" },
        
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
        specificDescription: "Mushroom Checker is a web-based application that allows users to classify and identify mushroom species. The application uses a machine learning model to classify the species of a mushroom based on an image uploaded by the user. The model is trained on a dataset of mushroom images and uses a convolutional neural network to make predictions. The application also provides information about the different species of mushrooms and their characteristics. Users can upload an image of a mushroom and get information about the species, habitat, and edibility of the mushroom.",

        link: "https://mushroomchecker.netlify.app/",
        technologies : [
            // Frontend Technologies
            { id: 1, name: "React" },
            { id: 2, name: "TypeScript" },
            { id: 3, name: "Redux" },
            { id: 4, name: "Material-UI" },
            { id: 16, name: "Tailwind" },
        
            // Backend Technologies
            { id: 5, name: "Node.js" },
            
        
            // Authentication & Security
            { id: 17, name: "Firebase" },
            { id: 21, name: "SonarCloud" },
           
        
            // Deployment & CI/CD
            { id: 11, name: "GitHub Actions" },
        
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
        id: 4,
        name: "Shopping Cart",
        image: shopping,
        description: "A simple shopping cart application.",
        link: "https://shopping-finland.netlify.app",
        technologies : [
            // Frontend Technologies
            { id: 1, name: "React" },
            { id: 2, name: "TypeScript" },
            { id: 3, name: "Redux" },
            { id: 4, name: "Material-UI" },
            { id: 16, name: "Tailwind" },
        
            // Backend Technologies
            { id: 5, name: "Node.js" },
            
        
            // Authentication & Security
            { id: 17, name: "Firebase" },
            { id: 21, name: "SonarCloud" },
           
        
            // Deployment & CI/CD
            { id: 11, name: "GitHub Actions" },
        
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
        id: 5,
        name: "Countries with React",
        image: earthImage,
        description: "This is a country app that displays country information.",
        link: "https://countries-react-mg.netlify.app/",
        specificDescription: "Countries with React is a web-based application that allows users to browse and search for information about countries around the world. The application provides a platform for users to view details about each country, including the country's flag, population, region, and languages spoken. Users can search for countries based on name or region. The application also provides information about the currency used in each country. Countries with React is designed to be user-friendly and intuitive, with a clean and modern interface that makes it easy to find and learn about different countries.",
        technologies : [
            // Frontend Technologies
            { id: 1, name: "React" },
            { id: 2, name: "TypeScript" },
            { id: 3, name: "Redux" },
            { id: 4, name: "Material-UI" },
            { id: 16, name: "Tailwind" },
        
            // Backend Technologies
            { id: 5, name: "Node.js" },
            
        
            // Authentication & Security
            { id: 17, name: "Firebase" },
            { id: 21, name: "SonarCloud" },
           
        
            // Deployment & CI/CD
            { id: 11, name: "GitHub Actions" },
        
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
        id: 6,
        name: "KW Catering",
        image: kwImage,
        description: "Website for a catering service.",
        link: "https://kiraw.fi/",
        technologies : [
            // Frontend Technologies
            { id: 1, name: "React" },
            { id: 2, name: "TypeScript" },
            { id: 3, name: "Redux" },
            { id: 4, name: "Material-UI" },
            { id: 16, name: "Tailwind" },
        
            // Backend Technologies
            { id: 5, name: "Node.js" },
            
        
            // Authentication & Security
            { id: 17, name: "Firebase" },
            { id: 21, name: "SonarCloud" },
           
        
            // Deployment & CI/CD
            { id: 11, name: "GitHub Actions" },
        
            // Testing
            { id: 15, name: "Cypress" },
        
            // Project Management & Design
            { id: 18, name: "Jira" },
            { id: 19, name: "Scrum" },
            { id: 20, name: "Figma" },
        
            // Version Control
            { id: 21, name: "GitHub" }
        ]
    }
];

export default projectsData;
