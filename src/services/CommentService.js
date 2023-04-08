import * as request from '../services/requester';

const baseUrl = `http://localhost:3030/data/comments`;

export const createComment = async (data) => {

    const response = await request.post(baseUrl, data);

    if (response.code) {
        return Promise.reject(response.code)
    }

    return response;
}


// export const getComment = async (commentId) => {

//     const response = await request.get(`${baseUrl}/${commentId}`);

//     if (response.code) {
//         return Promise.reject(response.code)
//     }

//     return response;
// }

export const getCommentsWithUsers = async (photoId) => {

    const where = encodeURIComponent(`photoId="${photoId}"`)

    const relations = encodeURIComponent(`user=_ownerId:users`)

    const response = await request.get(`${baseUrl}?where=${where}&load=${relations}`,)

    if (response.code) {
        return Promise.reject(response.code)
    }

    return response;

}

export const deleteComment = async (commentId) => request.remove(`${baseUrl}/${commentId}`)

export const editComment = async (commentId, data) => {

    const response = await request.put(`${baseUrl}/${commentId}`, data)

    if (response.code) {
        return Promise.reject(response.code)
    }

    return response;
}

export const getAllComments = async () => {

    const response = await request.get(`${baseUrl}`);

    if (response.code) {
        return Promise.reject(response.code)
    }

    return response;

}