import { Grid } from '@mui/material'
import React from 'react'

export default function MobileHeader() {
  return (
    <Grid container sx={{
      bgcolor: 'red',
      display: { xs: 'flex', sm: 'flex', md: 'none' }
    }}>
      Mobile Heade
    </Grid>
  )
}
