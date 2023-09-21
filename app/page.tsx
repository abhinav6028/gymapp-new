import HomePage from '@/Components/HomePage/HomePage'
import Header from '@/Components/UI/Header/Header'
import { BG_COLOUR } from '@/utils/colours'
import { Grid } from '@mui/material'
import React from 'react'

const page = () => {

  return (

    <Grid  bgcolor={BG_COLOUR}>

      <Header />


      <HomePage />

    </Grid>

  )
}

export default page
