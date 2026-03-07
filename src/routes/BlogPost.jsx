import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Container, Box, Button, Chip, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import blogData from '../data/blogData';
import PropTypes from 'prop-types';
import EndorsementCard from '../components/EndorsementCard';

// 1. Renders a single paragraph — handles **bold** inline
const RenderParagraph = ({ text }) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return (
        <Typography
            variant="body1"
            sx={{
                fontSize: '1.05rem',
                lineHeight: 1.9,
                color: '#444',
                mb: 2.5,
            }}
        >
            {parts.map((part, i) => {
                // Bold text
                if (i % 2 === 1) {
                    return (
                        <strong key={`bold-${i}`} style={{ color: '#2C3E50', fontWeight: 700 }}>
                            {part}
                        </strong>
                    );
                }
                // URL detection inside plain text parts
                const urlRegex = /(https?:\/\/[^\s]+)/g;
                const subParts = part.split(urlRegex);
                return subParts.map((subPart, j) =>
                    urlRegex.test(subPart) ? (
                        // FIX: Corrected the malformed anchor tag syntax
                        <a
                            key={`link-${i}-${j}`}
                            href={subPart}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: '#2C3E50',
                                fontWeight: 600,
                                textDecoration: 'underline',
                                wordBreak: 'break-all',
                            }}
                        >
                            {subPart}
                        </a>
                    ) : (
                        <span key={`text-${i}-${j}`}>{subPart}</span>
                    )
                );
            })}
        </Typography>
    );
};

// 2. Main content renderer — splits by \n\n and detects headings
const RenderContent = ({ content }) => {
    const blocks = content.split('\n\n').filter(Boolean);

    return (
        <Box>
            {blocks.map((block, i) => {
                const trimmed = block.trim();

                // Heading detection: starts and ends with **
                if (trimmed.startsWith('**') && trimmed.endsWith('**') && trimmed.split('**').length === 3) {
                    const heading = trimmed.replace(/\*\*/g, '');
                    return (
                        <Box key={i}>
                            <Typography
                                variant="h5"
                                component="h2"
                                sx={{
                                    fontWeight: 700,
                                    color: '#2C3E50',
                                    fontSize: '1.2rem',
                                    mt: i === 0 ? 0 : 4,
                                    mb: 1.5,
                                    letterSpacing: '-0.01em',
                                }}
                            >
                                {heading}
                            </Typography>
                            <Box sx={{
                                width: 32,
                                height: 2,
                                background: '#2C3E50',
                                borderRadius: 1,
                                mb: 2,
                                opacity: 0.4,
                            }} />
                        </Box>
                    );
                }

                // List item detection: starts with emoji
                const startsWithEmoji = (str) => /^\p{Emoji}/u.test(str) && !/^[0-9#*]/u.test(str);
                if (startsWithEmoji(trimmed)) {
                    // FIX: Safely extract the emoji and parse the remaining string so text isn't lost
                    const emoji = [...trimmed][0];
                    const textWithoutEmoji = trimmed.substring(emoji.length);
                    const parts = textWithoutEmoji.split(/\*\*(.*?)\*\*/g);

                    return (
                        <Box
                            key={i}
                            sx={{
                                display: 'flex',
                                gap: 2,
                                mb: 2.5,
                                p: 2,
                                borderRadius: '10px',
                                background: '#f5f7fa',
                                border: '1px solid rgba(44,62,80,0.08)',
                            }}
                        >
                            <Typography sx={{ fontSize: '1.3rem', flexShrink: 0, mt: 0.1 }}>
                                {emoji}
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, color: '#444' }}>
                                {parts.map((part, j) =>
                                    j % 2 === 1
                                        ? <strong key={j} style={{ color: '#2C3E50', fontWeight: 700 }}>{part}</strong>
                                        : part
                                )}
                            </Typography>
                        </Box>
                    );
                }

                return <RenderParagraph key={i} text={trimmed} />;
            })}
        </Box>
    );
};

RenderParagraph.propTypes = { text: PropTypes.string.isRequired };
RenderContent.propTypes = { content: PropTypes.string.isRequired };

// 3. Main BlogPost Component
const BlogPost = () => {
    // Matches the :blogId parameter in your Route
    const { blogId } = useParams();
    const navigate = useNavigate();
    const post = blogId ? blogData.find((p) => p.id === parseInt(blogId)) : undefined;

    // SCROLL FIX: Jumps to top when an article is opened
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [blogId]);

    if (!post) {
        return (
            <Container sx={{ marginTop: '8rem', textAlign: 'center' }}>
                <Typography variant="h5">Article not found!</Typography>
                <Button onClick={() => navigate('/blog')} sx={{ mt: 2 }}>Back to Blog</Button>
            </Container>
        );
    }

    return (
        <Box sx={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f9f9f9' }}>
            <Container maxWidth="md" sx={{ marginTop: '8rem', marginBottom: '4rem', flex: '1' }}>

                <Button
                    startIcon={<ArrowBackIcon />}
                    onClick={() => navigate('/blog')}
                    sx={{
                        mb: 4,
                        color: '#2C3E50',
                        textTransform: 'none',
                        fontWeight: 600,
                        '&:hover': { backgroundColor: 'transparent', opacity: 0.7 }
                    }}
                >
                    Back to Blog
                </Button>

                <Paper elevation={0} sx={{ p: { xs: 3, md: 6 }, borderRadius: '16px', border: '1px solid rgba(0,0,0,0.06)' }}>

                    {/* Tags */}
                    <Box sx={{ mb: 3 }}>
                        {post.tags.map((tag, index) => (
                            <Chip
                                key={index}
                                label={tag}
                                size="small"
                                sx={{
                                    mr: 1,
                                    mb: 1,
                                    backgroundColor: '#eef2f5',
                                    color: '#2C3E50',
                                    fontWeight: 600,
                                    fontSize: '0.75rem',
                                    borderRadius: '6px',
                                }}
                            />
                        ))}
                    </Box>

                    {/* Title */}
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            lineHeight: 1.25,
                            fontSize: { xs: '1.8rem', md: '2.2rem' },
                            color: '#111',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        {post.title}
                    </Typography>

                    {/* Meta */}
                    <Box sx={{ display: 'flex', gap: 2, mb: 4, alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ color: '#999', fontSize: '0.85rem' }}>
                            {post.date}
                        </Typography>
                        <Box sx={{ width: 3, height: 3, borderRadius: '50%', background: '#ccc' }} />
                        <Typography variant="body2" sx={{ color: '#bbb', fontSize: '0.85rem' }}>
                            {post.readTime}
                        </Typography>
                    </Box>

                    {/* Cover image */}
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
                            mb: 4,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                        }}
                    />

                    {/* DYNAMIC ENDORSEMENT SECTION */}
                    <EndorsementCard blog={post} />

                    {/* Article Content */}
                    <Box sx={{ mt: 4 }}>
                        <RenderContent content={post.content} />
                    </Box>

                </Paper>
            </Container>
        </Box>
    );
};

export default BlogPost;