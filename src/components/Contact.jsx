import React from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import {
    Box,
    Typography,
    TextField,
    Grid,
    Container,
    Snackbar,
    Alert,
    styled,
    List,
    ListItem,
    Button // Import Button from MUI
} from '@mui/material';
import emailjs from 'emailjs-com';

// Styled TextField for custom styling
const CustomTextField = styled(TextField)({
    marginBottom: '20px',
    '& .MuiInputBase-root': {
        borderBottom: '1px solid #686868',
        '&:hover': {
            borderBottom: '1px solid #686868',
        },
        '&.Mui-focused': {
            borderBottom: '1px solid #686868',
        },
    },
    '& .MuiInputBase-input': {
        paddingBottom: '10px',
        fontSize: '18px',
        lineHeight: '30px',
    },
});

// Styled Button for custom styling
const StyledButton = styled(Button)({
    backgroundColor: 'transparent',
    textDecoration: 'none',
    position: 'relative',
    cursor: 'pointer', // Change cursor to pointer for better UX
    '&:hover::after': {
        transform: 'scaleX(1)',
    },
    '::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: -2,
        width: '100%',
        height: 2,
        backgroundColor: 'black',
        transform: 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.3s ease',
    },
});

const ContactPage = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(false);

    const handleNavigation = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && email && message) {
            const templateParams = { name, email, message };

            emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
                .then((response) => {
                    console.log('Email successfully sent!', response.status, response.text);
                    setSuccess(true);
                    setName('');
                    setEmail('');
                    setMessage('');
                })
                .catch((error) => {
                    console.error('Failed to send email:', error);
                    setError(true);
                });
        } else {
            setError(true);
        }
    };

    return (
        <Box
            sx={{
                paddingTop: '160px',
                paddingBottom: '160px',
                backgroundColor: '#f9f9f9',
                color: '#686868',
                width: '100%',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h1" sx={{ color: 'black' }}>
                            Get in touch
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '24px' }}>
                            I’d love to hear from you! Whether you have a project in mind, want to brainstorm ideas, or just wish to collaborate, don’t hesitate to reach out. Together, we can create something amazing!
                        </Typography>

                        {/* List of social media buttons */}
                        <List>
                            {/* GitHub Button */}
                            <ListItem>
                                <StyledButton onClick={() => handleNavigation("https://github.com/MychelGarzon")}>
                                    <Typography
                                        variant="h6"
                                        color="black"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 0.5,
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Github <ArrowOutwardIcon fontSize="large" />
                                    </Typography>
                                </StyledButton>
                            </ListItem>

                            {/* LinkedIn Button */}
                            <ListItem>
                                <StyledButton onClick={() => handleNavigation("https://www.linkedin.com/in/mychel-garzon-trujillo/")}>
                                    <Typography
                                        variant="h6"
                                        color="black"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 0.5,
                                            textDecoration: 'none',
                                        }}
                                    >
                                        LinkedIn <ArrowOutwardIcon fontSize="large" />
                                    </Typography>
                                </StyledButton>
                            </ListItem>

                            {/* Facebook Button */}
                            <ListItem>
                                <StyledButton onClick={() => handleNavigation("https://www.facebook.com/michel.garzontrujillo")}>
                                    <Typography
                                        variant="h6"
                                        color="black"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 0.5,
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Facebook <ArrowOutwardIcon fontSize="large" />
                                    </Typography>
                                </StyledButton>
                            </ListItem>
                        </List>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <form onSubmit={handleSubmit}>
                            <CustomTextField
                                fullWidth
                                label="Full name"
                                variant="standard"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                inputProps={{ maxLength: 256 }}
                            />
                            <CustomTextField
                                fullWidth
                                label="Email address"
                                type="email"
                                variant="standard"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                inputProps={{ maxLength: 256 }}
                            />
                            <CustomTextField
                                fullWidth
                                label="Reach Out to Discuss Opportunities"
                                multiline
                                rows={4}
                                variant="standard"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                inputProps={{ maxLength: 5000 }}
                            />
                            <StyledButton type="submit">
                                <Typography
                                    variant="h6"
                                    color="black"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 0.5,
                                        textDecoration: 'none',
                                    }}
                                >
                                    Send Message <ArrowOutwardIcon fontSize="large" />
                                </Typography>
                            </StyledButton>
                        </form>
                    </Grid>
                </Grid>
            </Container>

            <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
                <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Message sent successfully!
                </Alert>
            </Snackbar>

            <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
                <Alert onClose={() => setError(false)} severity="error" sx={{ width: '100%' }}>
                    An error occurred while sending the message. Please try again later.
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ContactPage;
