import React from 'react';

import {ReactComponent as SiteLogo} from 'images/vectors/logo.svg';
// import {Link} from "react-router-dom";

export default function Logo() {
    return (
        <div className="logo">
            {/*<Link to={{pathname: `/`}}>*/}
                <SiteLogo/>
            {/*</Link>*/}
        </div>
    )
}