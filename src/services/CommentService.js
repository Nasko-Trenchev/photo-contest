import * as request from '../services/requester';

const baseUrl = `http://localhost:3030/data/comments`;

export const createComment = async (data) => {

    const response = await request.post(baseUrl, data);
    console.log(response)
    return response;
}

export const getComments = async (photoId) => {

    const where = encodeURIComponent(`photoId="${photoId}"`)
    const relations = encodeURIComponent(`user=_ownerId:users`)
    const response = await request.get(`${baseUrl}?where=${where}&load=${relations}`,)

    console.log(response);
    return response;
}
