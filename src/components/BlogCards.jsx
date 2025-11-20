import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box, Chip, Divider } from '@mui/material';
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
                            maxWidth: '400px',
                            boxShadow: 3,
                            transition: 'transform 0.3s',
                            transform: hoveredCardId === blog.id ? 'scale(1.05)' : 'scale(1)',
                            position: 'relative',
                            background: "#e1e1df",
                        }}
                        onMouseEnter={() => setHoveredCardId(blog.id)}
                        onMouseLeave={() => setHoveredCardId(null)}
                    >
                        <Box sx={{ height: '200px', overflow: 'hidden' }}>
                            <CardMedia
                                component="img"
                                height="100%"
                                image={blog.image}
                                alt={blog.title}
                                sx={{
                                    transition: 'transform 0.3s',
                                    '&:hover': { transform: 'scale(1.1)' }
                                }}
                            />
                        </Box>

                        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="caption" color="textSecondary">
                                    {blog.date}
                                </Typography>
                                <Typography variant="caption" color="textSecondary">
                                    {blog.readTime}
                                </Typography>
                            </Box>

                            <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold', lineHeight: 1.2 }}>
                                {blog.title}
                            </Typography>

                            <Typography variant="body2" color="textSecondary" sx={{ mb: 2, flexGrow: 1 }}>
                                {blog.excerpt}
                            </Typography>

                            <Box sx={{ mb: 2 }}>
                                {blog.tags.map((tag, index) => (
                                    <Chip
                                        key={index}
                                        label={tag}
                                        size="small"
                                        sx={{ mr: 0.5, mb: 0.5, backgroundColor: '#f5f5f5', fontSize: '0.7rem' }}
                                    />
                                ))}
                            </Box>

                            <Divider sx={{ my: 1 }} />

                            <Button
                                onClick={() => handleNavigate(blog.id)}
                                sx={{
                                    textTransform: 'none',
                                    color: '#2c3e50',
                                    justifyContent: 'flex-end',
                                    '&:hover': { backgroundColor: 'transparent', textDecoration: 'underline' }
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
    );
};

export default BlogCards;

BlogCards.propTypes = {
    limit: PropTypes.number,
};

BlogCards.defaultProps = {
    limit: undefined,
};