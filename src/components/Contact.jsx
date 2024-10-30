import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    Container,
    Snackbar,
    Alert,
    styled,
    ListItem,
    List,
} from "@mui/material";

const CustomTextField = styled(TextField)({
    marginBottom: "20px",
    "& .MuiInputBase-root": {
        borderBottom: "1px solid #686868",
        "&:hover": {
            borderBottom: "1px solid #686868",
        },
        "&.Mui-focused": {
            borderBottom: "1px solid #686868",
        },
    },
    "& .MuiInputBase-input": {
        paddingBottom: "10px",
        fontSize: "18px",
        lineHeight: "30px",
    },
});

const ContactPage = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && email && message) {
            setSuccess(true);
            setName("");
            setEmail("");
            setMessage("");
        } else {
            setError(true);
        }
    };

    return (
        <Box
            sx={{
                paddingTop: "160px",
                paddingBottom: "160px",
                backgroundColor: "#f9f9f9",
                color: "#686868",
                width: "100%",
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h1" sx={{ color: "black" }}>
                            Get in touch
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: "24px" }}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit mattis
                            faucibus odio feugiat arc dolor.
                        </Typography>

                        {/* List of social media buttons */}
                        <List>
                            <ListItem>
                                <Button
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        backgroundColor: 'transparent', // Ensures no background initially
                                        '&:hover': {
                                            backgroundColor: 'transparent', // Prevents background change on hover
                                        },
                                        textDecoration: 'none',
                                        position: 'relative', // Required for the pseudo-element positioning
                                        '&:hover::after': {
                                            transform: 'scaleX(1)', // Scales the underline to full width on hover
                                        },
                                        '::after': {
                                            textDecoration: 'none',
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            bottom: -2, // Adjusts the underline distance from text
                                            width: '100%',
                                            height: '2px', // Thickness of the underline
                                            backgroundColor: 'black',
                                            transform: 'scaleX(0)', // Initially hidden
                                            transformOrigin: 'left',
                                            transition: 'transform 0.3s ease', // Smooth transition
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        color="black"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center', // Aligns icon with text
                                            gap: 0.5, // Adds some space between text and icon
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Github <ArrowOutwardIcon fontSize="large" />
                                    </Typography>
                                </Button>
                            </ListItem>
                            <ListItem>
                                <Button
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        backgroundColor: 'transparent', // Ensures no background initially
                                        '&:hover': {
                                            backgroundColor: 'transparent', // Prevents background change on hover
                                        },
                                        textDecoration: 'none',
                                        position: 'relative', // Required for the pseudo-element positioning
                                        '&:hover::after': {
                                            transform: 'scaleX(1)', // Scales the underline to full width on hover
                                        },
                                        '::after': {
                                            textDecoration: 'none',
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            bottom: -2, // Adjusts the underline distance from text
                                            width: '100%',
                                            height: '2px', // Thickness of the underline
                                            backgroundColor: 'black',
                                            transform: 'scaleX(0)', // Initially hidden
                                            transformOrigin: 'left',
                                            transition: 'transform 0.3s ease', // Smooth transition
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        color="black"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center', // Aligns icon with text
                                            gap: 0.5, // Adds some space between text and icon
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Facebook <ArrowOutwardIcon fontSize="large" />
                                    </Typography>
                                </Button>
                            </ListItem>
                            <ListItem>
                                <Button
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        backgroundColor: 'transparent', // Ensures no background initially
                                        '&:hover': {
                                            backgroundColor: 'transparent', // Prevents background change on hover
                                        },
                                        textDecoration: 'none',
                                        position: 'relative', // Required for the pseudo-element positioning
                                        '&:hover::after': {
                                            transform: 'scaleX(1)', // Scales the underline to full width on hover
                                        },
                                        '::after': {
                                            textDecoration: 'none',
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            bottom: -2, // Adjusts the underline distance from text
                                            width: '100%',
                                            height: '2px', // Thickness of the underline
                                            backgroundColor: 'black',
                                            transform: 'scaleX(0)', // Initially hidden
                                            transformOrigin: 'left',
                                            transition: 'transform 0.3s ease', // Smooth transition
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        color="black"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center', // Aligns icon with text
                                            gap: 0.5, // Adds some space between text and icon
                                            textDecoration: 'none',
                                        }}
                                    >
                                        LinkedIn <ArrowOutwardIcon fontSize="large" />
                                    </Typography>
                                </Button>
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
                                label="Tell me about the project"
                                multiline
                                rows={4}
                                variant="standard"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                inputProps={{ maxLength: 5000 }}
                            />
                            <Button
                                type="submit"
                                sx={{
                                    backgroundColor: 'transparent', // Ensures no background initially
                                    '&:hover': {
                                        backgroundColor: 'transparent', // Prevents background change on hover
                                    },
                                    textDecoration: 'none',
                                    position: 'relative', // Required for the pseudo-element positioning
                                    '&:hover::after': {
                                        transform: 'scaleX(1)', // Scales the underline to full width on hover
                                    },
                                    '::after': {
                                        textDecoration: 'none',
                                        content: '""',
                                        position: 'absolute',
                                        left: 0,
                                        bottom: -2, // Adjusts the underline distance from text
                                        width: '100%',
                                        height: '2px', // Thickness of the underline
                                        backgroundColor: 'black',
                                        transform: 'scaleX(0)', // Initially hidden
                                        transformOrigin: 'left',
                                        transition: 'transform 0.3s ease', // Smooth transition
                                    },
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    color="black"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center', // Aligns icon with text
                                        gap: 0.5, // Adds some space between text and icon
                                        textDecoration: 'none',
                                    }}
                                >
                                    SUBMIT MESSAGE <ArrowOutwardIcon fontSize="large" />
                                </Typography>
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>

            {/* Snackbar for success message */}
            <Snackbar
                open={success}
                autoHideDuration={6000}
                onClose={() => setSuccess(false)}
            >
                <Alert onClose={() => setSuccess(false)} severity="success">
                    Your message has been submitted. I will get back to you within 24-48
                    hours.
                </Alert>
            </Snackbar>

            {/* Snackbar for error message */}
            <Snackbar
                open={error}
                autoHideDuration={6000}
                onClose={() => setError(false)}
            >
                <Alert onClose={() => setError(false)} severity="error">
                    Oops! Something went wrong while submitting the form.
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ContactPage;
