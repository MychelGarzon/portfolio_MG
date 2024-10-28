import { useParams } from 'react-router-dom';
import { Typography, CardContent, Button, Grid, Container, Box } from '@mui/material';
import projectsData from '../data/projects.json';

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
                            <Typography variant="h4" component="h2" sx={{ marginBottom: '20px' }}>
                                {project.name}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ marginBottom: '20px' }}>
                                {project.description}
                            </Typography>
                            <Button variant="contained" color="primary" onClick={() => window.history.back()}>
                                Back to Projects
                            </Button>
                        </CardContent>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ProjectDetail;
