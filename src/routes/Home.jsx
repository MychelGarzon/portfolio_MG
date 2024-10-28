import Banner from "../components/banner/Banner";
import { Box, Divider } from "@mui/material";
import styles from "./home.module.css";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <Box className={styles.container}>
      <Banner />
      <Hero />
      <Divider
        sx={{
          bgcolor: 'rgba(128, 128, 128, 0.5)',
          height: 1,
          marginY: 2,
          marginX: '10%',
          width: '80%',
        }}
      />
      <Box
        sx={{
          textAlign: 'center',
          marginY: 4,
          paddingX: 2,
        }}
      >

      </Box>

    </Box>
  );
}

export default Home;
