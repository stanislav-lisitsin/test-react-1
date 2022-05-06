import React from 'react';
import './Header.scss';

import Logo from 'components/common/Header/Logo/Logo';
import HeaderActions from 'components/common/Header/HeaderActions/HeaderActions';

export default function Header() {
    return (
        <header className={`header`}>

            <div className={'header-wrap'}>

                <Logo/>

                <HeaderActions/>

            </div>

        </header>
    )
}