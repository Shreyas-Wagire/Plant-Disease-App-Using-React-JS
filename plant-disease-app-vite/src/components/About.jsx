import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Card,
  CardContent,
  CardMedia,
  Chip
} from '@mui/material';
import {
  Science as ScienceIcon,
  BugReport as BugReportIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  CheckCircle as CheckCircleIcon,
  Group as GroupIcon,
  Code as CodeIcon,
  Storage as StorageIcon,
  Psychology as PsychologyIcon
} from '@mui/icons-material';

function About() {
  const technologies = [
    {
      name: 'Deep Learning',
      description: 'Advanced neural networks trained on over 87,000 plant disease images',
      icon: <PsychologyIcon sx={{ fontSize: 40, color: '#4caf50' }} />
    },
    {
      name: 'Computer Vision',
      description: 'State-of-the-art image processing and analysis techniques',
      icon: <ScienceIcon sx={{ fontSize: 40, color: '#4caf50' }} />
    },
    {
      name: 'TensorFlow',
      description: 'Powered by Google\'s TensorFlow framework for efficient model inference',
      icon: <CodeIcon sx={{ fontSize: 40, color: '#4caf50' }} />
    },
    {
      name: 'Flask Backend',
      description: 'Robust Python backend for reliable API endpoints and model serving',
      icon: <StorageIcon sx={{ fontSize: 40, color: '#4caf50' }} />
    }
  ];

  const features = [
    'Real-time disease detection and classification',
    'High accuracy rate across multiple plant species',
    'Detailed treatment recommendations',
    'User-friendly interface',
    'Mobile-responsive design',
    'Secure image processing',
    'Regular model updates'
  ];

  const supportedPlants = [
    { name: 'Apple', diseases: ['Apple Scab', 'Black Rot', 'Cedar Apple Rust'] },
    { name: 'Corn', diseases: ['Cercospora Leaf Spot', 'Common Rust', 'Northern Leaf Blight'] },
    { name: 'Potato', diseases: ['Early Blight', 'Late Blight'] },
    { name: 'Tomato', diseases: ['Early Blight', 'Late Blight', 'Leaf Mold', 'Septoria Leaf Spot'] },
    { name: 'Grape', diseases: ['Black Rot', 'Esca', 'Leaf Blight'] },
    { name: 'Strawberry', diseases: ['Leaf Scorch'] },
    { name: 'Peach', diseases: ['Bacterial Spot'] },
    { name: 'Cherry', diseases: ['Powdery Mildew'] }
  ];

  return (
    <Box sx={{ py: 8 }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 3,
            textAlign: 'center',
            background: 'linear-gradient(45deg, #4caf50 30%, #81c784 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          About Agrivision
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.8)',
            mb: 6,
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          Empowering farmers and gardeners with AI-powered plant disease detection technology
        </Typography>
      </Container>

      {/* Technology Stack */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 6,
            textAlign: 'center',
            background: 'linear-gradient(45deg, #4caf50 30%, #81c784 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Our Technology
        </Typography>
        <Grid container spacing={4}>
          {technologies.map((tech, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Box sx={{ mb: 2 }}>{tech.icon}</Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  {tech.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  {tech.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 4,
                background: 'linear-gradient(45deg, #4caf50 30%, #81c784 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Key Features
            </Typography>
            <List>
              {features.map((feature, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: '#4caf50' }} />
                  </ListItemIcon>
                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                border: '1px solid rgba(255,255,255,0.1)',
                height: '100%'
              }}
            >
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                Supported Plants & Diseases
              </Typography>
              <Grid container spacing={2}>
                {supportedPlants.map((plant, index) => (
                  <Grid item xs={12} key={index}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        background: 'rgba(255,255,255,0.05)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 2,
                        border: '1px solid rgba(255,255,255,0.1)'
                      }}
                    >
                      <Typography variant="h6" sx={{ mb: 1, color: '#4caf50' }}>
                        {plant.name}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {plant.diseases.map((disease, idx) => (
                          <Chip
                            key={idx}
                            label={disease}
                            size="small"
                            sx={{
                              bgcolor: 'rgba(76,175,80,0.1)',
                              color: '#4caf50',
                              '&:hover': {
                                bgcolor: 'rgba(76,175,80,0.2)'
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Mission Statement */}
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            p: 6,
            background: 'linear-gradient(45deg, rgba(76,175,80,0.1) 30%, rgba(129,199,132,0.1) 90%)',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
            border: '1px solid rgba(76,175,80,0.2)',
            textAlign: 'center'
          }}
        >
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
            Our Mission
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255,255,255,0.8)', maxWidth: '800px', mx: 'auto' }}>
            At Agrivision, we're committed to revolutionizing plant disease detection through cutting-edge AI technology.
            Our goal is to empower farmers, gardeners, and agricultural professionals with accurate, instant disease
            diagnosis and treatment recommendations, helping to protect crops and ensure food security.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default About; 