import { Box, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <Box
            sx={{
                padding: '40px',
                backgroundColor: '#2C3E50', // Dark background
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    maxWidth: '1200px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Typography variant="h6" sx={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '10px', color: '#ecf0f1' }}>
                        {/* Footer Title */}
                    </Typography>
                    <Typography sx={{ fontSize: '1.1em', margin: '5px 0' }}>
                        {/* Subtitle 1 */}
                    </Typography>
                    <Typography sx={{ fontSize: '1.1em', margin: '5px 0' }}>
                        {/* Subtitle 2 */}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        component="a"
                        href="https://www.linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        sx={{
                            color: 'white',
                            marginLeft: '20px',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.1)',
                                color: '#1abc9c', // Change color on hover
                            },
                        }}
                    >
                        <LinkedInIcon sx={{ fontSize: '2em', transition: 'color 0.3s ease' }} />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://github.com/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        sx={{
                            color: 'white',
                            marginLeft: '20px',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.1)',
                                color: '#1abc9c', // Change color on hover
                            },
                        }}
                    >
                        <GitHubIcon sx={{ fontSize: '2em', transition: 'color 0.3s ease' }} />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
