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
        margin={2}
        item
        xs={12}
        md={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
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
          {/* UPDATE: Added "Flowgrammer" explicitly */}
          An <strong>N8N Verified Creator</strong>, <strong>Flowgrammer</strong>, & AI Automation Specialist.
          I am also a Full Stack Developer with a foundation in TypeScript and JavaScript.
          I excel at solving complex business problems by leveraging low-code automation...
          {/* ... rest of text */}
        </Typography>
      </Grid>
    </Grid >
  );
};

export default Hero;
