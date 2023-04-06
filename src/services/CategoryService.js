import * as request from "./requester"

const baseUrl = "http://localhost:3030/data/categories";

export const getAllCategories = async () => {

        const response = await request.get(baseUrl);
        return response;
}

export const getCategory = async (categoryId) => {

        const response = await request.get(`${baseUrl}/${categoryId}`)

        return response;
}

export const createCategory = async (data) => {

    const response = await request.post(baseUrl, data)

    return response;
}
