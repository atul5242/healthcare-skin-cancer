import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    Typography,
    Paper,
    TextField,
    Grid,
    CircularProgress
} from '@mui/material';
import { useHistory } from 'react-router-dom';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const OnlineScreening = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        
        // In a real application, you would upload the file to your server here
        // For demo purposes, we'll just simulate a delay and redirect to Streamlit
        setTimeout(() => {
            // Replace this URL with your actual Streamlit application URL
            window.location.href = 'http://localhost:8501';
        }, 2000);
    };

    return (
        <Container maxWidth="md" sx={{ mt: 12, mb: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
                    Skin Cancer Screening
                </Typography>
                <Typography variant="h6" gutterBottom align="center" color="text.secondary">
                    Upload your skin image for AI-powered analysis
                </Typography>
                
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Paper
                                variant="outlined"
                                sx={{
                                    p: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    bgcolor: 'background.default'
                                }}
                                onClick={() => document.getElementById('image-upload').click()}
                            >
                                <CloudUploadIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
                                <Typography variant="body1" align="center">
                                    {file ? file.name : 'Click to upload or drag and drop'}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" align="center">
                                    Supported formats: PNG, JPG, JPEG
                                </Typography>
                                <input
                                    id="image-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }}
                                />
                            </Paper>
                        </Grid>
                        
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Additional Notes"
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                size="large"
                                type="submit"
                                disabled={!file || loading}
                                startIcon={loading ? <CircularProgress size={20} /> : <AnalyticsIcon />}
                            >
                                {loading ? 'Processing...' : 'Analyze Image'}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ mt: 4 }}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        This screening tool uses advanced AI models including GANs and CNNs to analyze skin lesions.
                        The analysis will be performed in our secure Streamlit application.
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
};

export default OnlineScreening; 