import React from "react";
import './FormCheckbox.scss';

import {useField} from "formik";

const FormCheckbox = ({
                          title,
                          setFieldValue,
                          customValues,
                          setFieldTouched,
                          ...props
                      }) => {
    const [field, meta] = useField(props);

    // console.log('field = ',field)
    // console.log('meta = ',meta)

    return(
        <div className={`checkbox-group-section${meta.touched && meta.error  ? ' input-error' : ''}`}>
            {
                title &&
                <h3 className={'checkbox-group-title'}>{title}</h3>
            }

            {
                customValues.map(category => {
                        return (
                            <div className="checkbox" key={category.id} >
                                <label className="custom-checkbox">
                                    <input
                                        type="checkbox"
                                        {...field}
                                        {...props}
                                        value={category.id}
                                    />
                                    <span>{category.name}</span>
                                </label>
                            </div>
                        )
                    }
                )
            }

            {meta.touched && meta.error ? (
                <div className={'error'}>{meta.error}</div>
            ) : null}
        </div>
    )
}

export default FormCheckbox;