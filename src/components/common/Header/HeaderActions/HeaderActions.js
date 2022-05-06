import React from 'react';

import Button from 'components/common/Button/Button';

export default function HeaderActions() {

    const Users = () => {
        // console.log('users');
        const users = document.getElementById("users");
        users.scrollIntoView({block: "start", behavior: "smooth"});
    };

    const SignUp = () => {
        // console.log('Sign Up')
        const signUpForm = document.getElementById("sign-up-form");
        signUpForm.scrollIntoView({block: "start", behavior: "smooth"});
    };


    return (
        <div className="header-actions">

            <Button
                type="button"
                className="button button--yellow users"
                onClick={() => Users()}
            >
                Users
            </Button>

            <Button
                type="button"
                className="button button--yellow"
                onClick={() => SignUp()}

            >
                Sign up
            </Button>


        </div>

    )
}