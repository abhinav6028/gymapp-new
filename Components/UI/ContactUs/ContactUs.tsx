import React from 'react';
import { Box, Grid, Typography } from '@mui/material'
import Button from '../Button/Button';
import { H4, H5 } from '../Typography/Typography';
import Styles from '../../../Styles/contactus.module.css'


export default function ContactUs() {
    return (
        <Grid container sx={{
            mt: { xs: 0.5, lg: 2 },
            alignItems: 'start'

        }}>

            <Grid container md={5} sx={{ display: { xs: 'none', md: 'flex' } }}>

                <Box
                    component='img'
                    src='Assets/Home/contact-us.png'
                    sx={{
                        width: "100%",
                        height: { lg: 700 },

                    }}
                />

            </Grid>




            <Grid container md={7} sx={{
                justifyContent: 'center', alignItems: 'center',
                // mt: 10
            }}>

                <Box sx={{
                    width: '80%',
                    bgcolor: '  ', height: 'fit-content', display: 'flex',
                    mt: { xs: 1 }
                }}>

                    <Grid container sx={{ bgcolor: '' }}>

                        <Grid container lg={7}>

                            <H4 textAlign='start' fontWeight='bold'>CONTACT US</H4>
                            <H5 textAlign='start'>Feel free to connect with us</H5>

                        </Grid>


                        <Grid container lg={4} sx={{ bgcolor: '' }}>
                            <Box
                                component='img'
                                src='Assets/Icons/Dumbbell (1).png'
                                sx={{
                                    width: { xs: 60, sm: 100 },
                                    height: { xs: 60, sm: 100 },
                                    ml: 'auto',
                                    mt: { xs: -10, sm: 0, md: 0, lg: 0 }
                                }}
                            />
                        </Grid>


                        <Grid container sx={{
                            display: 'flex',
                            mt: { xs: 1, lg: 4 },
                            justifyContent: { xs: 'center', sm: 'center', md: 'start', lg: 'start' }
                        }}>
                            <H5 width='30%' textAlign='start' fontWeight='bold'>Email</H5>
                            <H5 width='40%' textAlign='start' fontWeight='bold'>Email</H5>
                        </Grid>

                        <Grid container>

                            <Typography sx={{
                                fontSize: { xs: 20, sm: 20, md: 25 },
                                mt: { xs: 2, lg: 4 }
                            }}>
                                Message for enquries
                            </Typography>

                        </Grid>




                        <Grid container xs={10} sm={9} md={10} lg={9} sx={{
                            justifyContent: 'center',
                            mt: { xs: 1 },
                        }}>



                            {
                                [1, 2].map((data, index) =>

                                    <Box sx={{
                                        // width: { xs: '80%', sm: '65%', lg: '100%' },
                                        width: '100%',
                                        height: { xs: 35, sm: 60, lg: 50 },
                                        my: { xs: 1.3, sm: 2, md: 2 },
                                        bgcolor: 'red'
                                    }}>

                                        <input type="text"
                                            name="email"
                                            placeholder='EMAIL'
                                            className={Styles.input_lable}
                                        />

                                    </Box>

                                )
                            }

                            <Box sx={{
                                // width: { xs: '80%', sm: '65%', lg: '100%' },
                                width: '100%',
                                height: { xs: 100, sm: 110, lg: 130 },
                                my: { xs: 1.3, sm: 2, md: 2 }
                            }}>

                                <textarea

                                    id="w3review"
                                    name="w3review"
                                    rows={4}
                                    cols={50}
                                    className={Styles.input_lable}
                                    placeholder='MESSAGE'

                                />

                            </Box>

                            <Box sx={{ width: '100%', my: 2 }}>

                                <Button width='100%'>SEND</Button>

                            </Box>



                        </Grid>


















                    </Grid>



                </Box>


                <Grid container bgcolor='' xs={10} sm={9} md={10} lg={9} sx={{
                    mb: 20
                }}>

                    {/* {
                        [1, 2].map((data, index) =>

                            <Box sx={{
                                // width: { xs: '80%', sm: '65%', lg: '100%' },
                                width: '100%',
                                height: { xs: 35, sm: 60, lg: 50 },
                                my: { xs: 1.8, sm: 2, md: 2 }
                            }}>

                                <input type="text"
                                    name="email"
                                    placeholder='EMAIL'
                                    className={Styles.input_lable}
                                />

                            </Box>

                        )
                    }

                    <Box sx={{
                        // width: { xs: '80%', sm: '65%', lg: '100%' },
                        width: '100%',
                        height: { xs: 100, sm: 110, lg: 130 },
                        my: { xs: 1.8, sm: 2, md: 0, lg: 2 }
                    }}>

                        <textarea

                            id="w3review"
                            name="w3review"
                            rows={4}
                            cols={50}
                            className={Styles.input_lable}
                            placeholder='MESSAGE'

                        />

                    </Box>

                    <Box sx={{ width: '100%', my: 2 }}>

                        <Button width='100%'>SEND</Button>

                    </Box> */}

                </Grid>

            </Grid>




        </Grid >
    )
}
