import Banner from "../components/banner/Banner";
import { Box, Divider } from "@mui/material";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import RecentProjects from "../components/RecentProjects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          marginTop: '64px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Banner />
      </Box>

      <Hero />

      <Divider
        sx={{
          bgcolor: 'rgba(128, 128, 128, 0.5)',
          height: 1,
          marginY: 8,
          marginX: '10%',
          width: '80%',
        }}
      />

      <Skills />

      <Divider
        sx={{
          bgcolor: 'rgba(128, 128, 128, 0.5)',
          height: 1,
          marginY: 2,
          marginX: '10%',
          width: '80%',
        }}
      />

      <RecentProjects />
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

      <Contact />
    </Box>
  );
};

export default Home;
