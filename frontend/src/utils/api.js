import axios from 'axios';

export const requestOptions = {
    baseURL: 'http://localhost:3000/',
    method: 'POST',
    withCredentials: true,
    headers: { 
        'Content-Type': 'application/json',
    },
};

export const SignApi = (url, option) => {
    const options = { ...requestOptions, ...option };
    return new Promise((resolve, reject) => {
        axios(url, options)
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
};