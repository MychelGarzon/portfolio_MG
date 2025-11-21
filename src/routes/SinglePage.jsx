import { useParams, Link } from 'react-router-dom'; // SEO: Use Link for internal navigation
import { Typography, CardContent, Grid, Container, Box, Button } from '@mui/material';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Helmet } from 'react-helmet-async'; // SEO: Import Helmet for dynamic metadata

import projectsData from '../data/projectsData';
import technologiesData from '../data/technologies';

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projectId ? projectsData.find((p) => p.id === parseInt(projectId)) : undefined;

    if (!project) {
        return <Typography variant="h6">Project not found!</Typography>;
    }

    // SEO: Construct dynamic schema for this specific project
    const projectSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": project.name,
        "description": project.specificDescription,
        "applicationCategory": project.category,
        "operatingSystem": "Web"
    };

    return (
        // SEO: Use <article> for standalone content
        <Box
            component="article"
            sx={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
        >
            {/* 🛑 SEO CRITICAL: Inject unique metadata for this route */}
            <Helmet>
                <title>{`${project.name} | Project by Mychel Garzon`}</title>
                <meta name="description" content={project.specificDescription.substring(0, 160)} />

                {/* Open Graph for Social Sharing */}
                <meta property="og:title" content={project.name} />
                <meta property="og:description" content={project.description} />
                <meta property="og:image" content={project.image} />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(projectSchema)}
                </script>
            </Helmet>

            <Container sx={{ marginTop: '8rem', flex: '1' }}>
                <Grid container spacing={4} justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            alt={`Screenshot of ${project.name} application`} // SEO: Descriptive Alt Text
                            src={project.image}
                            // SEO: Explicit dimensions (aspect ratio) prevents CLS
                            // Optimization: In a real scenario, use a <picture> tag with WebP source here
                            sx={{
                                height: '400px',
                                width: '100%',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <CardContent>
                            {/* SEO: H1 matches the Title tag. Excellent for relevance. */}
                            <Typography variant="h1" component="h1" sx={{ marginBottom: '20px', fontSize: '2.5rem' }}>
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
                                {/* SEO: Replaced window.history.back() with React Router Link. 
                                    This ensures internal link juice flows back to the parent page. */}
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
                                <Button
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer" // Security best practice
                                    sx={{
                                        // ... existing styles
                                        backgroundColor: 'transparent',
                                    }}
                                >
                                    <Typography
                                        component="span" // Changed from <a> to <span> to avoid nested <a> tags if Button is an <a>
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