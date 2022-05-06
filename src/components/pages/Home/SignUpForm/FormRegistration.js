import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Formik, Form} from 'formik';

import Button from 'components/common/Button/Button';
import {clearDataUserRegistration, registrationNewUser} from "redux/actions/registrationUser";
import {getUserPositionsForm} from "redux/actions/getFormUserPositions";

import ShowMessages from "components/pages/Home/SignUpForm/ShowMessages";

import TextInput from "components/common/FormEllements/TextInput";
import * as Yup from "yup";
import RadioButton from "components/common/FormEllements/RadioButton";
import FileUpload from "components/common/FormEllements/FileUpload";
import FormSelect from "components/common/FormEllements/FormSelect";
import FormCheckbox from "components/common/FormEllements/FormCheckbox";

export default function FormRegistration() {

    const dispatch = useDispatch();

    const {positions} = useSelector(state => state.userPositions.positions);
    const messageAfterCreateUser = useSelector(state => state.registrationUser.getResponse);
    const spinnerLoading = useSelector(state => state.registrationUser.spinnerLoading);

    const [userPosition, setUserPosition] = useState([]);


    useEffect(() => {
        dispatch(getUserPositionsForm());
    }, []);

    useEffect(() => {

        let setClearTimeout = null;

        if (messageAfterCreateUser && Object.keys(messageAfterCreateUser).length !== 0) {
            setClearTimeout = setInterval(() => {
                dispatch(clearDataUserRegistration());
            }, 5000)
        }

        return () => clearTimeout(setClearTimeout);

    }, [messageAfterCreateUser]);

    useEffect(() => {
        if (positions) {
            setUserPosition(positions);
        }
    }, [positions]);

    const FILE_SIZE_FOR_AVATAR = 5 * 1024 * 1024 ; //5242880
    const SUPPORTED_FORMATS_AVATAR = ["image/jpg", "image/jpeg",];

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Must be more 2 characters')
            .max(60, 'Must be 60 characters or less')
            .required('Required'),
        email: Yup.string()
            .matches(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/, 'Invalid email address')
            .required('Required'),
        phone: Yup.string()
            .matches(/^[\+]{0,1}380([0-9]{9})$/, 'Invalid phone number')
            .required('Required'),
        position_id: Yup.string().required('Required'),
        position_checkbox: Yup.array().required('Required checkbox').min(1, 'Must be checked 1'),
        position_select: Yup.string().required('Required select'),
        photo: Yup.mixed()
            .required('Required')
            .test('fileSize', "Size must not exceed 5MB", value => {
                return value && value.size <= FILE_SIZE_FOR_AVATAR;
            })
            .test('fileType', "User photo should be jpg/jpeg image", value => {
                return (value && SUPPORTED_FORMATS_AVATAR.includes(value.type))
            })

    });

    return (
        <>
            <h2 className={'section-title'}>Working with POST request</h2>

            <div className={'sign-up-form'}>

                <Formik
                    initialValues={{
                        position_checkbox: '',
                        name: '',
                        email: '',
                        phone: '',
                        position_id: '',
                        photo: '',
                        position_select: '',

                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values, {setSubmitting, resetForm, setErrors}) => {


                        const customResetForm = () => {
                            resetForm();
                            console.log('resetForm')
                        }

                        dispatch(registrationNewUser(values, {
                            successActions: customResetForm
                        }))

                        setSubmitting(false);

                        // setInputValue('');
                        // setUploadFileName(defaultFileText);
                    }}
                >
                    {
                        (
                            {
                                values,
                                errors,
                                touched,
                                isSubmitting,
                                dirty,
                                setFieldValue,
                                handleBlur,
                                setFieldTouched
                            }) => {

                            // console.log(errors)
                            console.log(values)

                            return (

                                <Form>

                                    <TextInput label="Your name" name="name" type="text" id='name'/>

                                    <TextInput label="Email" name="email" type="text" id='email'/>

                                    <TextInput label="Phone" name="phone" type="text" id='phone' helperText={'+38 (XXX) XXX - XX - XX'}/>

                                    {
                                        userPosition && userPosition.length !==0 &&

                                        <RadioButton
                                            title={'Select your position'}
                                            name='position_id'
                                            customValues={userPosition}
                                            setFieldValue={setFieldValue}
                                        />

                                    }

                                    {
                                        userPosition && userPosition.length !==0 &&

                                        <FormSelect
                                            title={'Select your position'}
                                            name='position_select'
                                            className={'custom-select'}
                                            customValues={userPosition}
                                            setFieldValue={setFieldValue}
                                        />

                                    }

                                    {
                                        <FormCheckbox
                                            title={'Checkbox your position'}
                                            name='position_checkbox'
                                            className={'custom-checkbox'}
                                            customValues={userPosition}
                                            setFieldValue={setFieldValue}
                                            setFieldTouched={setFieldTouched}
                                        />
                                    }

                                    <FileUpload
                                        id={`imageUploader`}
                                        name="photo"
                                        defaultFileText='Upload your photo'
                                        setFieldValue={setFieldValue}
                                        setFieldTouched={setFieldTouched}
                                    />

                                    <div className={'action-wrap'}>
                                        <Button type="submit"
                                                className={`sign-up-form-button button ${!dirty ? `button--disabled` : `button--yellow`}`}
                                                disabled={isSubmitting || !dirty /*|| !Object.keys(errors).length == 0*/}
                                                isLoading={spinnerLoading}
                                        >
                                            Submit
                                        </Button>

                                        {messageAfterCreateUser && Object.keys(messageAfterCreateUser).length !== 0 &&

                                            <ShowMessages messageAfterCreateUser={messageAfterCreateUser}/>

                                        }

                                    </div>
                                </Form>)
                        }
                    }
                </Formik>
            </div>
        </>

    )
}