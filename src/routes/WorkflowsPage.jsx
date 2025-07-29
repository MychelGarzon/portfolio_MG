
import { useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Button,
    Container,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    InputAdornment,
    Divider,
    IconButton,
    Tooltip
} from '@mui/material';
import {
    Search as SearchIcon,
    GitHub as GitHubIcon,
    OpenInNew as OpenInNewIcon,
    AccountTree as WorkflowIcon,
    Category as CategoryIcon
} from '@mui/icons-material';
import workflowsData from '../data/workflowsData';

const WorkflowsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [complexityFilter, setComplexityFilter] = useState('');
    const [hoveredCard, setHoveredCard] = useState(null);

    // Get unique categories and complexities for filters
    const categories = [...new Set(workflowsData.map(workflow => workflow.category))];
    const complexities = [...new Set(workflowsData.map(workflow => workflow.complexity))];

    // Filter workflows based on search and filters
    const filteredWorkflows = workflowsData.filter(workflow => {
        const matchesSearch = workflow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            workflow.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            workflow.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = !categoryFilter || workflow.category === categoryFilter;
        const matchesComplexity = !complexityFilter || workflow.complexity === complexityFilter;
        
        return matchesSearch && matchesCategory && matchesComplexity;
    });

    const getComplexityColor = (complexity) => {
        switch (complexity) {
            case 'Beginner': return '#4caf50';
            case 'Intermediate': return '#ff9800';
            case 'Advanced': return '#f44336';
            default: return '#9e9e9e';
        }
    };

    return (
        <Container maxWidth="xl" sx={{ py: 4, mt: 8 }}>
            {/* Header Section */}
            <Box textAlign="center" mb={6}>
                <Typography 
                    variant="h2" 
                    component="h1" 
                    gutterBottom
                    sx={{ 
                        fontWeight: 'bold',
                        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 2
                    }}
                >
                    n8n Workflow Gallery
                </Typography>
                <Typography 
                    variant="h6" 
                    color="textSecondary" 
                    sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}
                >
                    Explore a collection of powerful automation workflows built with n8n. 
                    From simple data processing to complex business automation solutions.
                </Typography>
                
                {/* Statistics */}
                <Grid container spacing={3} sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
                    <Grid item xs={4}>
                        <Box textAlign="center">
                            <Typography variant="h4" color="primary" fontWeight="bold">
                                {workflowsData.length}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Workflows
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box textAlign="center">
                            <Typography variant="h4" color="primary" fontWeight="bold">
                                {categories.length}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Categories
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box textAlign="center">
                            <Typography variant="h4" color="primary" fontWeight="bold">
                                {workflowsData.reduce((sum, wf) => sum + wf.nodes, 0)}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Total Nodes
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Filter Section */}
            <Box mb={4}>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Search workflows, technologies, or descriptions..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon color="action" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>Category</InputLabel>
                            <Select
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                                label="Category"
                            >
                                <MenuItem value="">All Categories</MenuItem>
                                {categories.map(category => (
                                    <MenuItem key={category} value={category}>
                                        {category}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>Complexity</InputLabel>
                            <Select
                                value={complexityFilter}
                                onChange={(e) => setComplexityFilter(e.target.value)}
                                label="Complexity"
                            >
                                <MenuItem value="">All Levels</MenuItem>
                                {complexities.map(complexity => (
                                    <MenuItem key={complexity} value={complexity}>
                                        {complexity}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>

            {/* Results Count */}
            <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
                Showing {filteredWorkflows.length} of {workflowsData.length} workflows
            </Typography>

            {/* Workflows Grid */}
            <Grid container spacing={4}>
                {filteredWorkflows.map((workflow) => (
                    <Grid item xs={12} md={6} lg={4} key={workflow.id}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'all 0.3s ease-in-out',
                                transform: hoveredCard === workflow.id ? 'translateY(-8px)' : 'translateY(0)',
                                boxShadow: hoveredCard === workflow.id ? 6 : 2,
                                '&:hover': {
                                    cursor: 'pointer'
                                }
                            }}
                            onMouseEnter={() => setHoveredCard(workflow.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Workflow Image */}
                            <CardMedia
                                component="div"
                                sx={{
                                    height: 200,
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    position: 'relative'
                                }}
                            >
                                {/* Placeholder for n8n workflow image */}
                                <Box textAlign="center">
                                    <WorkflowIcon sx={{ fontSize: 60, mb: 1 }} />
                                    <Typography variant="body2">
                                        n8n Workflow Screenshot
                                    </Typography>
                                    <Typography variant="caption" display="block">
                                        {workflow.nodes} nodes
                                    </Typography>
                                </Box>
                                
                                {/* Complexity Badge */}
                                <Chip
                                    label={workflow.complexity}
                                    size="small"
                                    sx={{
                                        position: 'absolute',
                                        top: 12,
                                        right: 12,
                                        backgroundColor: getComplexityColor(workflow.complexity),
                                        color: 'white',
                                        fontWeight: 'bold'
                                    }}
                                />
                            </CardMedia>

                            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                {/* Header */}
                                <Box display="flex" alignItems="center" mb={2}>
                                    <CategoryIcon color="action" sx={{ mr: 1 }} />
                                    <Typography variant="body2" color="textSecondary">
                                        {workflow.category}
                                    </Typography>
                                </Box>

                                <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                                    {workflow.name}
                                </Typography>

                                <Typography variant="body2" color="textSecondary" paragraph>
                                    {workflow.description}
                                </Typography>

                                {/* Features */}
                                <Box mb={3}>
                                    <Typography variant="subtitle2" gutterBottom fontWeight="bold">
                                        Key Features:
                                    </Typography>
                                    <Box display="flex" flexWrap="wrap" gap={0.5}>
                                        {workflow.features.slice(0, 3).map((feature, index) => (
                                            <Chip
                                                key={index}
                                                label={feature}
                                                size="small"
                                                variant="outlined"
                                                sx={{ fontSize: '0.7rem' }}
                                            />
                                        ))}
                                        {workflow.features.length > 3 && (
                                            <Chip
                                                label={`+${workflow.features.length - 3} more`}
                                                size="small"
                                                variant="outlined"
                                                sx={{ fontSize: '0.7rem' }}
                                            />
                                        )}
                                    </Box>
                                </Box>

                                {/* Technologies */}
                                <Box mb={3}>
                                    <Typography variant="subtitle2" gutterBottom fontWeight="bold">
                                        Technologies:
                                    </Typography>
                                    <Box display="flex" flexWrap="wrap" gap={0.5}>
                                        {workflow.technologies.slice(0, 4).map((tech, index) => (
                                            <Chip
                                                key={index}
                                                label={tech}
                                                size="small"
                                                sx={{
                                                    backgroundColor: '#e3f2fd',
                                                    color: '#1976d2',
                                                    fontSize: '0.7rem'
                                                }}
                                            />
                                        ))}
                                        {workflow.technologies.length > 4 && (
                                            <Chip
                                                label={`+${workflow.technologies.length - 4}`}
                                                size="small"
                                                sx={{
                                                    backgroundColor: '#f5f5f5',
                                                    fontSize: '0.7rem'
                                                }}
                                            />
                                        )}
                                    </Box>
                                </Box>

                                <Divider sx={{ my: 2 }} />

                                {/* Action Buttons */}
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    {workflow.githubUrl && (
                                        <Tooltip title="View on GitHub">
                                            <IconButton
                                                component="a"
                                                href={workflow.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                size="small"
                                                sx={{ color: '#333' }}
                                            >
                                                <GitHubIcon />
                                            </IconButton>
                                        </Tooltip>
                                    )}
                                    
                                    {workflow.n8nUrl && (
                                        <Button
                                            component="a"
                                            href={workflow.n8nUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variant="outlined"
                                            size="small"
                                            endIcon={<OpenInNewIcon />}
                                            sx={{ ml: 'auto' }}
                                        >
                                            View Workflow
                                        </Button>
                                    )}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* No Results */}
            {filteredWorkflows.length === 0 && (
                <Box textAlign="center" py={8}>
                    <WorkflowIcon sx={{ fontSize: 80, color: 'grey.400', mb: 2 }} />
                    <Typography variant="h6" color="textSecondary" gutterBottom>
                        No workflows found
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Try adjusting your search criteria or filters
                    </Typography>
                </Box>
            )}

            {/* Footer Note */}
            <Box textAlign="center" mt={8} py={4}>
                <Typography variant="body2" color="textSecondary">
                    All workflows are built with n8n - an open-source workflow automation tool.
                    <br />
                    Replace placeholder images with actual screenshots of your n8n workflows.
                </Typography>
            </Box>
        </Container>
    );
};

export default WorkflowsPage;