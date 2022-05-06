import React, {useEffect} from 'react';
import './App.scss';

import {useDispatch} from "react-redux";

import Header from 'components/common/Header/Header';
import SiteContainer from "components/pages/SiteContainer/SiteContainer";

import {getUserToken} from "redux/actions/userToken";

export default function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserToken());
    }, []);

    return (
        <div className={'main-wrap'}>

            <Header/>

            <SiteContainer/>

        </div>
    );
}