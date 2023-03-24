import * as request from "../services/requester"

const baseUrl = "http://localhost:3030/data/photos";


export const createPhoto = async (data) => {

    const response = await request.post(`${baseUrl}`, data)

    return response;
}

export const editPhoto = async (photoId, data) => {

    const response = await request.put(`${baseUrl}/${photoId}`, data)

    return response;
}

export const getCurrentContestImages = async (categoryId) => {

    const where = encodeURIComponent(`categoryId="${categoryId}"`)
    try {
        const response = await request.get(`${baseUrl}?where=${where}`)
        return response;
    } catch (error) {
        console.log(error);
    }

}

export const getPhotoCreator = async (photoId) => {

    const relations = encodeURIComponent(`user=_ownerId:users`)

    const response = await request.get(`${baseUrl}/${photoId}?load=${relations}`)

    return response;
}

export const getImageDetails = async (id) => {

    const response = await request.get(`${baseUrl}/${id}`)

    return response;
}