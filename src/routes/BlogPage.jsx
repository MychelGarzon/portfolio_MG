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

    // 1. Define the specific order you want at the top
    const featuredIds = [1, 2, 6];

    // 2. Custom Sort Logic: Pins 1, 2, 6 to the front, then sorts the rest by ID descending
    const sortedBlogs = [...blogData].sort((a, b) => {
        const indexA = featuredIds.indexOf(a.id);
        const indexB = featuredIds.indexOf(b.id);

        // If both items are in the featured list, sort them by their position in that list (1, 2, 6)
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;

        // If only A is featured, move it to the top
        if (indexA !== -1) return -1;

        // If only B is featured, move it to the top
        if (indexB !== -1) return 1;

        // For everything else, sort by ID descending (newest first)
        return b.id - a.id;
    });

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

            <Grid container spacing={4}>
                {sortedBlogs.map((blog) => (
                    <Grid
                        item
                        key={blog.id}
                        xs={12}    // 1 card on mobile
                        sm={6}     // 2 cards on tablet
                        md={4}     // 3 cards on desktop (Forces 1, 2, and 6 into the first row)
                        sx={{ display: 'flex', justifyContent: 'center' }}
                    >
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
                            {/* Top accent line */}
                            <Box sx={{
                                height: 3,
                                background: '#2C3E50',
                                width: '100%',
                                flexShrink: 0,
                            }} />

                            <CardMedia
                                component="img"
                                sx={{ height: 200, width: '100%', objectFit: 'cover' }}
                                image={blog.image}
                                alt={blog.title}
                            />

                            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="caption" sx={{ color: '#999', fontSize: '0.78rem', fontWeight: 500 }}>
                                        {blog.date}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#bbb', fontSize: '0.78rem' }}>
                                        {blog.readTime}
                                    </Typography>
                                </Box>

                                <Typography
                                    variant="h6"
                                    component="h2"
                                    sx={{ mb: 1.5, fontWeight: 700, lineHeight: 1.35, fontSize: '1.05rem', color: '#111' }}
                                >
                                    {blog.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{ mb: 3, flexGrow: 1, color: '#666', lineHeight: 1.75, fontSize: '0.875rem' }}
                                >
                                    {blog.excerpt}
                                </Typography>

                                <Box sx={{ mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                    {blog.tags.map((tag, index) => (
                                        <Chip
                                            key={index}
                                            label={tag}
                                            size="small"
                                            sx={{ backgroundColor: '#eef2f5', color: '#2C3E50', fontWeight: 600, fontSize: '0.7rem', borderRadius: '6px' }}
                                        />
                                    ))}
                                </Box>

                                <Divider sx={{ opacity: 0.4, mb: 2 }} />

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
                                            '&:hover': { background: 'transparent', color: '#000' }
                                        }}
                                    >
                                        Read Article
                                        <ArrowOutwardIcon sx={{ ml: 0.5, fontSize: '0.9rem' }} />
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