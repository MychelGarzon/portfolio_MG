import { useEffect, useState } from 'react';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    Divider,
} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const workflowsData = [
    {
        id: 1,
        name: 'Recipe Parser',
        description: 'Parses raw recipe text, converts units, and calculates cost.',
        category: 'Automation',
        subCategory: 'Food Tech',
        link: 'https://n8n.io/workflows/recipe-parser',
        tags: ['JavaScript', 'AI', 'Price Check'],
    },
    {
        id: 2,
        name: 'SEO Analyzer',
        description: 'Analyzes website SEO and sends a report to email weekly.',
        category: 'Marketing',
        subCategory: 'Analytics',
        link: 'https://n8n.io/workflows/seo-analyzer',
        tags: ['Web Scraping', 'Email', 'Reports'],
    },
];

const RecentWorkflows = () => {
    const [workflows, setWorkflows] = useState([]);

    useEffect(() => {
        setWorkflows(workflowsData); // Or fetch from API later
    }, []);

    return (
        <>
            <Typography
                variant="h2"
                component="h2"
                sx={{
                    marginTop: '5rem',
                    marginBottom: 2,
                    textAlign: 'center',
                }}
            >
                Recent Workflows
            </Typography>

            <Grid container spacing={2} sx={{ marginBottom: '3rem', justifyContent: 'center' }}>
                {workflows.map((wf) => (
                    <Grid item xs={12} sm={6} md={4} key={wf.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                width: '80%',
                                boxShadow: 3,
                                transition: 'transform 0.3s',
                                position: 'relative',
                                background: '#f7f7f7',
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Grid container alignItems="center" justifyContent="center" sx={{ mb: 2 }}>
                                    <Typography variant="body2" color="textSecondary">
                                        {wf.category}
                                    </Typography>
                                    <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                                    <Typography variant="body2" color="textSecondary">
                                        {wf.subCategory}
                                    </Typography>
                                </Grid>
                                <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                                    {wf.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {wf.description}
                                </Typography>

                                {/* Tags */}
                                <Box mt={2}>
                                    <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                                        Tags
                                    </Typography>
                                    <Grid container spacing={1}>
                                        {wf.tags.map((tag, index) => (
                                            <Grid item key={index}>
                                                <Box
                                                    sx={{
                                                        padding: '4px 8px',
                                                        backgroundColor: '#e0e0e0',
                                                        borderRadius: '4px',
                                                        fontSize: '0.8rem',
                                                        color: '#2c3e50',
                                                        display: 'inline-block',
                                                    }}
                                                >
                                                    {tag}
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>

                                {/* Visit Link */}
                                <Box mt={4} display="flex" justifyContent="flex-end">
                                    <Button
                                        component="a"
                                        href={wf.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            backgroundColor: 'transparent',
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                            },
                                            textDecoration: 'none',
                                            position: 'relative',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 0.5,
                                            color: '#2c3e50',
                                            flex: 1,
                                            textAlign: 'right',
                                            '&:hover::after': {
                                                transform: 'scaleX(1)',
                                            },
                                            '::after': {
                                                content: '""',
                                                position: 'absolute',
                                                left: 0,
                                                bottom: -2,
                                                width: '100%',
                                                height: '1px',
                                                backgroundColor: '#2c3e50',
                                                transform: 'scaleX(0)',
                                                transformOrigin: 'left',
                                                transition: 'transform 0.3s ease',
                                            },
                                        }}
                                    >
                                        View Workflow
                                        <ArrowOutwardIcon fontSize="large" />
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default RecentWorkflows;
