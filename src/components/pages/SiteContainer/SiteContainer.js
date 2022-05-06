import React from 'react';

import {Routes, Route} from "react-router-dom";

import NotFound from "components/pages/NotFound/NotFound";
import Home from "components/pages/Home/Home";

export default function SiteContainer() {

    return (
        <div className={'site-container'}>

            <div className={'page-content'}>

                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>

            </div>
        </div>
    );
}


