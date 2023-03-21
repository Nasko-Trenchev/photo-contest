import * as request from "../services/requester"

const baseUrl = "http://localhost:3030/data/categories";

export const getAllCategories = async () => {

    const response = await fetch(baseUrl)

    const result = await response.json();

    return result;
}

export const createPhoto = async (data) => {

    const response = await request.post(`http://localhost:3030/data/photos`, data)
    return response;
}

export const createCategory = async (data) => {
    const response = await request.post(baseUrl, data)
   
    return response;
}

export const getCurrentContestImages = async (categoryId) => {

    const relations = encodeURIComponent(`photos=categoryId:photos`)
    const where = encodeURIComponent(`categoryId="${categoryId}"`)
    const response = await request.get(`http://localhost:3030/data/photos?where=${where}`)
    return response;
}

export const getImageDetails = async (id) => {

    const response = await request.get(`http://localhost:3030/data/photos/${id}`)
    return response;
}
