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
        <Container maxWidth="xl" sx={{ marginTop: '8rem', marginBottom: '6rem' }}>

            {/* Page Header */}
            <Box textAlign="center" mb={10}>
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        fontSize: { xs: '2rem', md: '3rem' },
                        fontWeight: 300,
                        letterSpacing: '-0.02em',
                        color: '#111',
                        mb: 1,
                    }}
                >
                    Latest Insights
                </Typography>
                <Box sx={{
                    width: 48,
                    height: 3,
                    background: '#2C3E50',
                    borderRadius: 2,
                    mx: 'auto',
                    mb: 3,
                }} />
                <Typography
                    variant="body1"
                    sx={{
                        color: '#777',
                        maxWidth: '520px',
                        mx: 'auto',
                        fontSize: '1rem',
                        lineHeight: 1.8,
                    }}
                >
                    Exploring the intersection of AI, Automation, and Full Stack Development.
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
                                maxWidth: '380px',
                                borderRadius: '16px',
                                boxShadow: hoveredCardId === blog.id
                                    ? '0 20px 50px rgba(0,0,0,0.1)'
                                    : '0 2px 20px rgba(0,0,0,0.06)',
                                transition: 'all 0.25s ease',
                                transform: hoveredCardId === blog.id ? 'translateY(-6px)' : 'translateY(0)',
                                background: '#fff',
                                overflow: 'hidden',
                                border: '1px solid rgba(0,0,0,0.06)',
                            }}
                            onMouseEnter={() => setHoveredCardId(blog.id)}
                            onMouseLeave={() => setHoveredCardId(null)}
                        >
                            {/* Top accent line — color per card */}
                            <Box sx={{
                                height: 3,
                                background: '#2C3E50',
                                width: '100%',
                                flexShrink: 0,
                            }} />

                            {/* Image */}
                            <CardMedia
                                component="img"
                                sx={{
                                    height: 200,
                                    width: '100%',
                                    objectFit: 'cover',
                                }}
                                image={blog.image}
                                alt={blog.title}
                            />

                            <CardContent sx={{
                                flexGrow: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                p: 3,
                            }}>

                                {/* Meta row */}
                                <Box sx={{
                                    mb: 2,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <Typography variant="caption" sx={{
                                        color: '#999',
                                        fontSize: '0.78rem',
                                        fontWeight: 500,
                                        letterSpacing: 0.3,
                                    }}>
                                        {blog.date}
                                    </Typography>
                                    <Typography variant="caption" sx={{
                                        color: '#bbb',
                                        fontSize: '0.78rem',
                                        letterSpacing: 0.3,
                                    }}>
                                        {blog.readTime}
                                    </Typography>
                                </Box>

                                {/* Title */}
                                <Typography
                                    variant="h6"
                                    component="h2"
                                    sx={{
                                        mb: 1.5,
                                        fontWeight: 700,
                                        lineHeight: 1.35,
                                        fontSize: '1.05rem',
                                        color: '#111',
                                        letterSpacing: '-0.01em',
                                    }}
                                >
                                    {blog.title}
                                </Typography>

                                {/* Excerpt */}
                                <Typography
                                    variant="body2"
                                    sx={{
                                        mb: 3,
                                        flexGrow: 1,
                                        color: '#666',
                                        lineHeight: 1.75,
                                        fontSize: '0.875rem',
                                    }}
                                >
                                    {blog.excerpt}
                                </Typography>

                                {/* Tags */}
                                <Box sx={{ mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                    {blog.tags.map((tag, index) => (
                                        <Chip
                                            key={index}
                                            label={tag}
                                            size="small"
                                            sx={{
                                                backgroundColor: '#eef2f5',
                                                color: '#2C3E50',
                                                fontWeight: 600,
                                                fontSize: '0.7rem',
                                                borderRadius: '6px',
                                                height: '22px',
                                                letterSpacing: 0.3,
                                                '& .MuiChip-label': {
                                                    px: '8px',
                                                }
                                            }}
                                        />
                                    ))}
                                </Box>

                                <Divider sx={{ opacity: 0.4, mb: 2 }} />

                                {/* Read button */}
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button
                                        onClick={() => navigate(`/blog/${blog.id}`)}
                                        disableRipple
                                        sx={{
                                            textTransform: 'none',
                                            color: '#2C3E50',
                                            fontWeight: 600,
                                            fontSize: '0.875rem',
                                            padding: 0,
                                            minWidth: 0,
                                            letterSpacing: 0.2,
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                                color: '#000',
                                                '& .MuiSvgIcon-root': {
                                                    transform: 'translate(2px, -2px)',
                                                }
                                            }
                                        }}
                                    >
                                        Read Article
                                        <ArrowOutwardIcon sx={{
                                            ml: 0.5,
                                            fontSize: '0.9rem',
                                            transition: 'transform 0.2s ease',
                                        }} />
                                    </Button>
                                </Box>

                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default BlogPage;