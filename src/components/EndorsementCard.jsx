import { Box, Typography, Paper, Chip, Button, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VerifiedIcon from '@mui/icons-material/Verified';
import PropTypes from 'prop-types';

// 1. Define the component FIRST
const EndorsementCard = ({ blog }) => {
    // Safety check: render nothing if data is missing
    if (!blog?.officialEndorsement) return null;

    return (
        <Paper
            elevation={0}
            sx={{
                p: { xs: 3, md: 4 },
                my: 4,
                borderRadius: '20px',
                background: 'linear-gradient(145deg, #ffffff 0%, #f9fafb 100%)',
                border: '1px solid #edf2f7',
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3, flexWrap: 'wrap', gap: 2 }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>

                    <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1a202c', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            n8n <VerifiedIcon sx={{ fontSize: '0.9rem', color: '#3182ce' }} />
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#718096', fontWeight: 600, letterSpacing: 0.5 }}>
                            VERIFIED TECHNICAL VOUCH
                        </Typography>
                    </Box>
                </Box>
                <Chip
                    label={blog.officialEndorsement.badge}
                    size="small"
                    sx={{ backgroundColor: '#1a202c', color: '#fff', fontWeight: 700, fontSize: '0.7rem' }}
                />
            </Box>

            <Typography
                variant="body1"
                sx={{
                    fontStyle: 'italic',
                    color: '#4a5568',
                    mb: 4,
                    lineHeight: 1.8,
                    fontSize: '1.05rem',
                    borderLeft: '4px solid #2C3E50',
                    pl: 3
                }}
            >
                {/* Fixed quote escaping here */}
                {`"${blog.officialEndorsement.statement}"`}
            </Typography>

            <Button
                component={Link}
                href={blog.officialEndorsement.link}
                target="_blank"
                variant="outlined"
                startIcon={<LinkedInIcon />}
                sx={{
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontWeight: 600,
                    color: '#0077b5',
                    borderColor: '#0077b5',
                    '&:hover': { borderColor: '#004182', backgroundColor: 'rgba(0, 119, 181, 0.04)' }
                }}
            >
                View Announcement on LinkedIn
            </Button>
        </Paper>
    );
};

// 2. Define propTypes AFTER the component is initialized
EndorsementCard.propTypes = {
    blog: PropTypes.shape({
        officialEndorsement: PropTypes.shape({
            badge: PropTypes.string,
            statement: PropTypes.string,
            link: PropTypes.string,
            provider: PropTypes.string
        })
    }).isRequired
};

export default EndorsementCard;