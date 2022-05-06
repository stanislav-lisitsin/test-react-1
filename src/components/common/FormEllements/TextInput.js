import React from "react";
import {useField} from "formik";
import "./TextInput.scss";

const TextInput = ({ label,helperText, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);

    // console.log('field = ',field)
    // console.log('meta = ',meta)

    return (
        <>

            <div className={`field-section${meta.touched && meta.error  ? ' input-error' : ''} ${meta.value? 'filled':'empty'}`}>
                <input className="input-type" {...field} {...props} />
                <label htmlFor={props.id || props.name}>{label}</label>
                {
                    helperText &&
                    <div className={'helper-text'}>{helperText}</div>
                }

                {meta.touched && meta.error ? (
                    <div className={'error'}>{meta.error}</div>
                ) : null}

            </div>

        </>
    );
};


export default TextInput;