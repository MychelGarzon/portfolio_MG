import { Grid, Typography, CardMedia } from '@mui/material';
import photo from "../assets/ownPhoto.jpeg";

const Hero = () => {
  return (
    <Grid
      container
      sx={{
        height: '80vh', // Full height of the viewport
        justifyContent: 'center',
        alignItems: 'center', // Centering vertically
        background: "white", // Background color

      }}
    >
      {/* Left Column for Image */}
      <Grid item xs={12} md={6} display="flex" justifyContent="center">
        <CardMedia
          component="img"
          alt="About Me"
          image={photo}
          sx={{
            marginTop: "20px",
            height: '50%',
            width: '50%',
            objectFit: 'cover',
            borderRadius: '16px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        />
      </Grid>

      {/* Right Column for Text */}
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Typography variant="h2" component="h2" sx={{ marginBottom: 2 }}>
          About Me
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            textAlign: 'left',
            marginTop: '16px',
            maxWidth: '600px',
            color: '#555',
          }}
        >
          I’m a Full Stack Developer with a focus on React, set to graduate from Business College Helsinki by the end of 2024. I have over a year of experience in building web applications and a strong interest in quality assurance, using tools like Cypress and Jest. Transitioning from a career in the HoReCa industry, where I successfully managed teams and businesses.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Hero;
