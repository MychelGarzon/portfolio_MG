import logo from '../assets/projects-images/logo.jpg';
import chanterelleImage from '../assets/projects-images/mushroom.png';
import alcorteImage from '../assets/projects-images/alcorte.png';
import earthImage from '../assets/projects-images/world.jpg';
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
        technologies: [
            1,  // React
            2,  // TypeScript
            3,  // Redux
            4,  // Material-UI
            16, // Tailwind
            5,  // Node.js
            6,  // Express.js
            8,  // Prisma / MySQL
            9,  // AWS Cognito
            10, // JSON Web Tokens (JWT)
            17, // Google Authenticator
            7,  // AWS RDS
            12, // AWS S3
            14, // AWS Lightsail
            11, // GitHub Actions
            13, // AWS CloudFront
            15, // Cypress
            18, // Jira
            19, // Scrum
            20, // Figma
            21, // GitHub
        ],
    },
    {
        id: 2,
        name: "Al Corte",
        image: alcorteImage,
        description: "Website created for buying food products in Colombia",
        link: "https://alcorte.netlify.app/",
        specificDescription: "Al Corte is a web-based application that allows users to buy food products in Colombia. The application provides a platform for users to browse and purchase a variety of food products, meats, and ready products. Users can search for products based on category. The application also provides information about the products, including photos and descriptions. Al Corte is designed to be user-friendly and intuitive, with a clean and modern interface that makes it easy to find and purchase food products.",
        technologies: [
            1,  // React
            2,  // TypeScript
            3,  // Redux
            4,  // Material-UI
            16, // Tailwind
            5,  // Node.js
            9,  // AWS Cognito
            10, // JSON Web Tokens (JWT)
            11, // GitHub Actions
            15, // Cypress
            18, // Jira
            19, // Scrum
            20, // Figma
            21, // GitHub
        ]
    },
    {
        id: 3,
        name: "Mushroom Checker",
        image: chanterelleImage,
        description: "A web-based application to classify and identify mushroom species.",
        specificDescription: "Mushroom Checker is a web-based application that allows users to classify and identify mushroom species. The application uses a machine learning model to classify the species of a mushroom based on an image uploaded by the user. The model is trained on a dataset of mushroom images and uses a convolutional neural network to make predictions. The application also provides information about the different species of mushrooms and their characteristics. Users can upload an image of a mushroom and get information about the species, habitat, and edibility of the mushroom.",
        link: "https://mushroomchecker.netlify.app/",
        technologies: [
            1,  // React
            2,  // TypeScript
            3,  // Redux
            4,  // Material-UI
            16, // Tailwind
            5,  // Node.js
            9,  // AWS Cognito
            10, // JSON Web Tokens (JWT)
            11, // GitHub Actions
            15, // Cypress
            18, // Jira
            19, // Scrum
            20, // Figma
            21, // GitHub
        ]
    },
    {
        id: 4,
        name: "Shopping Cart",
        image: shopping,
        description: "A simple shopping cart application.",
        link: "https://shopping-finland.netlify.app",
        technologies: [
            1,  // React
            2,  // TypeScript
            3,  // Redux
            4,  // Material-UI
            16, // Tailwind
            5,  // Node.js
            9,  // AWS Cognito
            11, // GitHub Actions
            15, // Cypress
            18, // Jira
            19, // Scrum
            20, // Figma
            21, // GitHub
        ]
    },
    {
        id: 5,
        name: "Countries with React",
        image: earthImage,
        description: "This is a country app that displays country information.",
        link: "https://countries-react-mg.netlify.app/",
        specificDescription: "Countries with React is a web-based application that allows users to browse and search for information about countries around the world. The application provides a platform for users to view details about each country, including the country's flag, population, region, and languages spoken. Users can search for countries based on name or region. The application also provides information about the currency used in each country. Countries with React is designed to be user-friendly and intuitive, with a clean and modern interface that makes it easy to find and learn about different countries.",
        technologies: [
            1,  // React
            2,  // TypeScript
            3,  // Redux
            4,  // Material-UI
            16, // Tailwind
            5,  // Node.js
            9,  // AWS Cognito
            11, // GitHub Actions
            15, // Cypress
            18, // Jira
            19, // Scrum
            20, // Figma
            21, // GitHub
        ]
    },
    {
        id: 6,
        name: "KW Catering",
        image: kwImage,
        description: "Website for a catering service.",
        link: "https://kiraw.fi/",
        technologies: [
            1,  // React
            2,  // TypeScript
            3,  // Redux
            4,  // Material-UI
            16, // Tailwind
            5,  // Node.js
            9,  // AWS Cognito
            11, // GitHub Actions
            15, // Cypress
            18, // Jira
            19, // Scrum
            20, // Figma
            21, // GitHub
        ]
    }
];

export default projectsData;
