"use client"

import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import router from 'next/router'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function MobileHeader() {
  const [menu, setMenu] = React.useState(false)

  const router = useRouter();

  const navbarItems = [
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


  const MenuBar = () => {

    setMenu(!menu)

  }

  return (

    <Grid container sx={{
      display: { xs: "block", md: "none" },
      bgcolor: 'red'
    }}>

      <Box sx={{
        width: "100%", display: 'flex',
        justifyContent: "center", alignItems: "center",
        py: 1,
        position: "fixed",
        zIndex: "110", top: "0", left: "0",
        bgcolor: "#FEF0E5"
        // bgcolor: { MAIN_COLOR }
      }} >

        <Box position="fixed" left="0" sx={{
          bgcolor: "#FEF0E5"
        }}>

          {menu ? <CloseIcon sx={{ ml: 2, color: "#513328", fontSize: { xs: '2rem' } }} onClick={() => setMenu(!menu)} /> :
            <MenuIcon sx={{ ml: 2, color: "#513328", fontSize: "2rem" }} onClick={() => setMenu(!menu)} />}

        </Box>

        <Box

          onClick={() => router.push('/')}
          style={{ cursor: 'pointer' }}
          component="img"
          sx={{
            bgcolor: "#FEF0E5",
            pt: 1,
            pb: 1,
            height: 50,
            width: 100,
            maxHeight: { xs: 30, sm: 40 },
            maxWidth: { xs: 80, md: 90 },
          }}
          alt="The house from the offer."
          src="/assets/logo/logo.png"
        />

      </Box>

      <Box sx={{
        transition: "0.5s",
        width: "100%", height: "fit-content",
        position: "fixed", zIndex: "100", left: "0%", top: menu ? "50px" : "-40%", bgcolor: "#FEF0E5"
      }}>

        {
          navbarItems.map((data: any, index: any) =>

            <Box key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, bgcolor: "#FEF0E5" }}>

              <Box onClick={MenuBar} sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>

                <Typography sx={{ color: "black", fontWeight: '550', cursor: 'pointer' }} onClick={() => router.push(data.path)}>{data.name}</Typography>

              </Box>

            </Box>
          )}

      </Box>

    </Grid >
  )
}