import { Grid, Typography, CardMedia, Box, Chip } from '@mui/material';
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
          component="h1" // Tells Bing this is the main topic of the page
          sx={{
            fontSize: { xs: '2rem', md: '2.8rem' },
            fontWeight: 300,
            letterSpacing: '-0.02em',
            color: '#111',
            mb: 1,
            lineHeight: 1.2,
          }}
        >
          n8n Expert & Developer in Helsinki
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

        <Box sx={{ maxWidth: 600, position: 'relative', pl: 3, borderLeft: '2px solid #e5e7eb' }}>
          {/* The "Big Wins" Row */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body1"
              sx={{
                color: '#111',
                fontWeight: 600,
                fontSize: '1.05rem',
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <span style={{ color: '#ea580c' }}>n8n Verified Creator</span>
              <span style={{ color: '#94a3b8', fontWeight: 400 }}>&</span>
              <span style={{ color: '#a16207' }}>Junction n8n Tech Challenge 2025 Winner</span>
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
              Specializing in <strong>AI-powered agentic workflows</strong> and production-grade Gemini API pipelines.
            </Typography>
          </Box>

          {/* The Technical Core */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Full-stack developer architecting scalable apps with <strong>TypeScript, Node.js, and React</strong>.
              Expertise in <strong>AWS, Docker, and CI/CD</strong> with a 5.0/5.0 GPA from Business College Helsinki.
            </Typography>
          </Box>

          {/* Status Footer */}
          <Chip
            label="Available for Automation Consulting & Full Stack Roles"
            size="small"
            variant="outlined"
            sx={{
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#1e293b',
              borderColor: '#e2e8f0',
              bgcolor: '#f8fafc'
            }}
          />
        </Box>

      </Grid>
    </Grid>
  );
};

export default Hero;