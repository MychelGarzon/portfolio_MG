# n8n Workflow Images

This folder should contain screenshots of your actual n8n workflows.

## How to add workflow images:

1. Take screenshots of your n8n workflows from your n8n interface
2. Save them with descriptive names that match the workflow data
3. Add them to this folder with the following naming convention:

### Expected image files:

- `ecommerce-order.png` - E-commerce Order Processing workflow
- `social-media-scheduler.png` - Social Media Content Scheduler workflow
- `lead-generation.png` - Lead Generation & CRM Sync workflow
- `data-backup.png` - Data Backup & Monitoring workflow
- `invoice-processing.png` - Invoice Processing & Accounting workflow
- `support-routing.png` - Customer Support Ticket Routing workflow
- `weather-marketing.png` - Weather-Based Marketing Campaigns workflow
- `api-monitoring.png` - API Monitoring & Health Checks workflow

## Image specifications:

- Format: PNG or JPG
- Recommended size: 1200x800 pixels
- Quality: High resolution for clear viewing
- Content: Full n8n workflow canvas showing all nodes and connections

## Current status:

Currently using placeholder images. Replace with actual n8n workflow screenshots by:

1. Adding the image files to this folder
2. Updating the import statements in `/src/data/workflowsData.js`

Example update in workflowsData.js:

```javascript
// Add imports at the top
import ecommerceOrderImage from '../assets/workflow-images/ecommerce-order.png';
import socialMediaImage from '../assets/workflow-images/social-media-scheduler.png';
// ... other imports

// Update the workflow objects
{
    id: 1,
    name: "E-commerce Order Processing",
    image: ecommerceOrderImage, // Use imported image instead of string path
    // ... rest of workflow data
}
```
