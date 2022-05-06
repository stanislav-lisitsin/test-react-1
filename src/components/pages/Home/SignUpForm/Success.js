import React from 'react'

import {ReactComponent as SuccessIcon} from "images/vectors/success.svg";

export default function Success() {
        return (
            <>

                <h2 className={'section-title'}>User successfully registered</h2>

                <SuccessIcon />

            </>
        );
    }
;
