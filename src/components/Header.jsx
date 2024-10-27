import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from "@mui/material";

const Header = () => {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const controlHeader = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                setVisible(false);
            } else {
                // Scrolling up
                setVisible(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', controlHeader);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('scroll', controlHeader);
        };
    }, [controlHeader, lastScrollY]);

    return (
        <Box sx={{ flexGrow: 1, width: '100%' }}>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: 'white',
                    color: "black",
                    transition: 'transform 0.3s ease',
                    transform: visible ? 'translateY(0)' : 'translateY(-100%)' // Move out of view
                }}
            >
                <Toolbar>
                    <Typography variant="h5">
                        Mychel Garzon
                    </Typography>
                </Toolbar>
            </AppBar>
            {/* Spacer to prevent content from hiding behind the AppBar */}
            <Toolbar sx={{ minHeight: '64px' }} />
        </Box>
    );
}

export default Header;
