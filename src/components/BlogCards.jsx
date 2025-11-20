// src/components/BlogCards.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box,
    Chip,
    Divider
} from '@mui/material';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useNavigate } from 'react-router-dom';
import blogData from '../data/blogData';

const BlogCards = ({ limit }) => {
    const [blogs, setBlogs] = useState([]);
    const [hoveredCardId, setHoveredCardId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (limit) {
            setBlogs(blogData.slice(0, limit));
        } else {
            setBlogs(blogData);
        }
    }, [limit]);

    const handleNavigate = (blogId) => {
        navigate(`/blog/${blogId}`);
    };

    return (
        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            {blogs.map((blog) => (
                <Grid item xs={12} sm={6} md={4} key={blog.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            width: '100%',
                            maxWidth: '380px', // Narrower card for the modern look
                            borderRadius: '24px', // Larger rounded corners
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
                        {/* Image Section - Applied directly to CardMedia to fix fitting issues */}
                        <CardMedia
                            component="img"
                            image={blog.image}
                            alt={blog.title}
                            loading="lazy"
                            sx={{
                                display: 'block',
                                width: '100%',
                                height: 220,
                                objectFit: 'cover',
                                objectPosition: 'center',
                                borderTopLeftRadius: '24px',
                                borderTopRightRadius: '24px',
                            }}
                        />


                        <CardContent sx={{
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            p: 3,
                            paddingTop: 2.5
                        }}>
                            {/* Meta Data Row */}
                            <Box sx={{
                                mb: 2,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                fontSize: '0.85rem',
                                color: '#666',
                                fontWeight: 500
                            }}>
                                <Typography variant="caption" sx={{ fontSize: 'inherit' }}>
                                    {blog.date}
                                </Typography>
                                <Typography variant="caption" sx={{ fontSize: 'inherit' }}>
                                    {blog.readTime}
                                </Typography>
                            </Box>

                            {/* Title */}
                            <Typography
                                variant="h5"
                                component="h3"
                                sx={{
                                    mb: 1.5,
                                    fontWeight: 800,
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

                            {/* Tags - Modern Pill Style */}
                            <Box sx={{ mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                {blog.tags.map((tag, index) => (
                                    <Chip
                                        key={index}
                                        label={tag}
                                        size="small"
                                        sx={{
                                            backgroundColor: '#e3f2fd', // Light blue background
                                            color: '#1976d2',           // Dark blue text
                                            fontWeight: 600,
                                            fontSize: '0.75rem',
                                            borderRadius: '8px',
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

                            {/* Read Article Link */}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                                <Button
                                    onClick={() => handleNavigate(blog.id)}
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
                                            textDecoration: 'none',
                                            '& .MuiSvgIcon-root': {
                                                transform: 'translate(2px, -2px)'
                                            }
                                        }
                                    }}
                                    endIcon={
                                        <ArrowOutwardIcon
                                            sx={{
                                                fontSize: '1rem',
                                                transition: 'transform 0.2s ease'
                                            }}
                                        />
                                    }
                                >
                                    Read Article
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

BlogCards.propTypes = {
    limit: PropTypes.number,
};

BlogCards.defaultProps = {
    limit: undefined,
};

export default BlogCards;