import { Grid, Typography, CardMedia } from '@mui/material';
import photo from "../assets/ownPhoto.jpeg";

const Hero = () => {
  return (
    // SEO FIX: Changed Grid container to a <section> for semantic value
    <Grid
      component="section"
      container
      sx={{
        height: '80vh',
        justifyContent: 'center',
        alignItems: 'center',
        background: "white",

      }}
    >
      <Grid item xs={12} md={6} display="flex" justifyContent="center">
        <CardMedia
          component="img"
          alt="Mychel Garzon - n8n Expert and Flowgrammer" // SEO FIX: Optimized Alt Text
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
        {/* SEO FIX: Maintained H2 hierarchy */}
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
          {/* SEO FIX: Added "Flowgrammer" explicitly and used <strong> tags for emphasis */}
          An <strong>N8N Verified Creator</strong>, <strong>Flowgrammer</strong>, & AI Automation Specialist.
          I am also a Full Stack Developer with a foundation in TypeScript and JavaScript.
          I excel at solving complex business problems by leveraging low-code automation and AI integration (e.g., Google Gemini API workflows). With a perfect GPA from Business College Helsinki , my experience in full-stack development (React, Node.js, AWS, Docker) is complemented by a strong focus on QA (Cypress, Jest) and a background as a Scrum Master/Product Owner.
        </Typography>
      </Grid>
    </Grid >
  );
};

export default Hero;