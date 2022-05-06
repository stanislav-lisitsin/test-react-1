import React, {useRef, useState} from "react";
import {useField} from "formik";

const FileUpload = ({
                        id,
                        defaultFileText,
                        setFieldValue,
                        setFieldTouched,
                        ...props
                    }) => {

    const [field, meta] = useField(props);

    // console.log('field = ', field)
    // console.log('meta = ', meta)

    const [uploadFileName, setUploadFileName] = useState(defaultFileText);

    const hiddenFileInput = useRef();
    const handleLoadImgClick = () => {
        hiddenFileInput.current.click();
    };
    const handleLoadAttachFileChange = (event, setFieldValue, setFieldTouched) => {
        const avatarFileUploaded = event.target.files[0];
        setUploadFileName(avatarFileUploaded.name);

        setFieldValue('photo', event.target.files[0]);
        setFieldTouched("photo", true, false)
    };

    return (

        <div className={`field-section`}>

            <input
                id={`${id}`}
                accept='image/*'
                type="file"
                onChange={event => handleLoadAttachFileChange(event, setFieldValue,setFieldTouched)}
                ref={hiddenFileInput}
                style={{display: "none"}}
                {...props}
            />

            <div className={`upload-wrap${meta.touched && meta.error ? ' input-error' : ''}`}
                 onClick={handleLoadImgClick}>
                <div className="upload">Upload</div>
                <div className="file-title">{uploadFileName}</div>
            </div>

            {meta.touched && meta.error ? (
                <div className={'error'}>{meta.error}</div>
            ) : null}

        </div>

    );
};

export default FileUpload;