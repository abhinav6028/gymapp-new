import React from 'react';
import { Box, Grid } from '@mui/material'
import { H5, H4 } from '@/Components/UI/Typography/Typography';
import { PRIMARY_COLOUR } from '@/utils/colours';
import Button from '@/Components/UI/Button/Button';

export default function VideoSection() {

    const fitnesContents = [
        {
            heading: 'For Beginner',
            imgUrl: 'Assets/Home/beginner.png',
            video: ''
        },
        {
            heading: 'For Intermediate',
            imgUrl: 'Assets/Home/intermediet.png',
            video: ''
        },
        {
            heading: 'For Experts',
            imgUrl: 'Assets/Home/expert.png',
            video: ''
        },

    ]

    return (
        <Grid container sx={{
            justifyContent: 'center', alignItems: 'center',
            my: { xs: 2, sm: 3, md: 4 }
        }}>

            <H4 fontWeight='bold'>Build Your Body With Us</H4>

            <H5 >We have 42 days  workout program for every section</H5>

            <Grid container justifyContent="center" bgcolor="" alignItems="center" sx={{ position: 'relative' }}>

                <Grid container
                    sx={{
                        display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }
                    }}
                >

                    <Grid bgcolor={PRIMARY_COLOUR} sx={{

                        height: 90,
                        width: '100%',
                        position: 'absolute', left: 0, right: 0, margin: 'auto', top: '30%',
                        // transform: 'translateY(-50%)',
                        transform: ' rotate(-5deg)',
                    }} />

                    <Grid bgcolor={PRIMARY_COLOUR} sx={{

                        height: 5,
                        width: '100%',
                        position: 'absolute', left: 0, right: 0, margin: 'auto', top: '55%',
                        // transform: 'translateY(-50%)',
                        transform: ' rotate(-5deg)',
                    }} />

                </Grid>



                <Grid container justifyContent='space-around' lg={10} md={12} zIndex='2' sx={{
                    mt: 2, bgcolor: ''
                }} >

                    {
                        fitnesContents.map((data, index) =>

                            <Grid container justifyContent='space-around'

                                xs={12} sm={4} md={4} sx={{
                                    py: { xs: 2, md: 4 },
                                    // bgcolor: { xs: 'red', sm: 'blue', md: 'green' }
                                }}>

                                <Box
                                    sx={{
                                        width: { xs: 270, sm: 230, md: 270, lg: 300 },
                                        height: { xs: 340, sm: 320, md: 340, lg: 370 },
                                        borderRadius: 5,
                                        backgroundSize: 'cover', opacity: 1.8,
                                        backgroundImage: `url(${data.imgUrl})`,
                                        cursor: 'pointer',
                                        '&:hover': {
                                            transform: 'scale(1.06)',
                                            transition: '0.5s'
                                        },
                                    }}
                                >

                                    <Grid container sx={{
                                        height: '100%',
                                        backgroundImage: `url('Assets/Home/darkrectangle.png')`, borderRadius: 5,
                                        justifyContent: 'center',
                                        alignItems: 'flex-start', position: "relative"
                                    }}>

                                        <H5 mt={1.5} mr={18} fontWeight='bold' width='100%' color="white"  >{data.heading}</H5>

                                        <Box
                                            component='img'
                                            src='Assets/Icons/videoicon.png'
                                            sx={{
                                                width: 65, height: 65,
                                                cursor: 'pointer', position: "absolute",
                                                top: "50%",
                                                left: " 50%",
                                                transform: "translate(-50%, -50%)"

                                            }}
                                        />

                                    </Grid>

                                </Box>

                            </Grid>

                        )
                    }

                    <Box sx={{ my: 1 }}>
                        <Button>Subscribe</Button>
                    </Box>

                </Grid>

            </Grid>


        </Grid>

        // </Grid >
    )
}
