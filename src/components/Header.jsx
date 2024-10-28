import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Button, Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom'; // Ensure you're using react-router for routing

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

        return () => {
            window.removeEventListener('scroll', controlHeader);
        };
    }, [controlHeader, lastScrollY]);

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: 'white',
                color: 'black',
                transition: 'transform 0.3s ease',
                transform: visible ? 'translateY(0)' : 'translateY(-100%)',
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h5">
                    Mychel Garzon
                </Typography>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Button component={Link} to="/" color="inherit">
                        <Typography variant="h6">Home</Typography>
                    </Button>
                    <Button component={Link} to="/Projects" color="inherit">
                        <Typography variant="h6">Projects</Typography>
                    </Button>

                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
