import * as request from "./requester"

const baseUrl = "http://localhost:3030/data/categories";

export const getAllCategories = async () => {

    const response = await fetch(baseUrl)

    const result = await response.json();

    return result;
}

export const getCategory = async (categoryId) => {

    const response = await fetch(`${baseUrl}/${categoryId}`)

    const result = await response.json();

    return result;
}


export const createCategory = async (data) => {

    const response = await request.post(baseUrl, data)

    return response;
}
