import Banner from "../components/banner/Banner";
import { Box, Divider } from "@mui/material";
import styles from "./home.module.css";
import ProjectCard from "../components/ProjectCard";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <Box className={styles.container}>
      <Banner />
      <Hero />
      <Divider
        sx={{
          bgcolor: 'rgba(128, 128, 128, 0.5)', // Grey with 50% opacity
          height: 1, // Thickness of the divider
          marginY: 2, // Vertical margin
          marginX: '10%', // Horizontal margin to create empty spaces on the sides
          width: '80%', // Optional: set a specific width for the divider
        }}
      />
      <Box
        sx={{
          textAlign: 'center',
          marginY: 4, // Vertical margin
          paddingX: 2, // Horizontal padding
        }}
      >


      </Box>
      <ProjectCard />


    </Box>
  );
}

export default Home;
