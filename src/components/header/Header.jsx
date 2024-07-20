import styles from "./header.module.css"
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import logo from "../../assets/logoMG.svg"
import { Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Box className={styles.headerBox} sx={{ flexGrow: 1, width: '100%' }}>
            <AppBar className={styles.appBar} position="fixed" sx={{ backgroundColor: '#eae7dc ' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/">
                            <img src={logo} alt="Logo" style={{ height: '40px', width: '145px', marginTop: '8px' }} />
                        </Link>
                    </Typography>
                    <div>Header</div>
                </Toolbar>
            </AppBar>

        </Box>

    );
}

export default Header;
