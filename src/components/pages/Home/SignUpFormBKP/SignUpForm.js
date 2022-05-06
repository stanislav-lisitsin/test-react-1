import React from 'react'
import {useSelector} from "react-redux";

import Success from "components/pages/Home/SignUpForm/Success";
import RegistrationForm from "components/pages/Home/SignUpForm/RegistrationForm"

export default function SignUpForm() {

    const registrationStatus = useSelector(state => state.registrationUser.registrationStatus);

    return (

        <section className={'form'} id={'sign-up-form'}>

            <div className={'form-wrap'}>

                {
                    registrationStatus ?

                        <Success/>
                        :
                        <RegistrationForm/>
                }

            </div>


        </section>


    )

}