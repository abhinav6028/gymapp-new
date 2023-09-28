"use client"

import Button from '@/Components/UI/Button/Button'
import Dumbel from '@/Components/UI/Dumbel/Dumbel'
import Header from '@/Components/UI/Header/Header'
import MobileHeader from '@/Components/UI/Header/MobileHeader'
import { H5 } from '@/Components/UI/Typography/Typography'
import { BG_COLOUR, PRIMARY_COLOUR } from '@/utils/colours'
import { Grid, Box, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {

    const router = useRouter()

    const items = [
        {
            imageUrl: 'Assets/Icons/Done.png',
            content: 'Ad  Free'
        },
        {
            imageUrl: 'Assets/Icons/Done.png',
            content: 'Unlimited Videos  '
        },
        {
            imageUrl: 'Assets/Icons/Done.png',
            content: 'Can Use All Videos'
        },

    ]

    return (
        <Grid container>
            <Header />

            <MobileHeader />

            <Grid container sx={{ mt: 10 }}>
                <Box
                    component='img'
                    src='Assets/Icons/Multiply.png'
                    onClick={() => router.back()}
                    sx={{
                        height: 30,
                        widows: 50,
                        m: 1,
                        cursor: 'pointer'
                    }}
                />
            </Grid>



            <Grid container sx={{
                justifyContent: 'center',
                alignItems: 'center',
                mt: { xs: 2, sm: 2, md: 2, lg: 2 },
                bgcolor: 'transparent',
                height: { xs: '70vh', sm: '', md: '', lg: '' }
            }}>

                {/* <Grid container md={2} sx={{
                    bgcolor: '',
                    height: '100%', justifyContent: 'center',
                    alignItems: 'end',
                    display: { sm: 'none', md: 'flex' }
                }}>
                    <Dumbel />
                </Grid> */}

                <Grid container xs={10} sm={8} md={5} sx={{
                    // bgcolor: 'white',
                    bgcolor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: { xs: '', sm: '', md: '', lg: 3 },
                    m2: 3
                }}>
                    <Grid container md={8} lg={6} sx={{
                        bgcolor: 'transparent', alignItems: 'center',
                        py: 3
                    }}>

                        <Box
                            component='img'
                            src='Assets/Icons/RecentCelebrity.png'
                            sx={{
                                bgcolor: 'transparent',
                                ml: { xs: 2, sm: 4, md: 0, lg: 0 },
                                width: { xs: 35, sm: 35, md: 40, lg: 45 },
                                height: { xs: 35, sm: 35, md: 40, lg: 45 }
                            }}
                        />

                        <Typography sx={{
                            bgcolor: 'transparent',
                            fontWeight: 'bold',
                            fontSize: { xs: 20, sm: 20, md: 23, lg: 23 },
                            ml: { xs: 2, sm: 3, md: 1.5, lg: 1.5 }
                        }}>Get Your Pro</Typography>



                        <Box
                            component='img'
                            src='Assets/Icons/BenchPress.png'
                            sx={{
                                bgcolor: 'transparent',
                                ml: 'auto',
                                width: { xs: 48, sm: 57, md: 55, lg: 56 },
                                height: { xs: 48, sm: 57, md: 55, lg: 56 },
                                mr: { xs: 4, sm: 10, md: 0, lg: 0 }
                            }}
                        />



















                        <Grid container sx={{
                            mt: 4,
                            bgcolor: 'transparent'
                        }}>

                            {
                                items.map((data: any, index: any) =>

                                    <Grid container sx={{
                                        bgcolor: 'transparent',
                                        my: 0.5,
                                        ml: 0.5,
                                        alignItems: 'center'
                                    }}>

                                        <Box
                                            component='img'
                                            src='Assets/Icons/Done.png'
                                            sx={{
                                                bgcolor: 'transparent',
                                                width: { xs: 22, sm: 25, md: 25, lg: 25 },
                                                height: 25,
                                                ml: { xs: 3, sm: 4, md: 0, lg: 0 }

                                            }}
                                        />

                                        <Box sx={{
                                            width: 'fit-content',
                                            bgcolor: 'transparent',
                                            ml: 3
                                        }} >
                                            <H5 textAlign='start' fontWeight='bold' color="grey" >{data.content}</H5>
                                        </Box>

                                    </Grid>


                                )
                            }


                        </Grid>




                        <Grid container sx={{
                            justifyContent: 'center', alignItems: 'center', bgcolor: 'transparent',
                            mt: { sm: 6.5, md: 2.5, lg: 6 }

                        }}>

                            <Grid container xs={11} sm={11} md={12} sx={{
                                // width: '100%',
                                bgcolor: '#FEF5CD',
                                borderRadius: 1,
                                py: { xs: 2, sm: 2, md: 2, lg: 2 },
                                alignItems: 'center',
                                border: `1.5px solid ${PRIMARY_COLOUR}`,
                                mt: { xs: 4, sm: '', md: '', lg: 0 }
                            }}>

                                <Typography sx={{
                                    bgcolor: 'transparent',
                                    ml: 4,
                                    fontWeight: '550'
                                }}>$99 Per Month</Typography>

                            </Grid>

                        </Grid>

                        <Grid container sx={{
                            justifyContent: 'center', alignItems: 'center', bgcolor: 'transparent',
                            mt: { sm: 4, md: 2.5, lg: 3 }

                        }}>

                            <Grid container xs={11} sm={11} md={12} sx={{
                                // width: '100%',
                                bgcolor: '#FCCB06',
                                borderRadius: 1,
                                py: 1,
                                alignItems: 'center',
                                mt: { xs: 2, sm: '', md: '', lg: 1   }
                            }}>

                                <Button width="100%" borderRadius={10}>SUBSCRIBE NOW</Button>


                            </Grid>

                        </Grid>

                        {/* <Box sx={{
                            width: '100%',
                            my: 6, bgcolor: 'transparent'
                        }}>

                            <Button width="100%" borderRadius={2}>SUBSCRIBE NOW</Button>

                        </Box> */}




                    </Grid>



                </Grid>

                {/* <Grid container md={2} sx={{
                    bgcolor: '',
                    height: '100%', justifyContent: 'center',
                    alignItems: 'center',
                    display: { sm: 'none', md: 'flex' }
                }}>
                    <Dumbel />
                </Grid> */}

            </Grid>


        </Grid >
    )
}
