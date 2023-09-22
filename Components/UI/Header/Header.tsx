"use client"

import React from 'react';
import { Grid, Box } from '@mui/material'
import Button from '../Button/Button';
import { H5 } from '../Typography/Typography';
import { BG_COLOUR } from '@/utils/colours';
import { useRouter } from 'next/navigation';


export default function Header() {

    const router = useRouter()

    const headrDaata = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Videos',
            path: '/videos'
        },
        {
            name: 'Testimonials',
            path: '/testimonials'
        },
        {
            name: 'Contact Us',
            path: '/testimonials'
        }
    ]

    // const handleClick = (e) => {
    //     console.log('Free pizza!');

    // }

    return (
        <Grid container sx={{
            justifyContent: 'end', py: 1.5, alignItems: 'center',
            bgcolor:BG_COLOUR,
            // bgcolor: { xs: 'red', sm: 'blue', md: 'green', lg: 'pink' },
            zIndex: 1000, position: 'fixed'
        }}>

           

            {
                headrDaata.map((data, index) =>

                    <Box
                        onClick={() => router.push(data.path)}
                        sx={{ mr: { xs: 1.5, md: 2.8 } }}>

                        <H5 cursor='pointer'>{data.name}</H5>

                    </Box>

                )
            }

            <Button mr={5}>Sign Up</Button>

        </Grid>
    )
}
