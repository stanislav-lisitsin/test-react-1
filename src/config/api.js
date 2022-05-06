const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const GET_TOKEN = `${REACT_APP_API_BASE_URL}/token`;
export const GET_USERS = `${REACT_APP_API_BASE_URL}/users`;
export const GET_USER_DATA= (id) => `${REACT_APP_API_BASE_URL}/users/${id}`;
export const GET_POSITIONS = `${REACT_APP_API_BASE_URL}/positions`;