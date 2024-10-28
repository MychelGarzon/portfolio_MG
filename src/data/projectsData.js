import logo from '../assets/projects-images/logo.svg';
import chanterelleImage from '../assets/projects-images/chanterelle.png';
import alcorteImage from '../assets/projects-images/alcorte.png';
import earthImage from '../assets/projects-images/earth.svg';
import kwImage from '../assets/projects-images/kw.png';

const projectsData = [
    {
        id: 1,
        name: "Au2Mate",
        image: logo,  // Use imported image
        description: "Website created for selling and buying cars in Tasmania - Australia",
        link: "https://au2mate.au/"
    },
    {
        id: 2,
        name: "Al Corte",
        image: alcorteImage,
        description: "Website created for buying food products in Colombia",
        link: "https://alcorte.netlify.app/"
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
    }
];

export default projectsData;
