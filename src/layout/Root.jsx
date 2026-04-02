import { Box } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh', // Makes the app take up the full screen height
            }}
        >
            <Header />

            <Box
                component="main"
                sx={{
                    flexGrow: 1, // This is the magic line that pushes the footer down
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Outlet />
            </Box>

            <Footer />
        </Box>
    );
}

export default Root;