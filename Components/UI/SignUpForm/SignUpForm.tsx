import { Grid, Box, Typography } from '@mui/material'
import router from 'next/router'
import React from 'react'
import { H4 } from '../Typography/Typography';
import Styles from '../../../Styles/inputfield.module.css'
import Button from '../Button/Button'
import CustomeTextField from '../CustomeTextField/CustomeTextField';
import { useFormik } from 'formik';
import { log } from 'console';
import axios from 'axios';
import { BASE_URL } from '@/utils/urls';

export default function SignUpForm(props: any) {

    const { setCheck, check } = props;

    const formik = useFormik({

        initialValues: {
            firstName: "",
            lastName: "",
            username: "",
            dateOfBirth: "",
            address: "",
            place: "",
            city: "",
            state: "",
            gender: "",
            mobile: "",
            email: "",
            password: ""

        },

        onSubmit: (values) => {

            axios.post(`${BASE_URL}/client`,
                {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    username: values.username,
                    dateOfBirth: values.dateOfBirth,
                    address: values.address,
                    place: values.place,
                    city: values.city,
                    state: values.state,
                    gender: values.gender,
                    mobile: values.mobile,
                    email: values.email,
                    password: values.password,
                }
            ).then((res) =>

                console.log("/////////////////", res)

            )

        },

    })


    const formItems = [
        {
            fieldName: "First Name",
            id: 'firstName',
            type: 'text'
        },
        {
            fieldName: "Last Name",
            id: 'lastName',
            type: 'text'
        },
        {
            fieldName: "User Name",
            id: 'username',
            type: 'text'
        },
        {
            fieldName: "Mobile ",
            id: 'mobile',
            type: 'number'
        },
        {
            fieldName: "Watsap number ",
            id: 'mobile',
            type: 'number'
        },
        {
            fieldName: "Email",
            id: 'email',
            type: 'email'
        },
        {
            fieldName: "Gender",
            id: 'gender',
            type: 'text'
        },
        {
            fieldName: "State",
            id: 'state',
            type: 'state'
        },
        {
            fieldName: "City",
            id: 'city',
            type: 'text'
        },
        {
            fieldName: "Place",
            id: 'place',
            type: 'text'
        },
        {
            fieldName: "Password",
            id: 'password',
            type: 'text'
        }

    ]

    return (
        <Grid container lg={7} sx={{}}>

            <Grid container bgcolor='' sx={{ height: 'fit-content', bgcolor: '' }}>
                <Box
                    component='img'
                    src='Assets/Icons/Multiply.png'
                    onClick={() => router.back()}
                    sx={{
                        width: { xs: 35, lg: 42 },
                        height: { xs: 35, sm: 42, lg: 42 },
                        mt: { lg: 50 },
                        cursor: 'pointer'
                    }}
                />
            </Grid>



            <Grid container lg={6} sx={{
                justifyContent: 'center', alignItems: 'center', bgcolor: '',
                position: 'absolute',
                height: '80%',
                top: { xs: 100, lg: 90 },

            }}>

                <Grid container xs={10} md={10} lg={10} bgcolor='' sx={{
                    alignItems: 'center',
                    justifyContent: '',
                    bgcolor: ''
                }}>

                    <H4 textAlign='start' fontWeight='bold'>SIGN UP</H4>

                    <form style={{ width: '100%', background: '' }} onSubmit={formik.handleSubmit} >

                        <Grid container justifyContent="center">


                            {
                                formItems.map((data: any, index: any) => {

                                    // console.log("//////////////////", data);


                                    return (
                                        <CustomeTextField data={data} formik={formik} />
                                    )
                                }

                                )

                            }


                            <button type="submit">Submit</button>

                        </Grid>



                    </form>









                    {/* <Typography sx={{
                        fontSize: 11,
                        fontWeight: 'bold',
                        mt: 0.5,
                        bgcolor: 'transparent'
                    }}>Passwords must be at least 6 characters.</Typography> */}


                    <Box sx={{
                        width: { xs: '100%', lg: '90%' },
                        mt: 2,
                    }}>

                        <Button
                            // onClick={() => setCheck(!check)}
                            width='100%' borderRadius='10px'>CONTINUE</Button>

                    </Box>

                    <Box sx={{
                        width: { xs: '100%', lg: '80%' },
                        height: '1px',
                        bgcolor: 'black',
                        mt: { xs: 5, md: 4 }
                    }} />

                    <Grid container>

                        <Typography sx={{
                            fontSize: 11,
                            fontWeight: 'bold', mt: { xs: 2, md: 1.5 }
                        }}>Already have an account?

                            <span >sign Up</span>

                        </Typography>

                    </Grid>

                </Grid>

            </Grid>

        </Grid>
    )
}
