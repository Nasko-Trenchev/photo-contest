import * as request from '../services/requester';

const baseUrl = "http://localhost:3030/users"

export const login = (email, password) => {

    const response = request.post(`${baseUrl}/login`, { email, password });

    if (response.code) {
        return Promise.reject(response.code)
    }

    return response;
}

export const register = (email, password, username) => {

    const response = request.post(`${baseUrl}/register`, { email, password, username });

    if (response.code) {
        return Promise.reject(response.code)
    }

    return response;
}

export const logout = async (accessToken) => {

    const response = await fetch(`${baseUrl}/logout`, {
        headers: {
            "X-Authorization": accessToken
        }
    })

    if (response.code) {
        return Promise.reject(response.code)
    }
    return response;
}