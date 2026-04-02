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
        {/* The H1 Heading */}
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontSize: { xs: '2.2rem', md: '2.8rem' }, // Slightly smaller on mobile to prevent weird wrapping
            fontWeight: 700, // Thicker font looks better for headings
            letterSpacing: '-0.02em',
            color: '#111',
            mb: 1,
            lineHeight: 1.2,
          }}
        >
          n8n Expert & Developer <br /> in Helsinki
        </Typography>

        {/* Orange accent line */}
        <Box sx={{
          width: 60,
          height: 4,
          background: '#ea580c',
          borderRadius: 2,
          mb: 4,
          // Ensures it stays centered on mobile
          mx: { xs: 'auto', md: 0 }
        }} />

        <Box sx={{
          maxWidth: 600,
          width: '100%',
          // We remove the left border on mobile because it looks messy with centered text
          pl: { xs: 0, md: 3 },
          borderLeft: { xs: 'none', md: '2px solid #e5e7eb' }
        }}>

          {/* The "Big Wins" Row */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body1"
              sx={{
                color: '#111',
                fontWeight: 700,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                mb: 1.5,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
                gap: 1,
                textAlign: 'center'
              }}
            >
              <span style={{ color: '#ea580c' }}>n8n Verified Creator</span>
              <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' }, color: '#94a3b8', fontWeight: 400 }}>&</Box>
              <span style={{ color: '#a16207' }}>Junction 2025 Winner</span>
            </Typography>

            {/* Unified Paragraph 1 */}
            <Typography
              variant="body1"
              sx={{
                color: '#444', // Matching Block 2
                lineHeight: 1.7,
                fontSize: '0.95rem',
                px: { xs: 2, md: 0 },
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              Specializing in <strong>AI agentic workflows</strong> and production-grade Gemini API pipelines.
            </Typography>
          </Box>

          {/* The Technical Core - Unified Paragraph 2 */}
          <Box sx={{ mb: 4, px: { xs: 2, md: 0 } }}>
            <Typography
              variant="body1"
              sx={{
                color: '#444', // Matching Block 1
                lineHeight: 1.7,
                fontSize: '0.95rem',
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              Full-stack developer architecting scalable apps with <strong>TypeScript, Node.js, and React</strong>.
              Expertise in <strong>AWS</strong> and <strong>Docker</strong> with a 5.0/5.0 GPA.
            </Typography>
          </Box>

          {/* Status Footer */}
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Chip
              label="Available for Automation & Full Stack Roles"
              size="medium"
              variant="outlined"
              sx={{
                height: 'auto',
                py: 1,
                px: 1.5,
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#1e293b',
                borderColor: '#e2e8f0',
                bgcolor: '#f8fafc',
                '& .MuiChip-label': {
                  whiteSpace: 'normal',
                }
              }}
            />
          </Box>

          {/* Status Footer */}

        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;