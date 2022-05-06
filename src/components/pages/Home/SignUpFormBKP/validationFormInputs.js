const FILE_SIZE_FOR_AVATAR = 5 * 1024 * 1024; //5242880
const SUPPORTED_FORMATS_AVATAR = [
    "image/jpg",
    "image/jpeg",
];

export default function validationScheme(values) {

    console.log(values)

    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 60) {
        errors.name = 'Must be 60 characters or less';
    } else if (values.name.length < 2) {
        errors.name = 'Must be more 2 characters';
    }


    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }


    if (!values.phone) {
        errors.phone = 'Required';
    } else if (!/^[\+]{0,1}380([0-9]{9})$/i.test(values.phone)) {
        errors.phone = 'Invalid phone number';
    }


    if (!values.position_id) {
        errors.position_id = 'Required';
    }


    if (!values.photo) {
        errors.photo = 'Required';
    } else if (FILE_SIZE_FOR_AVATAR < values.photo.size) {
        errors.photo = 'Size must not exceed 5MB';
    } else if (!SUPPORTED_FORMATS_AVATAR.includes(values.photo.type)) {
        errors.photo = 'User photo should be jpg/jpeg image';
    }

    return errors;
}