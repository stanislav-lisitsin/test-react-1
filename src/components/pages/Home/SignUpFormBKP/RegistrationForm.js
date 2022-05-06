import React, {useEffect, useState, useRef} from 'react'
import {useDispatch, useSelector} from "react-redux";
import uniqid from "uniqid";

import {Formik, Form, Field, ErrorMessage, useFormik} from 'formik';
import Button from 'components/common/Button/Button';

import {getUserPositionsForm} from "redux/actions/getFormUserPositions";
import {clearDataUserRegistration, registrationNewUser} from "redux/actions/registrationUser";

import validationScheme from "components/pages/Home/SignUpForm/validationFormInputs";

export default function RegistrationForm() {

    const dispatch = useDispatch();

    const {positions} = useSelector(state => state.userPositions.positions);
    const messageAfterCreateUser = useSelector(state => state.registrationUser.getResponse);
    const spinnerLoading = useSelector(state => state.registrationUser.spinnerLoading);

    const [userPosition, setUserPosition] = useState([])
    const [inputValue, setInputValue] = useState("");
    const defaultFileText = 'Upload your photo'
    const [uploadFileName, setUploadFileName] = useState(defaultFileText);

    const hiddenFileInput = useRef(null);


    const handleLoadImgClick = () => {
        console.log('handleLoadImgClick')
        hiddenFileInput.current.click();
    };

    const handleLoadAttachFileChange = (event, setFieldValue) => {
        const avatarFileUploaded = event.target.files[0];
        setUploadFileName(avatarFileUploaded.name)
        setFieldValue('photo', avatarFileUploaded);
    };

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
        dispatch(getUserPositionsForm());
    }, []);

    useEffect(() => {
        if (positions) {
            setUserPosition(positions);
        }
    }, [positions]);

    return (

        <>
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

                    validate={validationScheme}

                    onSubmit={(values, { setSubmitting,resetForm,setErrors }) => {

                        const customResetForm = () => {
                            resetForm();
                            console.log('resetForm')
                        }

                        dispatch(registrationNewUser(values,{
                            successActions: customResetForm
                        }))

                        setSubmitting(false);

                        // setInputValue('');
                        setUploadFileName(defaultFileText);
                    }}
                >
                    {({ values,handleBlur,isSubmitting,setFieldValue ,dirty,errors,touched}) => (
                        <Form>

                            <div className={`field-section${errors.name && touched.name ? ' input-error' : ''}  ${values.name? 'filled':'empty'}`}>
                                <Field id={'name'} className={'input-type'} type="text" name="name"/>
                                <label htmlFor="name">Your name</label>

                                <ErrorMessage className={'error'} name="name" component="div"/>
                            </div>

                            <div className={`field-section${errors.email && touched.email ? ' input-error' : ''}  ${values.email? 'filled':'empty'}`}>
                                <Field className={'input-type'} type="email" name="email"/>
                                <label htmlFor="email">Email</label>
                                <ErrorMessage className={'error'} name="email" component="div"/>
                            </div>

                            <div className={`field-section${errors.phone && touched.phone ? ' input-error' : ''}  ${values.phone? 'filled':'empty'}`}>
                                <Field className={'input-type'} type="text" name="phone"/>
                                <label htmlFor="phone">Phone</label>
                                <div className={'helper-text'}>+38 (XXX) XXX - XX - XX</div>
                                <ErrorMessage className={'error'} name="phone" component="div"/>
                            </div>

                            {
                                userPosition && userPosition.length !==0 &&

                                <div className={`radio-group-section${errors.position_id && touched.position_id ? ' input-error' : ''}`}>

                                    <h3 className={'radio-group-title'}>Select your position</h3>

                                    {
                                        userPosition.map((position, index) => {

                                                return (
                                                    <div className={'position-item radio'} key={uniqid()} >
                                                        <input checked={position.id === values.position_id} onChange={()=>setFieldValue('position_id', position.id)} id={position.id} type="radio" name="position_id" value={`${position.id}`}/>
                                                        <label htmlFor={position.id} className={'radio-label'} >{position.name}</label>
                                                    </div>
                                                )
                                            }
                                        )
                                    }

                                    <ErrorMessage className={'error'} name="position_id" component="div"/>
                                </div>

                            }

                            <div className={`field-section`}>

                                {/*<Field*/}
                                {/*    id={`imageUploader`}*/}
                                {/*    accept='image/*'*/}
                                {/*    type="file"*/}
                                {/*    name="photo"*/}
                                {/*    value={inputValue}*/}
                                {/*    onChange={event => handleLoadAttachFileChange(event,setFieldValue,handleBlur)}*/}
                                {/*    ref={hiddenFileInput}*/}
                                {/*    // style={{display: "none"}}*/}
                                {/*/>*/}

                                <input
                                    id={`imageUploader`}
                                    accept='image/*'
                                    type="file"
                                    name="photo"
                                    onChange={event => handleLoadAttachFileChange(event,setFieldValue)}
                                    ref={hiddenFileInput}
                                    style={{display: "none"}}
                                />

                                <div className={`upload-wrap${errors.photo && touched.photo ? ' input-error' : ''}`} onClick={handleLoadImgClick}>

                                    <div className="upload">Upload</div>
                                    <div className="file-title">{uploadFileName}</div>

                                </div>

                                <ErrorMessage className={'error'} name="photo" component="div"/>
                            </div>

                            <div className={'action-wrap'}>
                                <Button type="submit"
                                        className={`sign-up-form-button button ${!dirty ? `button--disabled` : `button--yellow`}`}
                                        disabled={isSubmitting || !dirty}
                                        isLoading={spinnerLoading}
                                >
                                    Submit
                                </Button>

                                {
                                    messageAfterCreateUser && Object.keys(messageAfterCreateUser).length !== 0 &&

                                    <div className="messages">
                                        {
                                            messageAfterCreateUser.success ?
                                                <div className="message success">{messageAfterCreateUser.message}</div>
                                                :
                                                <div className="message error">{messageAfterCreateUser.message}</div>
                                        }
                                    </div>

                                }

                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}