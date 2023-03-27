import * as request from '../services/requester';

const baseUrl = `http://localhost:3030/data/comments`;

export const createComment = async (data) => {

    const response = await request.post(baseUrl, data);

    return response;
}

export const getCommentsWithUsers = async (photoId) => {

    const where = encodeURIComponent(`photoId="${photoId}"`)

    const relations = encodeURIComponent(`user=_ownerId:users`)

    try {
        const response = await request.get(`${baseUrl}?where=${where}&load=${relations}`,)

        return response;

    } catch (error) {

        console.log(error)

        return [];
    }

}

export const deleteComment = async (commentId) => request.remove(`${baseUrl}/${commentId}`)

export const editComment = async (commentId, data) => {

    const response = await request.put(`${baseUrl}/${commentId}`, data)

    return response;
}

export const getAllComments = async () => {

    try {
        const response = await request.get(`${baseUrl}`);

        return response;

    } catch (error) {
        
        console.log(error)

        return [];
    }
 
}