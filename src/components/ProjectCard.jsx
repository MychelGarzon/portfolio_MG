import { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import projectsData from '../data/projects.json';

const ProjectCards = () => {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    const handleNavigate = (projectId) => {
        navigate(`/projects/${projectId}`);
    };

    return (
        <Paper
            sx={{

                p: 4, // Add padding to the paper
                overflow: 'auto', // Allow scrolling if content overflows
            }}
            className={`basis-0 grow`}
        >
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

            <Grid container spacing={4} justifyContent="center" sx={{ backgroundColor: '#ffffff', marginBottom: "3rem" }}>
                {projects.map((project) => (
                    <Grid item xs={12} sm={6} md={5} key={project.id} display="flex" justifyContent="center">
                        <Card
                            sx={{
                                margin: '30px',
                                display: 'flex',
                                flexDirection: 'row',
                                height: '100%',
                                width: '100%',
                                maxWidth: 500,
                                boxShadow: 3,
                            }}
                        >
                            <CardMedia
                                component="img"
                                alt={project.name}
                                image={project.image}
                                sx={{
                                    margin: "auto",
                                    height: '150px',
                                    width: '150px',
                                    objectFit: 'contain',
                                    marginRight: 2,
                                    marginLeft: 2,
                                }}
                            />
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Typography variant="h5" component="div">
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                                    {project.description}
                                </Typography>
                                <Typography
                                    component="a"
                                    href={project.link}
                                    target="_blank"
                                    sx={{
                                        color: '#2c3e50',
                                        textDecoration: 'none',
                                        '&:hover': {
                                            textDecoration: 'underline',
                                        }
                                    }}
                                >
                                    Click to visit the page
                                </Typography>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: 'black',
                                        borderColor: 'black',
                                        '&:hover': {
                                            borderColor: 'black',
                                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                        },
                                    }}
                                    onClick={() => handleNavigate(project.id)}
                                >
                                    More Info
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default ProjectCards;
