import React from 'react';
import { Box, Grid, Typography } from '@mui/material'
import { H4, H5 } from '@/Components/UI/Typography/Typography';
import { PRIMARY_COLOUR, SECONDARY_COLOUR } from '@/utils/colours';
import Button from '@/Components/UI/Button/Button';
import ImageComponent from '@/Components/UI/ImageComponent/ImageComponent';

export default function WorkOutCategory() {

    const items = [
        {
            imgUrl: 'Assets/WorkoutCategory/Treadmill.png',
            title: 'red'
        },
        {
            imgUrl: 'Assets/WorkoutCategory/Treadmill.png',
            title: 'blue'
        },
        {
            imgUrl: 'Assets/WorkoutCategory/Treadmill.png',
            title: 'red'
        },
        {
            imgUrl: 'Assets/WorkoutCategory/Treadmill.png',
            title: 'blue'
        },
    ]

    return (


        <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>

            <Grid container xs={11} sm={10} md={11} lg={11} sx={{
                bgcolor: '#ffff',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                border: `3px solid ${PRIMARY_COLOUR}`,
                py: { xs: 2, sm: 2, lg: 4 }
            }}>


                <Grid container md={6} sx={{ bgcolor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>

                    <ImageComponent />

                </Grid>


                <Grid container xs={11} sm={10} md={5} sx={{
                    justifyContent: 'center', alignItems: 'center',
                    bgcolor: 'transparent', mt: 1
                }} >

                    <H4 fontWeight='bold'>Our Workout Categories</H4>

                    <Grid container sx={{
                        justifyContent: { xs: 'space-around', md: 'space-around', lg: 'center' },
                        alignItems: 'center', my: 1,  bgcolor: 'transparent'
                    }}>

                        {items.map(data =>

                            <Grid container xs={4.5} sm={5} md={4.5} lg={5} sx={{  bgcolor: 'transparent', my: 1.5 }}>

                                <Grid container lg={8} sx={{
                                    bgcolor: SECONDARY_COLOUR, justifyContent: 'space-evenly',
                                    alignItems: 'center', display: 'flex',
                                    borderRadius: 1.5,
                                    py: 0.5,
                                    
                                }}>

                                    <Box
                                        component='img'
                                        src='Assets/Icons/Treadmill.png'
                                        sx={{
                                            width: { xs: 30, sm: 45 },
                                            bgcolor: 'transparent'
                                        }}
                                    />

                                    <H5 fontWeight='bold' >Diet</H5>

                                </Grid>

                            </Grid>

                        )}

                        <Box sx={{ mt: { md: 2 } }}>

                            <Button>Subscribe</Button>

                        </Box>

                    </Grid>

                </Grid>

            </Grid>

        </Grid >
        
    )
}
