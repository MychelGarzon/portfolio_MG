import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
import styles from "./banner.module.css";

const Banner = () => {
    useEffect(() => {
        const element = document.querySelector(`.${styles.typed}`);
        if (element) {
            const options = {
                strings: [
                    "n8n Expert",
                    "Flowgrammer",
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

            </Box>
        </Box>
    );
};

export default Banner;