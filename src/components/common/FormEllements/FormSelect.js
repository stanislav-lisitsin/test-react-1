import React from "react";

import {ReactComponent as DownArrowIcon} from "images/vectors/arrow-down-grey.svg";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {useField} from "formik";

const DropdownIndicator = (props) => {
    return (
        <div {...props}>
            <DownArrowIcon className={`dropdown-custom`}/>
        </div>
    );
};

const FormSelect = ({title, customValues, setFieldValue, ...props}) => {

    const [field, meta] = useField(props);

    console.log('field = ',field)
    console.log('meta = ',meta)
    // console.log(props)

    return (

        <div className={`select-group-section${meta.touched && meta.error  ? ' input-error' : ''}`}>
            {
                title &&
                <h3 className={'select-group-title'}>{title}</h3>
            }

            <Select
                defaultValue={''}
                displayEmpty
                // defaultValue={{label: "Choose one", value: ""}}
                IconComponent={DropdownIndicator}
                onChange={e => setFieldValue(props.name, e.target.value)}
                {...props}
            >
                <MenuItem className={'default-value-select'} value={``} >Select your position</MenuItem>

                {
                    customValues.map(category => {
                            return (
                                <MenuItem key={category.id} value={`${category.id}`}>{category.name}</MenuItem>
                            )
                        }
                    )
                }
            </Select>
            {meta.touched && meta.error ? (
                <div className={'error'}>{meta.error}</div>
            ) : null}
        </div>

    );

};


export default FormSelect;