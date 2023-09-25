import React from 'react';
import { Grid, Box } from '@mui/material'
import ImageComponent from '@/Components/UI/ImageComponent/ImageComponent';
import { H4, H5 } from '@/Components/UI/Typography/Typography';
import { SECONDARY_COLOUR } from '@/utils/colours';

export default function OurStory() {
    return (
        <Grid container sx={{
            justifyContent: 'center', alignItems: 'center',
            bgcolor: { xs: SECONDARY_COLOUR, sm: '', md: '', lg: '' },
            my: { xs: 4 }

        }}>

            <Grid container xs={11.5} sm={11.5} md={11.5} lg={11.5} sx={{
                justifyContent: 'center', alignItems: 'center', bgcolor: 'transparent', my: 2.5
            }}>

                <Grid container lg={6} sx={{ bgcolor: 'transparent', justifyContent: 'center', alignItems: 'center', }}>
                    <ImageComponent />
                </Grid>

                <Grid container xs={10} lg={6} sx={{
                    bgcolor: SECONDARY_COLOUR, height: '100%',
                    mt: { xs: 1 }
                }}>

                    <Grid container sx={{ mb: 'auto', justifyContent: 'center', bgcolor: 'transparent' }}>

                        <Box sx={{ mb: 1,bgcolor: 'transparent' }}>
                            <H4 fontWeight='bold'>Our Story</H4>
                        </Box>

                        <Grid container lg={10} sx={{
                            my: { xs: 1, lg: 1 },
                            alignItems: 'center', bgcolor: 'transparent'
                        }}>
                            <H5 fontWeight='bold' >
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially
                                unchanged
                            </H5>
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>

        </Grid>
    )
}
