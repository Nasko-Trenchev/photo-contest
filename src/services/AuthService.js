import * as request from '../services/requester';

const baseUrl = "http://localhost:3030/users"

export const login = (email, password) => {

    const response = request.post(`${baseUrl}/login`, { email, password });

    return response;
}

export const register = (email, password, username) => {

    const response = request.post(`${baseUrl}/register`, { email, password, username });

    return response;
}

export const logout = async (accessToken) => {

    const response = await fetch(`${baseUrl}/logout`, {
        headers: {
            "X-Authorization": accessToken
        }
    })
    return response;
}