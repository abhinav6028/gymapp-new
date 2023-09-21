"use client"

import React from 'react';
import { Grid, Box } from '@mui/material'
import Button from '../Button/Button';
import { H5 } from '../Typography/Typography';
import { BG_COLOUR } from '@/utils/colours';


export default function Header() {

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
        }
    ]

    return (
        <Grid container sx={{
            justifyContent: 'end', py: 1.5, alignItems: 'center',bgcolor:BG_COLOUR,
            // bgcolor: { xs: 'red', sm: 'blue', md: 'green', lg: 'pink' },
            zIndex: 1000, position: 'fixed'
        }}>

            {
                headrDaata.map((data, index) =>

                    <Box sx={{ mr: { xs: 1.5, md: 2.5 } }}>
                        <H5 cursor='pointer'>{data.name}</H5>
                    </Box>

                )
            }

            <Button mr={5}>Contact Us</Button>

        </Grid>
    )
}
