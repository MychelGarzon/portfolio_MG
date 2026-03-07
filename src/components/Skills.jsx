import PropTypes from 'prop-types';
import { Grid, Typography, Box } from '@mui/material';
import skillsData from '../data/skillsData';

const CARD_ACCENTS = ['#ff600a', '#2563eb', '#16a34a', '#7c3aed'];

const Skills = () => {
    return (
        <Box
            component="section"
            sx={{
                background: '#f8f8f8',
                py: 10,
                px: { xs: 3, md: 8 },
            }}
        >
            {/* Header */}
            <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        fontSize: { xs: '2rem', md: '2.8rem' },
                        fontWeight: 300,
                        letterSpacing: '-0.02em',
                        color: '#111',
                        mb: 1,
                    }}
                >
                    Skills
                </Typography>
                <Box sx={{
                    width: 48,
                    height: 3,
                    background: '#ea580c',
                    borderRadius: 2,
                    mx: 'auto',
                    mb: 3,
                }} />
                <Typography
                    variant="body1"
                    sx={{
                        color: '#777',
                        maxWidth: 520,
                        mx: 'auto',
                        lineHeight: 1.8,
                        fontSize: '0.95rem',
                    }}
                >
                    Building production systems at the intersection of AI, automation, and full stack engineering.
                </Typography>
            </Box>

            {/* Cards */}
            <Grid container spacing={3} justifyContent="center">
                {skillsData.map((info, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Box
                            sx={{
                                background: '#fff',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
                                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                                },
                            }}
                        >
                            {/* Colored top border */}
                            <Box sx={{
                                height: 4,
                                background: CARD_ACCENTS[index],
                                width: '100%',
                            }} />

                            <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flex: 1 }}>
                                {/* Icon */}
                                <Box sx={{ mb: 2.5 }}>
                                    <Box sx={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: '10px',
                                        background: CARD_ACCENTS[index] + '15',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <img
                                            src={info.image}
                                            alt={info.title}
                                            style={{
                                                width: 28,
                                                height: 28,
                                                objectFit: 'contain',
                                                opacity: 0.85,
                                            }}
                                        />
                                    </Box>
                                </Box>

                                {/* Title */}
                                <Typography
                                    variant="h6"
                                    component="h3"
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: '0.95rem',
                                        color: '#111',
                                        mb: 1.5,
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {info.title}
                                </Typography>

                                {/* Description */}
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#777',
                                        lineHeight: 1.75,
                                        fontSize: '0.85rem',
                                        flex: 1,
                                    }}
                                >
                                    {info.description}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

Skills.propTypes = {
    skillsData: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ),
};

export default Skills;