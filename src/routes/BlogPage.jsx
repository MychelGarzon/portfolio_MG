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
            {/* Page Header */}
            <Box textAlign="center" mb={8}>
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
                <Typography variant="body1" sx={{ color: '#666', maxWidth: '600px', mx: 'auto', fontSize: '1.1rem' }}>
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
                                maxWidth: '380px', // Matches the narrow look of the reference
                                borderRadius: '24px', // Larger border radius like the reference
                                boxShadow: hoveredCardId === blog.id
                                    ? '0 20px 40px rgba(0,0,0,0.1)'
                                    : '0 4px 20px rgba(0,0,0,0.05)',
                                transition: 'all 0.3s ease-in-out',
                                transform: hoveredCardId === blog.id ? 'translateY(-8px)' : 'translateY(0)',
                                position: 'relative',
                                background: "#fff",
                                overflow: 'hidden',
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}
                            onMouseEnter={() => setHoveredCardId(blog.id)}
                            onMouseLeave={() => setHoveredCardId(null)}
                        >
                            {/* Image Section */}
                            <CardMedia
                                component="img"
                                // Fixed height and cover ensures it fits perfectly
                                sx={{
                                    height: 220,
                                    width: '100%',
                                    objectFit: 'cover',
                                    borderBottom: '1px solid rgba(0,0,0,0.05)'
                                }}
                                image={blog.image}
                                alt={blog.title}
                            />

                            <CardContent sx={{
                                flexGrow: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                p: 3,
                                paddingTop: 2.5
                            }}>
                                {/* Meta Data Row (Date & Read Time) */}
                                <Box sx={{
                                    mb: 2,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    fontSize: '0.85rem',
                                    color: '#666',
                                    fontWeight: 500
                                }}>
                                    <span>{blog.date}</span>
                                    <span>{blog.readTime}</span>
                                </Box>

                                {/* Title */}
                                <Typography
                                    variant="h5"
                                    component="h2"
                                    sx={{
                                        mb: 1.5,
                                        fontWeight: 800, // Extra bold like reference
                                        lineHeight: 1.2,
                                        fontSize: '1.5rem',
                                        color: '#1a1a1a'
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
                                        color: '#555',
                                        lineHeight: 1.6,
                                        fontSize: '0.95rem'
                                    }}
                                >
                                    {blog.excerpt}
                                </Typography>

                                {/* Tags - Styled like the reference image (Light Blue Pills) */}
                                <Box sx={{ mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                    {blog.tags.map((tag, index) => (
                                        <Chip
                                            key={index}
                                            label={tag}
                                            size="small"
                                            sx={{
                                                backgroundColor: '#e3f2fd', // Very light blue background
                                                color: '#1976d2',           // Darker blue text
                                                fontWeight: 600,
                                                fontSize: '0.75rem',
                                                borderRadius: '8px',        // Slightly squared corners
                                                height: '24px',
                                                '& .MuiChip-label': {
                                                    paddingLeft: '8px',
                                                    paddingRight: '8px'
                                                }
                                            }}
                                        />
                                    ))}
                                </Box>

                                <Divider sx={{ opacity: 0.6 }} />

                                {/* Footer Link */}
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                                    <Button
                                        onClick={() => navigate(`/blog/${blog.id}`)}
                                        disableRipple
                                        sx={{
                                            textTransform: 'none',
                                            color: '#333',
                                            fontWeight: 600,
                                            fontSize: '0.95rem',
                                            padding: 0,
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                                color: '#000',
                                                '& .MuiSvgIcon-root': {
                                                    transform: 'translate(2px, -2px)'
                                                }
                                            }
                                        }}
                                    >
                                        Read Article
                                        <ArrowOutwardIcon
                                            sx={{
                                                ml: 0.5,
                                                fontSize: '1rem',
                                                transition: 'transform 0.2s ease'
                                            }}
                                        />
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