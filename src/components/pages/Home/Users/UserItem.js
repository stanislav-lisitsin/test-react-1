import React from "react";
import uniqid from "uniqid";
import Tooltip from '@mui/material/Tooltip';

export default function UserItem({allUsers}) {
    return (
        <div className={'users'}>

            {
                allUsers.users.map((singleUser, index) => (

                    <div className={'item'} key={uniqid()} >

                        <div className={'user-avatar'}><img src={singleUser.photo} alt={singleUser.name}/></div>

                        <h3 className={'user-name smart-text'}>{singleUser.name}</h3>

                        <div className={'user-position smart-text'}>{singleUser.position}</div>

                        <Tooltip title={singleUser.email} followCursor>
                            <div className={'user-email smart-text'}><a href={`mailto:${singleUser.email}`}>{singleUser.email}</a></div>
                        </Tooltip>

                        <div className={'user-phone-number'}><a href={`tel:${singleUser.phone}`}>{singleUser.phone}</a></div>

                    </div>

                ))
            }

        </div>
    )
}