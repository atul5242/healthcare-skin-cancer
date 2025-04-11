import React from 'react';
import { Avatar, Box, Chip, Container, Divider, Grid, Stack, styled, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import HealingTwoToneIcon from '@mui/icons-material/HealingTwoTone';
import CallIcon from '@mui/icons-material/Call';
import ScienceIcon from '@mui/icons-material/Science';
import BiotechIcon from '@mui/icons-material/Biotech';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import './Footer.css';
import { pink } from '@mui/material/colors';
import { HashLink } from 'react-router-hash-link';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));


const Footer = () => {
    return (
        <footer>
            <Box sx={{
                bgcolor: 'secondary.main',
                color: 'text.secondary',
                py: 3,
                borderTop: '1px solid',
                borderColor: 'divider',
            }}>
                <Container maxWidth="xl">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={4}>
                            <Root>
                                <Divider>
                                    <Chip label="Contact Information" />
                                </Divider>
                            </Root>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1}
                            >
                                <Avatar sx={{ mb: 1, mt: 2, bgcolor: pink[500] }}>
                                    <LocationOnIcon />
                                </Avatar>
                                <Typography>
                                    Medical AI Research Center
                                    <br />
                                    1234 Innovation Drive
                                    <br />
                                    Research Park, CA 90210
                                </Typography>
                            </Stack>

                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1}
                            >
                                <Avatar sx={{ mb: 1, bgcolor: pink[500] }}>
                                    <EmailIcon />
                                </Avatar>
                                <Typography>
                                    support@skincancerdetect.ai
                                </Typography>
                            </Stack>

                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1}
                            >
                                <Avatar sx={{ mb: 1, bgcolor: pink[500] }}>
                                    <CallIcon />
                                </Avatar>
                                <Typography>
                                    +1 (800) 555-0123
                                </Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Root>
                                <Divider>
                                    <Chip label="Our Services" />
                                </Divider>
                            </Root>

                            <Box sx={{ p: 2 }}><HashLink className='text-style' to='/doctors#doctors'>AI Analysis</HashLink></Box>
                            <Box sx={{ p: 2 }}><HashLink className='text-style' to='/services#services'>Detection Services</HashLink></Box>
                            <Box sx={{ p: 2 }}><HashLink className='text-style' to='/appointment#appointment'>Online Screening</HashLink></Box>
                            <Box sx={{ p: 2 }}><HashLink className='text-style' to='/register'>Register For Analysis</HashLink></Box>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Root>
                                <Divider>
                                    <Chip label="Technology Stack" />
                                </Divider>
                            </Root>

                            <Stack direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1}>
                                <Avatar sx={{ mb: 1, mt: 1, bgcolor: pink[500] }}>
                                    <ScienceIcon />
                                </Avatar>
                                <Typography>
                                    Advanced GAN Models
                                </Typography>
                            </Stack>

                            <Stack direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1}>
                                <Avatar sx={{ mb: 1, bgcolor: pink[500] }}>
                                    <BiotechIcon />
                                </Avatar>
                                <Typography>
                                    CNN Architecture
                                </Typography>
                            </Stack>

                            <Stack direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1}>
                                <Avatar sx={{ mb: 1, bgcolor: pink[500] }}>
                                    <PrecisionManufacturingIcon />
                                </Avatar>
                                <Typography>
                                    Machine Learning Pipeline
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Divider sx={{ mb: 2 }} />
                </Container>
            </Box>
        </footer>
    );
};

export default Footer;