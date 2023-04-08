import * as request from "./requester"

const baseUrl = "http://localhost:3030/data/categories";

export const getAllCategories = async () => {

        const response = await request.get(baseUrl);

        if (response.code) {
                return Promise.reject(response.code)
        }

        return response;
}

export const getCategory = async (categoryId) => {

        const response = await request.get(`${baseUrl}/${categoryId}`)

        if (response.code) {
                return Promise.reject(response.code)
        }

        return response;
}

export const createCategory = async (data) => {

        const response = await request.post(baseUrl, data)

        if (response.code) {
                return Promise.reject(response.code)
        }

        return response;
}
