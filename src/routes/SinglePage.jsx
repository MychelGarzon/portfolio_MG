import { useParams } from 'react-router-dom';
import { Typography, CardContent, Button, Grid, Container, Box } from '@mui/material';
import projectsData from '../data/projectsData';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import technologiesData from '../data/technologies'; // Import technologies data

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projectId ? projectsData.find((p) => p.id === parseInt(projectId)) : undefined;

    if (!project) {
        return <Typography variant="h6">Project not found!</Typography>;
    }

    return (
        <Box
            sx={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
        >
            {/* Main Content */}
            <Container sx={{ marginTop: '8rem', flex: '1' }}>
                <Grid container spacing={4} justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            alt="Project"
                            src={project.image}
                            sx={{
                                height: '400px',
                                width: '100%',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                            }}
                        />
                    </Grid>

                    {/* Description Section */}
                    <Grid item xs={12} md={6}>
                        <CardContent>
                            <Typography variant="h1" component="h2" sx={{ marginBottom: '20px' }}>
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
                                <Button
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
                                    }} onClick={() => window.history.back()}>
                                    Back to Projects
                                </Button>
                                <Button
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        backgroundColor: 'transparent',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                        textDecoration: 'none',
                                        position: 'relative',
                                        '&:hover::after': {
                                            transform: 'scaleX(1)',
                                        },
                                        '::after': {
                                            textDecoration: 'none',
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
                                    <Typography
                                        component="a"
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
