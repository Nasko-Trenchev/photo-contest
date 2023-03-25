import * as request from "./requester"

const baseUrl = "http://localhost:3030/data/categories";

export const getAllCategories = async () => {

    const response = await request.get(baseUrl)

    if (!response?.ok) {
        console.log(response);
        return Promise.reject(response.message)
    }

    const result = await response.json();

    return result;
}

export const getCategory = async (categoryId) => {

    const response = await request.get(`${baseUrl}/${categoryId}`)

    const result = await response.json();

    return result;
}


export const createCategory = async (data) => {

    const response = await request.post(baseUrl, data)

    return response;
}
