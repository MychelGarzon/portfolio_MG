import { useEffect, useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import projectsData from '../data/projectsData';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import technologiesData from '../data/technologies';

const RecentProjects = () => {
    const [projects, setProjects] = useState([]);
    const [hoveredCardId, setHoveredCardId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const filteredProjects = projectsData.filter((project) => project.id === 1 || project.id === 2);
        setProjects(filteredProjects);
    }, []);

    const handleNavigate = (projectId) => {
        navigate(`/projects/${projectId}`);
    };

    return (
        <>
            <Typography
                variant="h2"
                component="h2"
                sx={{
                    marginTop: "5rem",
                    marginBottom: 2,
                    textAlign: 'center',
                }}
            >
                Recent Projects
            </Typography>

            <Grid container spacing={2} sx={{ marginBottom: "3rem", justifyContent: "center" }}>
                {projects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                width: '80%',
                                boxShadow: 3,
                                transition: 'transform 0.3s',
                                transform: hoveredCardId === project.id ? 'scale(1.05)' : 'scale(1)',
                                position: 'relative',
                                background: "#e1e1df",
                            }}
                            onMouseEnter={() => setHoveredCardId(project.id)}
                            onMouseLeave={() => setHoveredCardId(null)}
                        >
                            {/* Card Media */}
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image={project.image}
                                    alt={project.name}
                                    sx={{
                                        transition: 'transform 0.3s',
                                        margin: "auto",
                                    }}
                                />
                            </Box>

                            {/* Card Content */}
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Grid container alignItems="center" justifyContent="center" sx={{ mb: 2 }}>
                                    <Typography variant="body2" color="textSecondary">
                                        {project.category}
                                    </Typography>
                                    <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                                    <Typography variant="body2" color="textSecondary">
                                        {project.subCategory}
                                    </Typography>
                                </Grid>
                                <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {project.description}
                                </Typography>

                                {/* Technologies Section */}
                                {project.technologies && (
                                    <Box mt={2}>
                                        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                                            Technologies Used
                                        </Typography>
                                        <Grid container spacing={1}>
                                            {project.technologies.map((techId) => {
                                                const tech = technologiesData.find(t => t.id === techId);
                                                return tech ? (
                                                    <Grid item key={tech.id}>
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
                                                            {tech.name}
                                                        </Box>
                                                    </Grid>
                                                ) : null;
                                            })}
                                        </Grid>
                                    </Box>
                                )}
                                <Box
                                    mt={4}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            color: 'black',
                                            borderColor: 'black',
                                            '&:hover': {
                                                borderColor: '#536872',
                                                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                            },
                                            marginRight: '1rem',
                                        }}
                                        onClick={() => handleNavigate(project.id)}
                                    >
                                        More Info
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
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default RecentProjects;
