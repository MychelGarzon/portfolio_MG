// src/routes/BlogPage.jsx
import { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Button,
    Divider
} from '@mui/material';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useNavigate } from 'react-router-dom';
import blogData from '../data/blogData';

const BlogPage = () => {
    const navigate = useNavigate();
    const [hoveredCardId, setHoveredCardId] = useState(null);

    return (
        <Container maxWidth="xl" sx={{ marginTop: '8rem', marginBottom: '4rem' }}>
            <Box textAlign="center" mb={6}>
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        marginBottom: 2,
                        fontWeight: 'bold',
                        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Latest Insights
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', maxWidth: '600px', mx: 'auto' }}>
                    Sharing my thoughts on Full Stack Development, AI Automation, and the tech industry.
                </Typography>
            </Box>

            <Grid container spacing={4} justifyContent="center">
                {blogData.map((blog) => (
                    <Grid item xs={12} sm={6} md={4} key={blog.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                width: '100%',
                                maxWidth: '400px',
                                boxShadow: hoveredCardId === blog.id ? 6 : 2,
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                transform: hoveredCardId === blog.id ? 'translateY(-8px)' : 'translateY(0)',
                                position: 'relative',
                                background: "#fff",
                                borderRadius: '16px',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={() => setHoveredCardId(blog.id)}
                            onMouseLeave={() => setHoveredCardId(null)}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image={blog.image}
                                alt={blog.title}
                                sx={{ objectFit: 'cover' }}
                            />

                            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="caption" sx={{ color: '#666', fontWeight: 500 }}>
                                        {blog.date}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#666' }}>
                                        {blog.readTime}
                                    </Typography>
                                </Box>

                                <Typography variant="h5" component="h2" sx={{ mb: 1.5, fontWeight: 'bold', lineHeight: 1.3 }}>
                                    {blog.title}
                                </Typography>

                                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
                                    {blog.excerpt}
                                </Typography>

                                <Box sx={{ mb: 3 }}>
                                    {blog.tags.map((tag, index) => (
                                        <Chip
                                            key={index}
                                            label={tag}
                                            size="small"
                                            sx={{
                                                mr: 0.5,
                                                mb: 0.5,
                                                backgroundColor: '#e3f2fd',
                                                color: '#1976d2',
                                                fontSize: '0.75rem',
                                                fontWeight: 500
                                            }}
                                        />
                                    ))}
                                </Box>

                                <Divider sx={{ my: 1 }} />

                                <Button
                                    onClick={() => navigate(`/blog/${blog.id}`)}
                                    sx={{
                                        textTransform: 'none',
                                        color: '#2c3e50',
                                        justifyContent: 'flex-end',
                                        mt: 1,
                                        '&:hover': { backgroundColor: 'transparent', color: '#1976d2' }
                                    }}
                                    endIcon={<ArrowOutwardIcon />}
                                >
                                    Read Article
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default BlogPage;