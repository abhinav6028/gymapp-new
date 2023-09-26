import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import { H4 } from '../Typography/Typography';
import Styles from '../../../Styles/inputfield.module.css'
import Button from '../Button/Button';

export default function Authentication() {

    const router = useRouter()

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
                top: { xs: 100, lg: 70 },

            }}>

                <Grid container xs={10} md={6} lg={7.5} bgcolor='' sx={{
                    alignItems: 'center',
                    justifyContent: ''
                }}>

                    <H4 textAlign='start' fontWeight='bold'>Authentication required</H4>

                    <Typography sx={{
                        fontSize: 14,
                        fontWeight: 600,
                        my: 1,
                        bgcolor: 'transparent',
                        width: '80%'
                    }}>IN +919567661833 </Typography>

                    <Typography sx={{
                        fontSize: 13,
                        fontWeight: '',
                        mt: 1,
                        bgcolor: 'transparent',
                        width: '70%'
                    }}>We’ve sent a One Time Password (OTP) to the mobile
                        number above. Please enter it to complete verification </Typography>

                    <Grid container sx={{
                        mt: {
                            xs: 2,
                            lg: 3
                        }
                    }}>

                        <Typography sx={{
                            fontWeight: 'bold',
                            width: '100%'
                        }}>Enter OTP</Typography>

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


                    <Box sx={{
                        width: { xs: '100%', lg: '80%' },
                        mt: 3
                    }}>

                        <Button
                            // onClick={() => setCheck(!check)}
                            width='100%' borderRadius='10px'>Continue</Button>

                    </Box>

                    <Grid sx={{
                        width: { xs: '100%', lg: '80%' },
                        mt: 2, bgcolor: ''
                    }}>
                        <Typography sx={{
                            color: "#21A4EE", textAlign: 'center',fontSize:14
                        }}> Resent OTP</Typography>
                    </Grid>

                    <Box sx={{
                        width: { xs: '100%', lg: '80%' },
                        height: '0.6px',
                        bgcolor: 'black',
                        mt: { xs: 5, md: 2 }
                    }} />

                </Grid>

            </Grid>

        </Grid>
    )
}
