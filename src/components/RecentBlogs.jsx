import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BlogCards from './BlogCards';

const RecentBlogs = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ width: '100%', padding: '0 20px' }}>
            <Typography
                variant="h2"
                component="h2"
                sx={{
                    marginTop: "5rem",
                    marginBottom: 4,
                    textAlign: 'center',
                }}
            >
                Latest Articles
            </Typography>

            <BlogCards limit={3} />

            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4, marginBottom: 4 }}>
                <Button
                    variant="outlined"
                    onClick={() => navigate('/blog')}
                    sx={{
                        color: 'black',
                        borderColor: 'black',
                        padding: '10px 30px',
                        '&:hover': {
                            borderColor: '#536872',
                            backgroundColor: 'rgba(0, 0, 0, 0.1)'
                        }
                    }}
                >
                    View All Posts
                </Button>
            </Box>
        </Box>
    );
};

export default RecentBlogs;