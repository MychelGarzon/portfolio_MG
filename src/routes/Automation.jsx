import { Helmet } from 'react-helmet';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import {
    Box,
    Typography,
    Grid,
    Container,
    styled,
    List,
    ListItem,
    Button
} from '@mui/material';

// Styled Button matching your elegant minimalist aesthetic
const StyledButton = styled(Button)({
    backgroundColor: 'transparent',
    textDecoration: 'none',
    position: 'relative',
    cursor: 'pointer',
    padding: '8px 0',
    justifyContent: 'flex-start',
    textAlign: 'left',
    '&:hover::after': {
        transform: 'scaleX(1)',
    },
    '::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: 2,
        backgroundColor: 'black',
        transform: 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.3s ease',
    },
});

const AutomationPage = () => {
    // Array of your specific n8n partner links for clean rendering
    const workflowLinks = [
        {
            title: "Incident Triage Workflow Template",
            url: "https://n8n.partnerlinks.io/incident-triage-linkedin"
        },
        {
            title: "CV Optimizer",
            url: "https://n8n.partnerlinks.io/cv-optimizer"
        },
        {
            title: "Analyze Competitor",
            url: "https://n8n.partnerlinks.io/analyze-competitor"
        },
        {
            title: "Daily SEO Audit HTML Reports",
            url: "https://n8n.partnerlinks.io/daily-seo-audit-html-reports-gmail-slack"
        }
    ];

    // Profile Link
    const profileLink = "https://n8n.partnerlinks.io/mychel-garzon";

    // Enhanced SEO Schema Markup
    const professionalServiceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Mychel Garzon - n8n Automation Consultant",
        "description": "n8n Verified Creator and Junction 2025 n8n Tech Challenge Winner. Custom AI automation workflows with 99.9% uptime. Multi-agent systems, RAG pipelines, production-grade n8n solutions in Helsinki, Finland.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Helsinki",
            "addressRegion": "Uusimaa",
            "addressCountry": "FI"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "60.1699",
            "longitude": "24.9384"
        },
        "url": "https://mychelgarzon.com/automation",
        "email": "mychel.garzon@gmail.com",
        "priceRange": "$$",
        "areaServed": {
            "@type": "City",
            "name": "Helsinki"
        },
        "serviceType": [
            "n8n Automation Consulting",
            "AI Workflow Development",
            "Multi-Agent Systems",
            "RAG Pipeline Development",
            "Custom n8n Workflows"
        ],
        "sameAs": [
            "https://www.linkedin.com/in/mychel-garzon-trujillo/",
            "https://n8n.io/creators/mychel-garzon"
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://mychelgarzon.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "n8n Automation Workflows",
                "item": "https://mychelgarzon.com/automation"
            }
        ]
    };

    const handleNavigation = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Box
            sx={{
                paddingTop: '160px',
                paddingBottom: '80px', // Adds breathing room above the footer
                backgroundColor: '#f9f9f9',
                color: '#686868',
                width: '100%',

                // THE FIX: Remove minHeight: '100vh' and add these three lines:
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Enhanced SEO & Meta Tags */}
            <Helmet>
                <title>n8n Consultant Helsinki | Custom Automation Workflows | Mychel Garzon</title>
                <meta
                    name="description"
                    content="n8n Verified Creator and Junction 2025 Winner in Helsinki. Custom AI automation workflows with 99.9% uptime. Multi-agent systems, RAG pipelines, production-grade n8n solutions."
                />
                <meta
                    name="keywords"
                    content="n8n consultant Helsinki, n8n expert Finland, workflow automation Helsinki, AI automation, Node.js automation, TypeScript workflows, multi-agent systems, RAG pipelines, production automation Helsinki, n8n Verified Creator, Junction 2025 winner"
                />
                <link rel="canonical" href="https://mychelgarzon.com/automation" />

                {/* Open Graph */}
                <meta property="og:title" content="n8n Automation Consultant Helsinki | Mychel Garzon" />
                <meta property="og:description" content="n8n Verified Creator and Junction 2025 Winner. Production-grade AI workflows with 99.9% uptime in Helsinki." />
                <meta property="og:url" content="https://mychelgarzon.com/automation" />
                <meta property="og:type" content="website" />

                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify(professionalServiceSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>

            <Container maxWidth="lg">
                <Grid container spacing={8} alignItems="flex-start">

                    {/* Left Column: Value Prop & Profile Link */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h1" sx={{ color: 'black', fontSize: { xs: '3rem', md: '4rem' }, mb: 3 }}>
                            n8n Custom Automations
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '32px', fontSize: '1.1rem', lineHeight: 1.8 }}>
                            As a specialized n8n consultant based in Helsinki, I build workflows that eliminate repetitive manual tasks and seamlessly connect your software stack. Browse my pre-built templates or view my full creator profile for custom integrations.
                        </Typography>

                        <List disablePadding>
                            {/* Main n8n Profile Link */}
                            <ListItem disableGutters>
                                <StyledButton onClick={() => handleNavigation(profileLink)}>
                                    <Typography
                                        variant="h5"
                                        color="black"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            fontWeight: 'bold',
                                            textTransform: 'none'
                                        }}
                                    >
                                        View My Full n8n Profile <ArrowOutwardIcon fontSize="large" />
                                    </Typography>
                                </StyledButton>
                            </ListItem>
                        </List>
                    </Grid>

                    {/* Right Column: Featured Workflow Links */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ p: { xs: 0, md: 2 } }}>
                            <Typography variant="h4" sx={{ color: 'black', mb: 4, fontWeight: 'medium' }}>
                                Featured Workflows
                            </Typography>

                            <List disablePadding sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                {workflowLinks.map((link, index) => (
                                    <ListItem disableGutters key={index} sx={{ padding: 0 }}>
                                        <StyledButton
                                            fullWidth
                                            onClick={() => handleNavigation(link.url)}
                                        >
                                            <Typography
                                                variant="h6"
                                                color="black"
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    width: '100%',
                                                    textTransform: 'none',
                                                    fontWeight: 'normal',
                                                }}
                                            >
                                                {link.title} <ArrowOutwardIcon />
                                            </Typography>
                                        </StyledButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default AutomationPage;