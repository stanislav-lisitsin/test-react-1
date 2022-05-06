import React from 'react'

export default function ShowMessages({messageAfterCreateUser}){

    return(
        <div className="messages">
            {
                messageAfterCreateUser.success ?
                    <div className="message success">{messageAfterCreateUser.message}</div>
                    :
                    <div className="message error">{messageAfterCreateUser.message}</div>
            }
        </div>
    )
}