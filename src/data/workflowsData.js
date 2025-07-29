// Import workflow images - these would need to be added to assets/workflow-images/
// For now, using placeholder paths that you can replace with actual n8n workflow screenshots

const workflowsData = [
    {
        id: 1,
        name: "E-commerce Order Processing",
        image: "/src/assets/workflow-images/ecommerce-order.png", // Replace with actual image
        description: "Automated workflow for processing e-commerce orders from multiple platforms",
        category: "E-commerce",
        complexity: "Advanced",
        nodes: 15,
        features: [
            "Multi-platform integration",
            "Inventory management",
            "Email notifications",
            "Payment processing",
            "Order tracking"
        ],
        technologies: ["Shopify", "WooCommerce", "Stripe", "Gmail", "Google Sheets"],
        githubUrl: "https://github.com/your-repo/ecommerce-workflow", // Optional
        n8nUrl: "https://your-n8n-instance.com/workflow/1" // Optional
    },
    {
        id: 2,
        name: "Social Media Content Scheduler",
        image: "/src/assets/workflow-images/social-media-scheduler.png",
        description: "Automated content scheduling and posting across multiple social media platforms",
        category: "Social Media",
        complexity: "Intermediate",
        nodes: 12,
        features: [
            "Multi-platform posting",
            "Content scheduling",
            "Image optimization",
            "Analytics tracking",
            "Hashtag generation"
        ],
        technologies: ["Twitter API", "Facebook API", "Instagram API", "LinkedIn API", "Buffer"],
        githubUrl: "https://github.com/your-repo/social-media-workflow",
        n8nUrl: "https://your-n8n-instance.com/workflow/2"
    },
    {
        id: 3,
        name: "Lead Generation & CRM Sync",
        image: "/src/assets/workflow-images/lead-generation.png",
        description: "Automated lead capture from various sources and synchronization with CRM systems",
        category: "CRM & Sales",
        complexity: "Advanced",
        nodes: 18,
        features: [
            "Multi-source lead capture",
            "Lead scoring",
            "CRM synchronization",
            "Email campaigns",
            "Follow-up automation"
        ],
        technologies: ["HubSpot", "Salesforce", "Mailchimp", "Google Forms", "Zapier"],
        githubUrl: "https://github.com/your-repo/lead-generation-workflow",
        n8nUrl: "https://your-n8n-instance.com/workflow/3"
    },
    {
        id: 4,
        name: "Data Backup & Monitoring",
        image: "/src/assets/workflow-images/data-backup.png",
        description: "Automated data backup system with monitoring and alert notifications",
        category: "DevOps",
        complexity: "Intermediate",
        nodes: 10,
        features: [
            "Scheduled backups",
            "Multiple storage locations",
            "Health monitoring",
            "Error alerts",
            "Backup verification"
        ],
        technologies: ["AWS S3", "Google Drive", "Dropbox", "Slack", "Discord"],
        githubUrl: "https://github.com/your-repo/backup-workflow",
        n8nUrl: "https://your-n8n-instance.com/workflow/4"
    },
    {
        id: 5,
        name: "Invoice Processing & Accounting",
        image: "/src/assets/workflow-images/invoice-processing.png",
        description: "Automated invoice generation, processing, and integration with accounting systems",
        category: "Finance",
        complexity: "Advanced",
        nodes: 20,
        features: [
            "Invoice generation",
            "Payment tracking",
            "Accounting integration",
            "Tax calculations",
            "Financial reporting"
        ],
        technologies: ["QuickBooks", "Xero", "PayPal", "Stripe", "Google Sheets"],
        githubUrl: "https://github.com/your-repo/invoice-workflow",
        n8nUrl: "https://your-n8n-instance.com/workflow/5"
    },
    {
        id: 6,
        name: "Customer Support Ticket Routing",
        image: "/src/assets/workflow-images/support-routing.png",
        description: "Intelligent routing of customer support tickets based on category and priority",
        category: "Customer Support",
        complexity: "Intermediate",
        nodes: 14,
        features: [
            "Ticket classification",
            "Priority assignment",
            "Agent routing",
            "Response automation",
            "Escalation handling"
        ],
        technologies: ["Zendesk", "Freshdesk", "Slack", "Gmail", "Microsoft Teams"],
        githubUrl: "https://github.com/your-repo/support-workflow",
        n8nUrl: "https://your-n8n-instance.com/workflow/6"
    },
    {
        id: 7,
        name: "Weather-Based Marketing Campaigns",
        image: "/src/assets/workflow-images/weather-marketing.png",
        description: "Dynamic marketing campaigns triggered by weather conditions and forecasts",
        category: "Marketing",
        complexity: "Intermediate",
        nodes: 11,
        features: [
            "Weather data integration",
            "Location-based targeting",
            "Dynamic content",
            "Campaign triggers",
            "Performance tracking"
        ],
        technologies: ["OpenWeatherMap", "Mailchimp", "Facebook Ads", "Google Analytics", "Airtable"],
        githubUrl: "https://github.com/your-repo/weather-marketing-workflow",
        n8nUrl: "https://your-n8n-instance.com/workflow/7"
    },
    {
        id: 8,
        name: "API Monitoring & Health Checks",
        image: "/src/assets/workflow-images/api-monitoring.png",
        description: "Continuous monitoring of API endpoints with automated health checks and alerts",
        category: "DevOps",
        complexity: "Beginner",
        nodes: 8,
        features: [
            "Endpoint monitoring",
            "Response time tracking",
            "Error detection",
            "Alert notifications",
            "Status reporting"
        ],
        technologies: ["HTTP Request", "Slack", "Discord", "PagerDuty", "Datadog"],
        githubUrl: "https://github.com/your-repo/api-monitoring-workflow",
        n8nUrl: "https://your-n8n-instance.com/workflow/8"
    }
];

export default workflowsData;
