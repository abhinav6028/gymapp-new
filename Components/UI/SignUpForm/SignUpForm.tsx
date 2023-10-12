import { Grid, Box, Typography } from '@mui/material'
import router, { useRouter } from 'next/navigation'
import React from 'react'
import { H4 } from '../Typography/Typography';
import Styles from '../../../Styles/inputfield.module.css'
import Button from '../Button/Button'
import CustomeTextField from '../CustomeTextField/CustomeTextField';
import { useFormik } from 'formik';
import { log } from 'console';
import axios from 'axios';
import { BASE_URL } from '@/utils/urls';
import Select from "react-select";
import CustomeDropDown from '../CustomeDropDown/CustomeDropDown';

export default function SignUpForm(props: any) {

    const [gender, setGender] = React.useState('');

    const router = useRouter()

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

            axios.post(`${BASE_URL}client`,
                {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    username: values.username,
                    dateOfBirth: null,
                    address: values.address,
                    place: values.place,
                    city: values.city,
                    state: values.state,
                    gender: gender,
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
            type: 'text',
            inputType: "text"
        },
        {
            fieldName: "Last Name",
            id: 'lastName',
            type: 'text',
            inputType: "text"
        },
        {
            fieldName: "dateOfBirth",
            id: 'dateOfBirth',
            type: 'date',
            inputType: "text"
        },
        {
            fieldName: "User Name",
            id: 'username',
            type: 'text',
            inputType: "text"
        },
        {
            fieldName: "Mobile ",
            id: 'mobile',
            type: 'number',
            inputType: "text"
        },
        {
            fieldName: "Watsap number ",
            id: 'mobile',
            type: 'number',
            inputType: "text"
        },
        {
            fieldName: "Email",
            id: 'email',
            type: 'email',
            inputType: "text"
        },
        {
            fieldName: "Gender",
            id: 'gender',
            type: 'dropDown',
            inputType: "dropDown"
        },
        {
            fieldName: "State",
            id: 'state',
            type: 'text',
            inputType: "text"
        },
        {
            fieldName: "City",
            id: 'city',
            type: 'text',
            inputType: "text"
        },
        {
            fieldName: "Place",
            id: 'place',
            type: 'text',
            inputType: "text"
        },
        {
            fieldName: "Password",
            id: 'password',
            type: 'password',
            inputType: "text"
        },

    ]



    // const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    //     setGender(event.target.value);
    // };

    console.log("selectedValue/////////////////////////////", gender);

    return (
        <Grid container lg={7} sx={{}}>

            <Grid container bgcolor='' sx={{ height: 'fit-content', bgcolor: '' }}>
                <Box
                    component='img'
                    src='Assets/Icons/Multiply.png'
                    // onClick={() => router.back()}
                    onClick={() => router.back()}
                    sx={{
                        width: { xs: 35, lg: 42 },
                        height: { xs: 35, sm: 42, lg: 42 },
                        cursor: 'pointer'
                    }}
                />

            </Grid>



            <Grid container lg={6} sx={{
                justifyContent: 'center', alignItems: 'center', bgcolor: '',
                position: 'absolute',
                height: '80%',
                top: { xs: 30, lg: 35 },

            }}>

                <Grid container xs={10} md={10} lg={10} bgcolor='' sx={{
                    alignItems: 'center',
                    justifyContent: '',
                    bgcolor: ''
                }}>

                    <H4 textAlign='start' fontWeight='bold'>SIGN UP</H4>

                    <form style={{ width: '100%', background: '' }} onSubmit={formik.handleSubmit} >

                        <Grid container justifyContent="center">

                            {/* <CustomeDropDown gender={gender} setGender={setGender} /> */}


                            {
                                formItems.map((data: any, index: any) => {

                                    switch (data.inputType) {
                                        case 'text':
                                            return (
                                                <CustomeTextField data={data} formik={formik} />
                                            )
                                            break;
                                        case 'dropDown':
                                            return (
                                                <CustomeDropDown gender={gender} setGender={setGender} />
                                            )
                                            break;
                                    }
                                }
                                )

                            }


                            <Grid container>
                                <Box sx={{
                                    width: { xs: '100%', lg: '90%' },
                                    mt: 2
                                }}>

                                    <Button
                                        // onClick={() => setCheck(!check)}
                                        width='100%' borderRadius='10px'>CONTINUE</Button>

                                </Box>
                            </Grid>

                            <button type="submit">Submit</button>

                        </Grid>



                    </form>





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

                            <span>sign Up</span>

                        </Typography>

                    </Grid>

                </Grid>

            </Grid >

        </Grid >
    )
}
