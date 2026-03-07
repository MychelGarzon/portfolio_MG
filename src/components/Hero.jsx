import { Grid, Typography, CardMedia, Box } from '@mui/material';
import photo from "../assets/ownPhoto.jpeg";

const Hero = () => {
  return (
    <Grid
      component="section"
      container
      sx={{
        minHeight: '80vh',
        justifyContent: 'center',
        alignItems: 'center',
        background: "#fafafa",
        px: { xs: 3, md: 8 },
        py: 8,
        gap: { xs: 6, md: 0 },
      }}
    >
      {/* Photo */}
      <Grid item xs={12} md={5} display="flex" justifyContent="center">
        <Box sx={{ position: 'relative' }}>
          <Box sx={{
            position: 'absolute',
            top: -10,
            left: -10,
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            border: '2px solid #ea580c',
            opacity: 0.4,
          }} />
          <CardMedia
            component="img"
            alt="Mychel Garzon - n8n Verified Creator and Junction 2025 n8n Tech Challenge Winner, Helsinki Finland"
            image={photo}
            sx={{
              width: { xs: '220px', md: '280px' },
              height: { xs: '220px', md: '280px' },
              objectFit: 'cover',
              objectPosition: 'center top',
              borderRadius: '16px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              position: 'relative',
              zIndex: 1,
            }}
          />
        </Box>
      </Grid>

      {/* Text */}
      <Grid
        item
        xs={12}
        md={7}
        display="flex"
        flexDirection="column"
        alignItems={{ xs: 'center', md: 'flex-start' }}
        justifyContent="center"
        textAlign={{ xs: 'center', md: 'left' }}
        sx={{ pl: { md: 6 } }}
      >
        {/* Badge row */}
        <Box sx={{
          display: 'flex',
          gap: 1,
          flexWrap: 'wrap',
          mb: 3,
          justifyContent: { xs: 'center', md: 'flex-start' }
        }}>

        </Box>

        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '2rem', md: '2.8rem' },
            fontWeight: 300,
            letterSpacing: '-0.02em',
            color: '#111',
            mb: 1,
            lineHeight: 1.2,
          }}
        >
          About Me
        </Typography>

        {/* Orange accent line */}
        <Box sx={{
          width: 48,
          height: 3,
          background: '#ea580c',
          borderRadius: 2,
          mb: 3,
          alignSelf: { xs: 'center', md: 'flex-start' }
        }} />

        <Typography
          variant="body1"
          sx={{
            color: '#444',
            lineHeight: 1.9,
            fontSize: '0.97rem',
            maxWidth: 560,
          }}
        >
          {"I build automation systems that actually run in production. I'm an "}
          <strong style={{ color: '#ea580c' }}>n8n Verified Creator</strong>
          {" and "}
          <strong style={{ color: '#a16207' }}>Junction 2025 n8n Tech Challenge Winner</strong>
          {" \u2014 Europe's largest hackathon. I specialize in "}
          <strong>AI-powered workflow automation</strong>
          {", LLM integration, and full stack development using "}
          <strong>TypeScript</strong>
          {", "}
          <strong>Node.js</strong>
          {", and "}
          <strong>React</strong>
          {"."}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#444',
            lineHeight: 1.9,
            fontSize: '0.97rem',
            maxWidth: 560,
            mt: 2,
          }}
        >
          {"My work includes production "}
          <strong>Gemini API pipelines</strong>
          {", agentic n8n workflows, and scalable web applications on AWS with CI/CD, Docker, Cypress, and Jest. I've led a 6-person Agile team as Scrum Master and hold a Full Stack Development qualification from "}
          <strong>Business College Helsinki</strong>
          {" with a 5.0/5.0 GPA."}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: '#888',
            mt: 2.5,
            fontSize: '0.85rem',
            letterSpacing: 0.3,
          }}
        >
          Available for automation consulting and full stack roles — hybrid or remote.
        </Typography>

      </Grid>
    </Grid>
  );
};

export default Hero;