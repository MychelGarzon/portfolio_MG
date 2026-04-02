import { useEffect } from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import Typed from "typed.js";
import styles from "./banner.module.css";

const Banner = () => {
    useEffect(() => {
        const element = document.querySelector(`.${styles.typed}`);
        if (element) {
            const options = {
                strings: [
                    "n8n Verified Creator",
                    "Junction n8n Tech Challenge Winner",
                    "AI Automation Specialist",
                    "Full Stack Developer"
                ], typeSpeed: 60,
                backSpeed: 25,
                backDelay: 1000,
                startDelay: 500,
                loop: true,
                cursorChar: " ",
            };

            const typed = new Typed(element, options);

            return () => {
                typed.destroy();
            };
        }
    }, []);

    return (
        <Box className={styles.banner} style={{ backgroundColor: "#2C3E50" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h2" component="h2" sx={{ color: "white" }}>
                    I am Mychel Garzon
                </Typography>
                <Typography variant="h4" component="h4" sx={{ color: "white" }}>
                    <span className={styles.typed}></span>
                </Typography>
                <Button
                    component={Link}
                    to="/automation"
                    variant="outlined"
                    sx={{
                        mt: 4,
                        color: 'white', // Your teal color
                        borderColor: '#1abc9c',
                        borderWidth: '2px', // Make the border slightly thicker for better visibility
                        textTransform: 'none',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        px: 4, // Horizontal padding
                        py: 1, // Vertical padding
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            borderColor: '#1abc9c',
                            backgroundColor: 'rgba(26, 188, 156, 0.1)', // Subtle teal glow
                            transform: 'translateY(-2px)', // Slight lift effect
                            boxShadow: '0 4px 15px rgba(26, 188, 156, 0.3)',
                        }
                    }}
                >
                    View My Automations →
                </Button>

            </Box>
        </Box>
    );


};

export default Banner;