import { useEffect } from "react";
import { Box } from "@mui/material";
import Typed from "typed.js";
import styles from "./banner.module.css";

const Banner = () => {
    useEffect(() => {
        const element = document.querySelector(`.${styles.typed}`);
        if (element) {
            const options = {
                strings: ["Designer", "Developer", "Freelancer"],
                typeSpeed: 60,
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
        <Box className={styles.banner} style={{ backgroundColor: "black" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1>I am Mychel Garzon</h1>
                <p>
                    <span className={styles.typed}></span>
                </p>
            </Box>
        </Box>
    );
};

export default Banner;