import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import {
  BugReport as BugReportIcon,
  HealthAndSafety as HealthIcon,
  Science as ScienceIcon,
  Speed as SpeedIcon,
  CheckCircle as CheckCircleIcon,
  Security as SecurityIcon,
  SupportAgent as SupportIcon
} from '@mui/icons-material';

function Home() {
  const features = [
    {
      icon: <BugReportIcon sx={{ fontSize: 40, color: '#4caf50' }} />,
      title: 'AI-Powered Detection',
      description: 'Advanced deep learning algorithms for accurate plant disease identification'
    },
    {
      icon: <HealthIcon sx={{ fontSize: 40, color: '#4caf50' }} />,
      title: 'Health Assessment',
      description: 'Get detailed analysis of plant health and disease severity'
    },
    {
      icon: <ScienceIcon sx={{ fontSize: 40, color: '#4caf50' }} />,
      title: 'Scientific Accuracy',
      description: 'Trained on over 87,000 images for reliable disease detection'
    }
  ];

  const benefits = [
    'Instant disease detection and diagnosis',
    'Support for 38 different plant diseases',
    'Detailed treatment recommendations',
    'Confidence scores for predictions',
    'User-friendly interface',
    'Mobile-responsive design'
  ];

  const supportedPlants = [
    'Apple', 'Blueberry', 'Cherry', 'Corn', 'Grape', 'Orange',
    'Peach', 'Pepper', 'Potato', 'Raspberry', 'Soybean',
    'Squash', 'Strawberry', 'Tomato'
  ];

  return (
    <Box sx={{ py: 8 }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ mb: 8, mt: 8}} >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 3,
                background: 'linear-gradient(45deg, #4caf50 30%, #81c784 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Agrivision
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                mb: 4,
                lineHeight: 1.8
              }}
            >
              Your AI-powered plant disease detection system. Protect your crops with advanced technology and expert recommendations.
            </Typography>
            <Button
              component={Link}
              to="/detect"
              variant="contained"
              size="large"
              sx={{
                bgcolor: '#4caf50',
                '&:hover': { bgcolor: '#388e3c' },
                borderRadius: '8px',
                textTransform: 'none',
                px: 4,
                py: 1.5,
                mr: 2
              }}
            >
              Start Detection
            </Button>
            <Button
              component={Link}
              to="/about"
              variant="outlined"
              size="large"
              sx={{
                borderColor: '#4caf50',
                color: '#4caf50',
                '&:hover': {
                  borderColor: '#388e3c',
                  bgcolor: 'rgba(76,175,80,0.1)'
                },
                borderRadius: '8px',
                textTransform: 'none',
                px: 4,
                py: 1.5
              }}
            >
              Learn More
            </Button>
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
              <Box
                component="img"
                src="/home_page.jpeg"
                alt="Agrivision Plant Disease Detection"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
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
          Key Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
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
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Benefits Section */}
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
              Why Choose Agrivision?
            </Typography>
            <List>
              {benefits.map((benefit, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: '#4caf50' }} />
                  </ListItemIcon>
                  <ListItemText primary={benefit} />
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
                Supported Plants
              </Typography>
              <Grid container spacing={2}>
                {supportedPlants.map((plant, index) => (
                  <Grid item xs={6} sm={4} key={index}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        background: 'rgba(255,255,255,0.05)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 2,
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(76,175,80,0.1)',
                          borderColor: '#4caf50'
                        }
                      }}
                    >
                      <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                        {plant}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
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
            Ready to Protect Your Plants?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255,255,255,0.8)' }}>
            Start using Agrivision today and keep your plants healthy with AI-powered disease detection.
          </Typography>
          <Button
            component={Link}
            to="/detect"
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#4caf50',
              '&:hover': { bgcolor: '#388e3c' },
              borderRadius: '8px',
              textTransform: 'none',
              px: 4,
              py: 1.5
            }}
          >
            Get Started
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}

export default Home; 