"use client"


import { H4 } from '@/Components/UI/Typography/Typography'
import { BG_COLOUR } from '@/utils/colours'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react';
import Styles from '../../Styles/inputfield.module.css'
import Button from '@/Components/UI/Button/Button';
import { useRouter } from 'next/navigation';
import Header from '@/Components/UI/Header/Header';
import MobileHeader from '@/Components/UI/Header/MobileHeader';



export default function page() {

    const router = useRouter()

    return (

        <Grid container sx={{
            bgcolor: BG_COLOUR,

        }}>


            <Header />

            <MobileHeader />

            <Grid container sx={{
                mt: { xs: 8, lg: 8 },
                bgcolor: BG_COLOUR
            }}>


                <Grid container lg={7} sx={{}}>


                    <Grid container bgcolor='' sx={{ height: 'fit-content', bgcolor: '' }}>
                        <Box
                            component='img'
                            src='Assets/Icons/Multiply.png'
                            onClick={() => router.back()}
                            sx={{
                                width: { xs: 35, lg: 42 },
                                height: { xs: 35, sm: 42, lg: 42 },
                                m: { lg: 2 },
                                cursor: 'pointer'
                            }}
                        />
                    </Grid>


                    <Grid container lg={6} sx={{
                        justifyContent: 'center', alignItems: 'center', bgcolor: '',
                        position: 'absolute',
                        height: '80%',
                        top: { xs: 100, lg: 120 },

                    }}>

                        <Grid container xs={10} md={6} lg={7.5} bgcolor='' sx={{
                            alignItems: 'center',
                            justifyContent: ''
                        }}>

                            <H4 textAlign='start' fontWeight='bold'>SIGN UP</H4>


                            <Grid container sx={{ mt: { xs: 1.5, lg: 2 } }}>

                                <Typography sx={{
                                    fontWeight: 'bold',
                                    width: '100%'
                                }}>Full name</Typography>

                                <Box sx={{
                                    width: { xs: '100%', lg: '80%' },
                                    height: { xs: 35, md: 37 }, mt: 0.6,
                                    bgcolor: 'transparent'
                                }}>

                                    <input type="text"
                                        name="email"
                                        // laceholder='EMAIL'
                                        className={Styles.field}
                                    />

                                </Box>

                            </Grid>



                            <Grid container sx={{ mt: { xs: 1.5, lg: 2 } }}>

                                <Typography sx={{
                                    fontWeight: 'bold',
                                    width: '100%'
                                }}>Full name</Typography>

                                <Box sx={{
                                    width: { xs: '100%', lg: '80%' },
                                    height: { xs: 35, md: 37 },
                                    mt: 0.6,
                                    bgcolor: 'transparent'
                                }}>

                                    <input type="text"
                                        name="email"
                                        // laceholder='EMAIL'
                                        className={Styles.field}
                                    />

                                </Box>

                            </Grid>



                            <Grid container sx={{ mt: { xs: 1.5, lg: 2 } }}>

                                <Typography sx={{
                                    fontWeight: 'bold',
                                    width: '100%'
                                }}>Full name</Typography>

                                <Box sx={{
                                    width: { xs: '100%', lg: '80%' },
                                    height: { xs: 35, md: 37 },
                                    mt: 0.6,
                                    bgcolor: 'transparent'
                                }}>

                                    <input type="text"
                                        name="email"
                                        // laceholder='EMAIL'
                                        className={Styles.field}
                                    />

                                </Box>

                            </Grid>




                            <Typography sx={{
                                fontSize: 11,
                                fontWeight: 'bold',
                                mt: 0.5,
                                bgcolor: 'transparent'
                            }}>Passwords must be at least 6 characters.</Typography>


                            <Box sx={{
                                width: { xs: '100%', lg: '80%' },
                                mt: 2
                            }}>

                                <Button width='100%' borderRadius='10px'>CONTINUE</Button>

                            </Box>

                            <Box sx={{
                                width: { xs: '100%', lg: '80%' },
                                height: '1px',
                                bgcolor: 'black',
                                mt: { xs: 5, md: 4 }
                            }} />

                            <Grid container>

                                <Typography sx={{
                                    fontSize: 11,
                                    fontWeight: 'bold', mt: { xs: 2, md: 1.5 }
                                }}>Already have an account? 

                                 <span >sign Up</span>
                                
                                </Typography>

                                {/* <Typography sx={{
                                    fontSize: 14,
                                    color: '#268ECA',
                                    cursor: 'pointer',
                                    mt: { xs: 1., lg: 1 },
                                    ml: 1
                                }}>Sign in</Typography> */}


                            </Grid>


























                        </Grid>









                    </Grid>






                </Grid>

                <Grid container md={4.5}
                    component='img'
                    src='Assets/images/couple-training-together-gym 2.png'
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '88vh',
                        ml: 'auto',
                        display: { xs: 'none', sm: 'none', md: 'none',lg:'flex' }
                    }}

                />















            </Grid>

         


        </Grid >





        


    )
}
