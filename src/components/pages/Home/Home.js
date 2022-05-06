import React from 'react'
import "./Home.scss";

import Banner from "components/pages/Home/Banner/Banner";
import Users from "components/pages/Home/Users/Users";
import SignUpForm from "components/pages/Home/SignUpForm/SignUpForm";

export default function Home() {

    return (
        <div className={`home-page page-wrap`}>

            <Banner/>

            <Users/>

            <SignUpForm/>

        </div>

    )

}