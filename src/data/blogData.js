import logo from '../assets/projects-images/logo.jpg';

const blogData = [
    {
        id: 1,
        title: "The Power of AI in Automation",
        excerpt: "Discover how integrating Artificial Intelligence with workflow automation tools like n8n can revolutionize business processes.",
        content: "In today's fast-paced digital landscape, automation is no longer a luxury—it's a necessity. But when you combine standard automation with Artificial Intelligence, you unlock a new level of efficiency. In this post, we explore how using Large Language Models (LLMs) within n8n workflows can handle complex decision-making tasks that previously required human intervention...",
        date: "November 15, 2023",
        image: logo, // Placeholder image
        tags: ["AI", "Automation", "n8n"],
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Mastering Cypress for E2E Testing",
        excerpt: "A comprehensive guide to setting up and writing robust end-to-end tests for your React applications using Cypress.",
        content: "Quality Assurance is a critical part of the software development lifecycle. Cypress has emerged as a front-runner for End-to-End (E2E) testing due to its developer-friendly experience. This article guides you through setting up Cypress in a Vite+React project, writing your first test, and best practices for maintaining a healthy test suite...",
        date: "October 28, 2023",
        image: logo, // Placeholder image
        tags: ["Testing", "Cypress", "React"],
        readTime: "8 min read"
    },
    {
        id: 3,
        title: "Building Scalable Backends with Node.js and AWS",
        excerpt: "Best practices for deploying Node.js applications on AWS using Docker and CI/CD pipelines.",
        content: "Deploying a Node.js application involves more than just getting code onto a server. To build a scalable and resilient backend, you need to consider containerization with Docker, orchestration, and automated deployment pipelines. We'll look at how to leverage AWS services like Lightsail and S3 to create a robust infrastructure...",
        date: "September 10, 2023",
        image: logo,
        tags: ["Backend", "AWS", "DevOps"],
        readTime: "6 min read"
    }
];

export default blogData;