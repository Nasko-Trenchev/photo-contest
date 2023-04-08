import * as request from "../services/requester"

const baseUrl = "http://localhost:3030/data/photos";


export const createPhoto = async (data) => {

    const response = await request.post(`${baseUrl}`, data)

    if (response.code) {
        return Promise.reject(response.code)
    }

    return response;
}

export const editPhoto = async (photoId, data) => {

    const response = await request.put(`${baseUrl}/${photoId}`, data)

    if (response.code) {
        return Promise.reject(response.code)
    }

    return response;
}

export const getCategoryPhotos = async (categoryId) => {

    const where = encodeURIComponent(`categoryId="${categoryId}"`)

    const response = await request.get(`${baseUrl}?where=${where}`)

    if (response.code) {
        return Promise.reject(response.code)
    }

    return response;
}

export const getPhotoCreator = async (photoId) => {

    const relations = encodeURIComponent(`user=_ownerId:users`)

    const response = await request.get(`${baseUrl}/${photoId}?load=${relations}`)

    if (response.code) {
        return Promise.reject(response.code)
    }

    return response;
}

export const getImageDetails = async (photoId) => {

    const response = await request.get(`${baseUrl}/${photoId}`)

    if (response.code) {
        return Promise.reject(response.code)
    }

    return response;
}

export const getAllPhotos = async () => {

    const response = await request.get(`${baseUrl}`)

    if (response.code) {
        return Promise.reject(response.code)
    }

    return response;
}