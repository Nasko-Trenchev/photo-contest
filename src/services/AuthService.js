
import * as request from '../services/requester';

const baseUrl = "http://localhost:3030/users"

export const login = (email, password) => {

    try {
        const response = request.post(`${baseUrl}/login`, {email, password})
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const register = (email, password, username) => request.post(`${baseUrl}/register`, {email , password, username});

export const logout = async (accessToken) => {

    try{
       const response  = await fetch(`${baseUrl}/logout`, {
            headers: {
                "X-Authorization" : accessToken
            }
        })
        return response;
    }
    catch(e) {

        console.log(e)
    }
    
}