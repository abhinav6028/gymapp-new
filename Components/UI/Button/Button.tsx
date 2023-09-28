import React from 'react'
import { Grid, Box } from '@mui/material'
import { PRIMARY_COLOUR } from '@/utils/colours'
import { H5 } from '../Typography/Typography'


export default function Button(props: any) {

  const { ml, mr, mt, pt, my, width, onClick, borderRadius } = props

  return (
    <Box onClick={onClick} sx={{
      bgcolor: PRIMARY_COLOUR,
      borderRadius: borderRadius ? borderRadius : '5px',
      height: { xs: 35, sm: 40, md: 45 },
      width: width ? width : { xs: 110, sm: 140, md: 162 },
      display: 'flex', justifyContent: 'center', alignItems: 'center', ml: ml,
      mr: { xs: mr - 3, lg: mr },
      cursor: 'pointer', mt: mt, pt: pt, my: my
    }}>

      <H5 fontWeight='bold'>{props.children}</H5>

    </Box>
  )
}

