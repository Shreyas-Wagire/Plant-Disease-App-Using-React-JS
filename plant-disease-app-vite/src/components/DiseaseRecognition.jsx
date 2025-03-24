import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  CircularProgress,
  Alert,
  AlertTitle,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import BugReportIcon from '@mui/icons-material/BugReport';
import HealthIcon from '@mui/icons-material/HealthAndSafety';
import ScienceIcon from '@mui/icons-material/Science';
import ImageIcon from '@mui/icons-material/Image';

function DiseaseRecognition() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError(null);
      setPrediction(null);
    }
  };

  const handleSubmit = async () => {
    if (!selectedImage) {
      setError('Please select an image first');
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', selectedImage);

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get prediction');
      }

      const result = await response.json();
      setPrediction({
        class: result.class,
        confidence: result.confidence,
        treatment: getTreatmentRecommendation(result.class)
      });
    } catch (err) {
      setError(err.message || 'Error getting prediction');
    } finally {
      setLoading(false);
    }
  };

  const getTreatmentRecommendation = (diseaseClass) => {
    const treatments = {
      "Apple - Apple Scab": {
        immediate: "Remove infected leaves and fruits immediately",
        preventive: "Apply fungicide sprays during early spring",
        cultural: "Improve air circulation and reduce leaf wetness"
      },
      "Apple - Black Rot": {
        immediate: "Prune infected branches and remove mummified fruits",
        preventive: "Apply fungicide before bloom",
        cultural: "Maintain proper spacing and remove fallen debris"
      },
      "Apple - Cedar Apple Rust": {
        immediate: "Remove infected leaves and apply fungicide",
        preventive: "Plant resistant varieties and remove nearby junipers",
        cultural: "Improve air circulation and reduce leaf wetness"
      },
      "Corn - Cercospora Leaf Spot": {
        immediate: "Remove infected leaves and apply fungicide",
        preventive: "Use disease-free seeds and rotate crops",
        cultural: "Maintain proper spacing and reduce leaf wetness"
      },
      "Corn - Common Rust": {
        immediate: "Apply fungicide at first sign of infection",
        preventive: "Plant resistant varieties and use disease-free seeds",
        cultural: "Maintain proper spacing and reduce leaf wetness"
      },
      "Corn - Northern Leaf Blight": {
        immediate: "Remove infected leaves and apply fungicide",
        preventive: "Use disease-free seeds and rotate crops",
        cultural: "Maintain proper spacing and reduce leaf wetness"
      },
      "Potato - Early Blight": {
        immediate: "Remove infected leaves and apply fungicide",
        preventive: "Use disease-free seed potatoes and rotate crops",
        cultural: "Maintain proper spacing and reduce leaf wetness"
      },
      "Potato - Late Blight": {
        immediate: "Remove infected plants and apply fungicide",
        preventive: "Use disease-free seed potatoes and rotate crops",
        cultural: "Maintain proper spacing and reduce leaf wetness"
      },
      "Tomato - Early Blight": {
        immediate: "Remove infected leaves and apply fungicide",
        preventive: "Use disease-free seeds and rotate crops",
        cultural: "Maintain proper spacing and reduce leaf wetness"
      },
      "Tomato - Late Blight": {
        immediate: "Remove infected plants and apply fungicide",
        preventive: "Use disease-free seeds and rotate crops",
        cultural: "Maintain proper spacing and reduce leaf wetness"
      },
      "Tomato - Leaf Mold": {
        immediate: "Remove infected leaves and apply fungicide",
        preventive: "Use disease-free seeds and rotate crops",
        cultural: "Maintain proper spacing and reduce leaf wetness"
      },
      "Tomato - Septoria Leaf Spot": {
        immediate: "Remove infected leaves and apply fungicide",
        preventive: "Use disease-free seeds and rotate crops",
        cultural: "Maintain proper spacing and reduce leaf wetness"
      },
      "Grape - Black Rot": {
        immediate: "Remove infected fruits and apply fungicide",
        preventive: "Use disease-free planting material and rotate crops",
        cultural: "Maintain proper spacing and reduce leaf wetness"
      },
      "Grape - Esca": {
        immediate: "Remove infected vines and apply fungicide",
        preventive: "Use disease-free planting material and rotate crops",
        cultural: "Maintain proper spacing and reduce leaf wetness"
      },
      "Grape - Leaf Blight": {
        immediate: "Remove infected leaves and apply fungicide",
        preventive: "Use disease-free planting material and rotate crops",
        cultural: "Maintain proper spacing and reduce leaf wetness"
      },
      "Strawberry - Leaf Scorch": {
        immediate: "Remove infected leaves and apply fungicide",
        preventive: "Use disease-free plants and rotate crops",
        cultural: "Maintain proper spacing and reduce leaf wetness"
      },
      "Peach - Bacterial Spot": {
        immediate: "Remove infected leaves and apply bactericide",
        preventive: "Use disease-free plants and rotate crops",
        cultural: "Maintain proper spacing and reduce leaf wetness"
      },
      "Cherry - Powdery Mildew": {
        immediate: "Remove infected leaves and apply fungicide",
        preventive: "Use disease-free plants and rotate crops",
        cultural: "Maintain proper spacing and reduce leaf wetness"
      }
    };

    return treatments[diseaseClass] || {
      immediate: "Remove infected parts and apply appropriate treatment",
      preventive: "Use disease-free planting material and rotate crops",
      cultural: "Maintain proper spacing and reduce leaf wetness"
    };
  };

  return (
    <Box sx={{ py: 8, mt: 4 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 3,
            textAlign: 'center',
            background: 'linear-gradient(45deg, #4caf50 30%, #81c784 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Disease Recognition
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.8)',
            mb: 6,
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '1rem', sm: '1.25rem' }
          }}
        >
          Upload a plant image to detect diseases and get treatment recommendations
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                border: '1px solid rgba(255,255,255,0.1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="image-upload"
                type="file"
                onChange={handleImageSelect}
              />
              <label htmlFor="image-upload">
                <Button
                  component="span"
                  variant="outlined"
                  startIcon={<CloudUploadIcon />}
                  sx={{
                    borderColor: '#4caf50',
                    color: '#4caf50',
                    '&:hover': {
                      borderColor: '#388e3c',
                      backgroundColor: 'rgba(76,175,80,0.1)'
                    },
                    mb: 3,
                    py: 2,
                    px: 4
                  }}
                >
                  Upload Image
                </Button>
              </label>
              {previewUrl && (
                <Box
                  component="img"
                  src={previewUrl}
                  alt="Preview"
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '300px',
                    objectFit: 'contain',
                    borderRadius: 2,
                    mb: 3
                  }}
                />
              )}
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={!selectedImage || loading}
                startIcon={loading ? <CircularProgress size={20} /> : <ScienceIcon />}
                sx={{
                  bgcolor: '#4caf50',
                  '&:hover': { bgcolor: '#388e3c' },
                  borderRadius: '8px',
                  textTransform: 'none',
                  px: 4,
                  py: 1.5,
                  width: { xs: '100%', sm: 'auto' }
                }}
              >
                {loading ? 'Analyzing...' : 'Analyze Image'}
              </Button>
            </Paper>
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
              {error ? (
                <Typography color="error" sx={{ mb: 2 }}>
                  {error}
                </Typography>
              ) : prediction ? (
                <Box>
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                    Detection Results
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, color: '#4caf50' }}>
                    {prediction.class}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255,255,255,0.8)' }}>
                    Confidence: {(prediction.confidence * 100).toFixed(2)}%
                  </Typography>

                  <Typography variant="h6" sx={{ mb: 2, color: '#4caf50' }}>
                    Recommended Treatment
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
                      Immediate Actions:
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      {prediction.treatment.immediate}
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
                      Preventive Measures:
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      {prediction.treatment.preventive}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
                      Cultural Practices:
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      {prediction.treatment.cultural}
                    </Typography>
                  </Box>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    minHeight: '300px'
                  }}
                >
                  <ImageIcon sx={{ fontSize: 60, color: 'rgba(255,255,255,0.2)', mb: 2 }} />
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                    Upload an image to see detection results
                  </Typography>
                </Box>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default DiseaseRecognition; 