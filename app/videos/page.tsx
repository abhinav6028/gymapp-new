"use client"

import Header from '@/Components/UI/Header/Header'
import { Box, Grid, InputAdornment, OutlinedInput, TextField } from '@mui/material'
import React from 'react'
import Styles from '../../Styles/search.module.css'
import { BG_COLOUR } from '@/utils/colours'
import { H4, H5 } from '@/Components/UI/Typography/Typography'
import Button from '@/Components/UI/Button/Button'
import ImageComponent from '@/Components/UI/ImageComponent/ImageComponent'
import MobileHeader from '@/Components/UI/Header/MobileHeader';
// import { Styles } from '../../Styles/scrolling.module.css'

export default function page() {

    const buttons = [
        {
            btnName: 'Pre-Beginner'
        },
        {
            btnName: 'Beginner'
        },
        {
            btnName: 'intermediate'
        },
        {
            btnName: 'Expert'
        }
    ]

    return (
        <Grid container sx={{ bgcolor: BG_COLOUR, justifyContent: 'center' }}>

            <Header />

            <MobileHeader />

            <Grid xs={10} sm={10} lg={11} container sx={{
                justifyContent: 'center', alignItems: 'center', bgcolor: '',
                mt: 12,
                height: 46
            }}>


                <Box sx={{
                    width: '100%',
                    height: '100%',
                    bgcolor: '',
                    mt: 1,

                }}>
                    <input type="text" className={Styles.serach_field}
                        placeholder='Search'
                    />
                </Box>

            </Grid>

            <Grid container xs={11} lg={11} bgcolor="" sx={{ my: 4, justifyContent: 'space-around' }}>

                {
                    buttons.map((data: any, index: any) =>

                        <Button key={index}>{data.btnName}</Button>
                    )
                }

            </Grid>


            {
                [1, 2, 3].map((data, index) =>

                    <Grid container justifyContent='center' alignItems='center'>

                        <Grid container lg={11} bgcolor='' sx={{ my: { xs: 1, lg: 2 } }}>

                            <Grid container lg={6} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                <ImageComponent />
                            </Grid>

                            <Grid container lg={6} bgcolor='' sx={{
                                // justifyContent: 'center',
                                // alignItems: 'center'
                            }}>

                                <Box sx={{
                                    my: { xs: 3, lg: 3 },
                                    width: '100%',
                                }}>
                                    <H4 fontWeight="bold" textAlign='start'>WORKOUT (Day 1)</H4>
                                </Box>


                                <Box sx={{

                                    width: '100%',
                                    // textAlign: 'center',
                                    // bgcolor: 'red'
                                }}>

                                    <Grid sx={{
                                        // justifyContent: 'center',
                                        mt: { xs: -2, lg: -13 },
                                        mx: { xs: 2.5, sm: 2, md: 2.5, lg: '' }
                                    }}>

                                        <H5 textAlign='start' width='100%'>

                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting ustry. Lorem Ipsum has been the industry s
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a type
                                            specimen book. It has survived not only five centuries, but
                                            also the leap into electronic typesetting, remaining essentially
                                            unchanged

                                        </H5>


                                    </Grid>

                                </Box>

                            </Grid>

                        </Grid>

                        <Box sx={{
                            bgcolor: '#000000',
                            width: { xs: '92%', sm: '92%', md: '95%', lg: '96%' },
                            height: '0.8px',
                            my: 3, mt: 3
                        }} />
                    </Grid>

                )
            }



        </Grid>
    )
}
