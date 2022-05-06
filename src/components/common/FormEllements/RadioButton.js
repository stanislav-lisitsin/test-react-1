import React from "react";
import {useField} from "formik";
import uniqid from "uniqid";

const RadioButton = ({
                         title,
                         customValues,
                         setFieldValue,
                         ...props
                     }) => {

    const [field, meta] = useField(props);

    // console.log(field)
    // console.log(meta)

    return (
        <div className={`radio-group-section${!meta.value && meta.touched ? ' input-error' : ''}`}>

            {
                title &&
                <h3 className={'radio-group-title'}>{title}</h3>
            }

            {
                customValues.map((position) => {

                    return (
                        <div className={'position-item radio'} key={uniqid()} >
                            <input
                                {...field} {...props}  checked={position.id === meta.value} onChange={()=>setFieldValue('position_id', position.id)} id={position.id} type="radio" value={`${position.id}`}/>
                            <label htmlFor={position.id} className={'radio-label'} >{position.name}</label>
                        </div>
                    )
                })
            }

            {!meta.value && meta.touched ? (
                <div className="error">{meta.error}</div>
            ) : null}

        </div>
    );
};

export default RadioButton;