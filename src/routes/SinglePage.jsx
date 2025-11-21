import { useParams, Link } from 'react-router-dom'; // SEO FIX: Import Link for crawler-friendly navigation
import { Typography, CardContent, Grid, Container, Box, Button } from '@mui/material';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Helmet } from 'react-helmet-async'; // SEO FIX: Import Helmet for dynamic head tags

import projectsData from '../data/projectsData';
import technologiesData from '../data/technologies';

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projectId ? projectsData.find((p) => p.id === parseInt(projectId)) : undefined;

    if (!project) {
        return <Typography variant="h6">Project not found!</Typography>;
    }

    // SEO FIX: Construct Schema.org JSON-LD for SoftwareApplication
    // This helps Google understand this page represents a specific piece of software.
    const projectSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": project.name,
        "applicationCategory": project.category,
        "operatingSystem": "Web",
        "description": project.description,
        "url": window.location.href
    };

    return (
        // SEO FIX: Use <article> semantics so crawlers know this is the main content
        <Box
            component="article"
            sx={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
        >
            {/* 🛑 SEO CRITICAL: Inject unique title and meta description for this specific project */}
            <Helmet>
                <title>{`${project.name} - Portfolio Project | Mychel Garzon`}</title>
                <meta name="description" content={project.specificDescription.substring(0, 160)} />

                {/* Open Graph for Social Sharing (LinkedIn/Twitter previews) */}
                <meta property="og:title" content={project.name} />
                <meta property="og:description" content={project.description} />
                <meta property="og:image" content={project.image} />
                <meta property="og:type" content="article" />

                {/* Structured Data Injection */}
                <script type="application/ld+json">
                    {JSON.stringify(projectSchema)}
                </script>
            </Helmet>

            <Container sx={{ marginTop: '8rem', flex: '1' }}>
                <Grid container spacing={4} justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            alt={`Screenshot of ${project.name} application`} // SEO FIX: Descriptive Alt Text
                            src={project.image}
                            // SEO FIX: Aspect ratio prevents layout shift (CLS) before image loads
                            sx={{
                                height: '400px',
                                width: '100%',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                                aspectRatio: '16/9'
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <CardContent>
                            {/* SEO FIX: Use H1 for the page title. Essential for relevance. */}
                            <Typography variant="h1" sx={{ marginBottom: '20px', fontSize: '2.5rem', fontWeight: 'bold' }}>
                                {project.name}
                            </Typography>

                            <Typography variant="body1" color="text.secondary" sx={{ marginBottom: '20px' }}>
                                {project.specificDescription}
                            </Typography>

                            <Grid container spacing={1}>
                                {project.technologies.map((techId) => {
                                    const technology = technologiesData.find((t) => t.id === techId);
                                    return (
                                        technology && (
                                            <Grid item key={techId}>
                                                <Box
                                                    sx={{
                                                        padding: '4px 8px',
                                                        backgroundColor: '#f5f5f5',
                                                        borderRadius: '4px',
                                                        fontSize: '0.8rem',
                                                        color: '#2c3e50',
                                                        display: 'inline-block',
                                                    }}
                                                >
                                                    {technology.name}
                                                </Box>
                                            </Grid>
                                        )
                                    );
                                })}
                            </Grid>
                            <Box>
                                {/* SEO FIX: Replaced window.history.back() with Link. 
                                    Keeps user on site if they land here from search. */}
                                <Button
                                    component={Link}
                                    to="/projects"
                                    className='marginTop2rem'
                                    variant="outlined"
                                    sx={{
                                        margin: '2rem 0',
                                        color: 'black',
                                        borderColor: 'black',
                                        '&:hover': {
                                            borderColor: '#536872',
                                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                        },
                                        marginRight: '1rem',
                                    }}>
                                    Back to Projects
                                </Button>

                                {/* SEO FIX: Standard anchor tag for external links is correct here */}
                                <Button
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        backgroundColor: 'transparent',
                                        '&:hover': { backgroundColor: 'transparent' },
                                        textDecoration: 'none',
                                    }}
                                >
                                    <Typography
                                        component="span"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 0.5,
                                            textDecoration: 'none',
                                            color: '#2c3e50',
                                            flex: 1,
                                            textAlign: 'right',
                                        }}
                                    >
                                        Visit the page
                                        <ArrowOutwardIcon fontSize="large" />
                                    </Typography>
                                </Button>
                            </Box>
                        </CardContent>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default ProjectDetail;