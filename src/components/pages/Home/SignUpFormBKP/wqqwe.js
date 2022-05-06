import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getUserPositionsForm} from "redux/actions/getFormUserPositions";
import {Formik, Form, Field, ErrorMessage,useFormik} from 'formik';
import Button from 'components/common/Button/Button';
import * as Yup from 'yup';


import TextInput from "components/common/FormEllements/TextInput";
import RadioButton from "components/common/FormEllements/RadioButton";
import TextField from "@mui/material/TextField";

// import TextField from "@mui/material/TextField";



export default function SignUpForm333() {

    const dispatch = useDispatch();
    const {positions} = useSelector(state => state.userPositions.positions);

    const [userPosition, setUserPosition] = useState([])


    useEffect(() => {
        dispatch(getUserPositionsForm());
    }, []);

    useEffect(() => {
        if(positions){
            setUserPosition(positions);
        }

    }, [positions]);


    console.log(userPosition)


    return (

        <section className={'form'} id={'sign-up-form'}>

            <div className={'form-wrap'}>
                <h2 className={'section-title'}>Working with POST request</h2>

                <div className={'sign-up-form'}>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            name: '',
                            email: '',
                            phone: '',
                            position_id: '',
                            photo: ''
                        }}
                        validationSchema={Yup.object({
                            name: Yup.string()
                                .required('Required')
                                .min(2, 'Must be more 2 characters')
                                .max(60, 'Must be 60 characters or less'),
                            email: Yup.string().email('Invalid email address').required('Required'),
                            phone: Yup.string().required('Required'),
                            position_id: Yup.string().required('Required')
                            // photo :Yup.string().required('Required')

                        })}

                        onSubmit={
                            (values, {setErrors, setSubmitting, resetForm, setStatus}) => {
                                // setSubmitting(false);

                                // setTimeout(() => {
                                //     alert(JSON.stringify(values, null, 2));
                                //     setSubmitting(false);
                                // }, 400);

                                console.log('values= ' , values)

                                // resetForm();
                                // dispatch(sendSignUpForm(values, setErrors)); //todo нужно будет создать этот action

                            }
                        }
                    >
                        {({
                              isClearable,
                              handleReset,
                              handleSubmit,
                              handleChange,
                              values,
                              errors,
                              touched,
                              isSubmitting,
                              dirty,
                              setFieldValue,
                              handleBlur,
                              status,
                              ...props
                          }) => {

                            // console.log(errors);

                            return (
                                <Form className={`account-settings-form`}>

                                    {/*<div className={`field-section${errors.name && touched.name ? ' input-error' : ''}`}>*/}

                                    {/*    <TextInput*/}
                                    {/*        label="Your name"*/}
                                    {/*        name="name"*/}
                                    {/*        type="text"*/}
                                    {/*    />*/}

                                    {/*</div>*/}

                                    {/*<div className={'field-section'}>*/}
                                    {/*    <Field*/}
                                    {/*        component={TextInput}*/}
                                    {/*        name="name"*/}
                                    {/*        label="Your name"*/}
                                    {/*        variant="outlined"*/}
                                    {/*        // fullWidth*/}
                                    {/*        // required={true}*/}
                                    {/*        // helperText={`qwerty`}*/}
                                    {/*        className={`${errors.name && touched.name ? ' input-error' : ''}` }*/}
                                    {/*    />*/}
                                    {/*    <ErrorMessage className={'error'} name="name" component="div"/>*/}
                                    {/*</div>*/}



                                    {
                                        userPosition && userPosition.length !== 0 &&

                                        <div className={'field-section'}>
                                            <div role="group" aria-labelledby="my-radio-group">
                                                <h3>Select your position</h3>

                                                {
                                                    userPosition.map((position, index) => (

                                                        <div key={index}>
                                                            <Field type="radio" name="position_id" value={position.id}/>
                                                            <label >{position.name}</label>
                                                        </div>

                                                    ))
                                                }

                                                <div>Picked: {values.position_id}</div>
                                            </div>
                                            <ErrorMessage className={'error'} name="position_id" component="div"/>
                                        </div>

                                    }

                                    <div className={'action-wrap'}>
                                        <Button type="submit"
                                                className={`sign-up-form-button button ${!dirty ? `button--disabled` : `button--yellow`}`}
                                            // disabled={isSubmitting || !dirty}
                                        >
                                            Submit
                                        </Button>

                                    </div>

                                </Form>

                            )
                        }}
                    </Formik>
                </div>

            </div>


        </section>


    )

}