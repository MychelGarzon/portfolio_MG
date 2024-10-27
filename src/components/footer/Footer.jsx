import { Box, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <Box className={styles.footer}>
            <Box className={styles.container}>
                <Box className={styles.contactInfo}>
                    <Typography variant="h6" className={styles.footerTitle}>
                        Contact
                    </Typography>
                    <Typography className={styles.footerSubTitle}>
                        WA: +571234567890
                    </Typography>
                    <Typography className={styles.footerSubTitle}>
                    </Typography>
                </Box>
                <Box className={styles.socialIcons}>
                    <IconButton
                        component="a"
                        href="https://www.linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className={styles.iconButton}
                    >
                        <LinkedInIcon className={styles.icon} />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://github.com/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className={styles.iconButton}
                    >
                        <GitHubIcon className={styles.icon} />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
