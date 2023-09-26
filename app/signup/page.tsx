"use client"
import { H4 } from '@/Components/UI/Typography/Typography'
import { BG_COLOUR } from '@/utils/colours'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/Components/UI/Header/Header';
import MobileHeader from '@/Components/UI/Header/MobileHeader';
import SignUpImage from '@/Components/UI/SignUpImage/SignUpImage';
import SignUpForm from '@/Components/UI/SignUpForm/SignUpForm';
import { log } from 'console';
import Authentication from '@/Components/UI/SignUpForm/Authentication';



export default function page() {

    const router = useRouter()

    const [check, setCheck] = React.useState(true);

    



    return (

        <Grid container sx={{
            bgcolor: BG_COLOUR,

        }}>


            <Header />

            <MobileHeader />

            

            {/* <Grid container bgcolor='' sx={{ height: 'fit-content', bgcolor: '' }}>
                <Box
                    component='img'
                    src='Assets/Icons/Multiply.png'
                    onClick={() => router.back()}
                    sx={{
                        width: { xs: 35, lg: 42 },
                        height: { xs: 35, sm: 42, lg: 42 },
                        mt: { lg: 10 },
                        cursor: 'pointer'
                    }}
                />
            </Grid> */}


            <Grid container sx={{
                mt: { xs: 8, lg: 8 },
                bgcolor: BG_COLOUR
            }}>

                {
                    check ? <SignUpForm check={check} setCheck={setCheck} /> : <Authentication />
                }

                <SignUpImage />



            </Grid>

        </Grid >

    )
}
