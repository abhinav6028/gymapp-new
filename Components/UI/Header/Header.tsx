"use client"

import React from 'react';
import { Grid, Box } from '@mui/material'
import Button from '../Button/Button';
import { H5 } from '../Typography/Typography';
import { BG_COLOUR } from '@/utils/colours';
import { useRouter } from 'next/navigation';
import { Styles } from '../../../Styles/headerr.module.css'


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

    return (
        <Grid container sx={{
            justifyContent: 'end', py: 1.5, alignItems: 'center',
            // bgcolor: 'red',
            // bgcolor: { xs: 'red', sm: 'blue', md: 'green', lg: 'pink' },
            zIndex: 100, position: 'fixed',
            display: { xs: 'none', sm: 'none', md: 'flex' }
        }}>

            {
                headrDaata.map((data, index) =>

                    <Box
                        onClick={() => router.push(data.path)}
                        sx={{ mr: { xs: 1.5, md: 2.8 } }}>

                        <H5 cursor='pointer' fontFamily='Oxygen' letterSpacing={1.2}>{data.name}</H5>

                    </Box>

                )
            }

            <Button onClick={() => router.push('/signup')} mr={3}>Sign Up</Button>

            <Button mr={5} onClick={() => router.push('/login')}>Log In</Button>

        </Grid >
    )
}
