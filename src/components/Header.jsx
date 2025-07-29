import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Button, Toolbar, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        const controlHeader = () => {
            if (typeof window !== "undefined") {
                if (window.scrollY > lastScrollY) {
                    setVisible(false);
                } else {
                    setVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', controlHeader);

        return () => {
            window.removeEventListener('scroll', controlHeader);
        };
    }, [lastScrollY]);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

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
                <Button component={Link} to="/" color="inherit" sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                    <Typography variant="h5">Mychel Garzon</Typography>
                </Button>

                <div style={{ display: 'flex', gap: '20px' }}>
                    {/* Links for larger screens */}
                    <Button component={Link} to="/workflows" color="inherit" sx={{
                        display: { xs: 'none', md: 'inline-flex' },
                        '&:hover': { backgroundColor: 'transparent' }
                    }}>
                        <Typography variant="h6">WorkFlows</Typography>
                    </Button>
                    <Button component={Link} to="/projects" color="inherit" sx={{
                        display: { xs: 'none', md: 'inline-flex' },
                        '&:hover': { backgroundColor: 'transparent' }
                    }}>
                        <Typography variant="h6">Projects</Typography>
                    </Button>
                    <Button component={Link} to="/skills" color="inherit" sx={{
                        display: { xs: 'none', md: 'inline-flex' },
                        '&:hover': { backgroundColor: 'transparent' }
                    }}>
                        <Typography variant="h6">Skills</Typography>
                    </Button>

                    <Button component={Link} to="/contact" color="inherit" sx={{
                        display: { xs: 'none', md: 'inline-flex' },
                        '&:hover': { backgroundColor: 'transparent' }
                    }}>
                        <Typography variant="h6">Contact</Typography>
                    </Button>

                    {/* Hamburger menu for smaller screens */}
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenuOpen}
                        sx={{ display: { xs: 'inline-flex', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        PaperProps={{
                            sx: { width: '200px', padding: '10px' }
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <IconButton onClick={handleMenuClose} color="inherit" size="small">
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <MenuItem onClick={handleMenuClose} component={Link} to="/workflows">
                            WorkFlows
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component={Link} to="/projects">
                            Projects
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component={Link} to="/skills">
                            Skills
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component={Link} to="/contact">
                            Contact
                        </MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
