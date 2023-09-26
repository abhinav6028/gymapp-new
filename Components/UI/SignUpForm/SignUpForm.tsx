import { Grid, Box, Typography } from '@mui/material'
import router from 'next/router'
import React from 'react'
import { H4 } from '../Typography/Typography';
import Styles from '../../../Styles/inputfield.module.css'
import Button from '../Button/Button'

export default function SignUpForm(props: any) {

    const { setCheck, check } = props;

    return (
        <Grid container lg={7} sx={{}}>

            <Grid container bgcolor='' sx={{ height: 'fit-content', bgcolor: '' }}>
                <Box
                    component='img'
                    src='Assets/Icons/Multiply.png'
                    onClick={() => router.back()}
                    sx={{
                        width: { xs: 35, lg: 42 },
                        height: { xs: 35, sm: 42, lg: 42 },
                        mt: { lg: 50 },
                        cursor: 'pointer'
                    }}
                />
            </Grid>



            <Grid container lg={6} sx={{
                justifyContent: 'center', alignItems: 'center', bgcolor: '',
                position: 'absolute',
                height: '80%',
                top: { xs: 100, lg: 90 },

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

                        <Button
                            onClick={() => setCheck(!check)}    
                            width='100%' borderRadius='10px'>CONTINUE</Button>

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

                    </Grid>

                </Grid>

            </Grid>

        </Grid>
    )
}
