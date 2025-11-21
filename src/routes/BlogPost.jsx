// src/routes/BlogPost.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Container, Box, Button, Chip, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Helmet } from 'react-helmet-async';
import blogData from '../data/blogData';

const BlogPost = () => {
    const { blogId } = useParams();
    const navigate = useNavigate();
    const post = blogId ? blogData.find((p) => p.id === parseInt(blogId)) : undefined;

    if (!post) {
        return (
            <Container sx={{ marginTop: '8rem', textAlign: 'center' }}>
                <Typography variant="h5">Article not found!</Typography>
                <Button onClick={() => navigate('/blog')} sx={{ mt: 2 }}>Back to Blog</Button>
            </Container>
        );
    }
    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image,
        "author": {
            "@type": "Person",
            "name": "Mychel Garzon"
        },
        "datePublished": post.date // Ensure your data has a date field if possible
    };
    return (
        <Box sx={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f9f9f9' }}>
            <Helmet>
                <title>{`${post.title} | Mychel Garzon Tech Blog`}</title>
                <meta name="description" content={post.content.substring(0, 150) + "..."} />

                {/* Open Graph Tags */}
                <meta property="og:title" content={post.title} />
                <meta property="og:type" content="article" />
                <meta property="og:image" content={post.image} />

                <script type="application/ld+json">
                    {JSON.stringify(blogSchema)}
                </script>
            </Helmet>
            <Container maxWidth="md" sx={{ marginTop: '8rem', marginBottom: '4rem', flex: '1' }}>
                <Button
                    startIcon={<ArrowBackIcon />}
                    onClick={() => navigate('/blog')}
                    sx={{ mb: 4, color: '#555', textTransform: 'none' }}
                >
                    Back to Blog
                </Button>

                <Paper elevation={0} sx={{ p: { xs: 3, md: 6 }, borderRadius: '16px' }}>
                    <Box sx={{ mb: 4 }}>
                        {post.tags.map((tag, index) => (
                            <Chip
                                key={index}
                                label={tag}
                                sx={{ mr: 1, mb: 1, backgroundColor: '#e3f2fd', color: '#1565c0', fontWeight: 600 }}
                            />
                        ))}
                    </Box>

                    <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2, lineHeight: 1.2 }}>
                        {post.title}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2, mb: 4, color: 'text.secondary', fontSize: '0.9rem' }}>
                        <Typography variant="body2">{post.date}</Typography>
                        <Typography variant="body2">•</Typography>
                        <Typography variant="body2">{post.readTime}</Typography>
                    </Box>

                    <Box
                        component="img"
                        src={post.image}
                        alt={post.title}
                        sx={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '400px',
                            objectFit: 'cover',
                            borderRadius: '12px',
                            mb: 6,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                        }}
                    />

                    <Typography variant="body1" sx={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#333' }}>
                        {post.content}
                    </Typography>
                </Paper>
            </Container>
        </Box>
    );
};

export default BlogPost;