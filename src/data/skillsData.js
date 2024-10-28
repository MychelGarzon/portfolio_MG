import frontendImage from '../assets/icons/frontend.png';
import backendImage from '../assets/icons/backend.png';
import testing from '../assets/icons/testing.png'
import scrum from '../assets/icons/scrum.png'

const skillsData = [
  {
    title: "Frontend Technologies",
    description:
      "As a Full Stack Developer, I employ React, JavaScript, TypeScript, HTML, and CSS to create engaging, responsive user interfaces.",
    image: frontendImage,
  },
  {
    title: "Testing & QA",
    description:
      "I leverage Cypress for end-to-end testing and Jest for unit testing to ensure code quality.",
    image: testing, // You may want to use a different image specific to Testing & QA
  },
  {
    title: "Backend & DevOps",
    description:
      "I utilize Node.js, AWS, Firebase, Docker, and MySQL to build and manage robust backend systems.",
    image: backendImage,
  },
  {
    title: "Project Management & Design",
    description:
      "I effectively use Scrum, Jira, Trello, and Figma to streamline project workflows and enhance collaboration across teams.",
    image: scrum, // You may want to use a different image specific to Project Management & Design
  },
];

export default skillsData;
