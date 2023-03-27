import * as request from "./requester"

const baseUrl = "http://localhost:3030/data/categories";

export const getAllCategories = async () => {

    try {
        const response = await request.get(baseUrl);

        return response;

    } catch (error) {

        console.log(error)

        return [];
    }
}

export const getCategory = async (categoryId) => {

    try {
        const response = await request.get(`${baseUrl}/${categoryId}`)

        return response;

    } catch (error) {

        console.log(error)

        return {};
    }
}


export const createCategory = async (data) => {

    const response = await request.post(baseUrl, data)

    return response;
}
