import PropTypes from 'prop-types';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import skillsData from '../data/skillsData';

const Skills = () => {
    return (
        <>
            <Typography variant="h2" component="h2" sx={{ marginBottom: 2, textAlign: 'center' }}>
                Skills
            </Typography>
            <Grid container justifyContent="center">
                <Typography
                    variant="body1"
                    component="p"
                    sx={{
                        textAlign: 'center',
                        margin: '16px',
                        maxWidth: '600px',
                        color: '#555',
                    }}
                >
                    As a Junior Full Stack Developer, I thrive on the challenge of blending creativity and logic, building seamless user experiences while mastering the intricate backend mechanics, and I am eager to keep learning and pushing my limits in this dynamic field.
                </Typography>
            </Grid>
            <Grid container spacing={4} style={{ padding: '50px' }}>
                {skillsData.map((info, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        {/* Inline Infobox Component */}
                        <Card
                            elevation={3}
                            sx={{
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                            }}
                        >
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        mb: 2,
                                    }}
                                >
                                    <img
                                        src={info.image}
                                        alt={info.title}
                                        style={{
                                            width: '40%',
                                            height: 'auto',
                                            objectFit: 'contain',
                                        }}
                                    />
                                </Box>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    {info.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {info.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
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
