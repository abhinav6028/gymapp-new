import Image from 'next/image'
import styles from './page.module.css'
import { Grid } from '@mui/material'
import HomePage from '@/Components/HomePage/HomePage'


export default function Home() {
  return (
    <Grid container>

      <HomePage />

    </Grid>
  )
}
