import * as request from "../services/requester"

const baseUrl = "http://localhost:3030/data/photos";


export const createPhoto = async (data) => {

    const response = await request.post(`http://localhost:3030/data/photos`, data)

    return response;
}

export const editPhoto = async (photoId, data) => {

    const response = await request.put(`http://localhost:3030/data/photos/${photoId}`, data)

    return response;
}

export const getCurrentContestImages = async (categoryId) => {

    const where = encodeURIComponent(`categoryId="${categoryId}"`)
    try {
        const response = await request.get(`http://localhost:3030/data/photos?where=${where}`)
        return response;
    } catch (error) {
        console.log(error);
    }

}

export const getPhotoCreator = async (photoId) => {

    const relations = encodeURIComponent(`user=_ownerId:users`)

    const response = await request.get(`http://localhost:3030/data/photos/${photoId}?load=${relations}`)

    return response;
}

export const getImageDetails = async (id) => {

    const response = await request.get(`http://localhost:3030/data/photos/${id}`)

    return response;
}
