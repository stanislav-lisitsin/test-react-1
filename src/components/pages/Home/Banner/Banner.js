import React from 'react'
import Button from "components/common/Button/Button";

export default function Banner() {

    const SignUp = () => {
        const signUpForm = document.getElementById("sign-up-form");
        signUpForm.scrollIntoView({block: "start", behavior: "smooth"});
    };

        return (
        <section className={'banner'}>

            <div className="banner-wrap">
                <h1 className={'banner-title'}>Test assignment for front-end developer</h1>

                <h2 className={'banner-subtitle'}>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</h2>

                <div className="button-wrap">
                    <Button
                        type="button"
                        className="button button--yellow"
                        onClick={() => SignUp()}
                    >
                        Sign up
                    </Button>
                </div>

            </div>

        </section>

    )

}