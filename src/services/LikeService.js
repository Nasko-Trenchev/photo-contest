import * as request from "../services/requester"

const baseUrl = "http://localhost:3030/data/likes";

export const createLike = async (data) => {

    const response = await request.post(`${baseUrl}`, data)

    if (response.code) {
        return Promise.reject(response.code)
    }

    return response;
}

export const getLikeCount = async (photoId) => {

    const where = encodeURIComponent(`photoId="${photoId}"`)

    const response = await request.get(`${baseUrl}?where=${where}&count`,)

    if (response.code) {
        return Promise.reject(response.code)
    }

    return response;

}

export const getAllLikes = async () => {

    const response = await request.get(`${baseUrl}`);

    if (response.code) {
        return Promise.reject(response.code)
    }

    return response;
}

export const getTopLikedPhotos = async (categoryId) => {
    const relations = encodeURIComponent(`photo=photoId:photos`)
    const where = encodeURIComponent(`categoryId="${categoryId}"`)
    try {
        const response = await request.get(`${baseUrl}?where=${where}&load=${relations}`,)
        if (response.code) {
            return Promise.reject(response.code)
        }
        console.log(response);
        const objectWithPhotosArrays = response.reduce((acc, current) => {
            if (acc[current.photoId]) {
                acc[current.photoId].push(current)
            } else {
                acc[current.photoId] = [current];
            }
            return acc;
        }, {})
        console.log(objectWithPhotosArrays);

        const asArrays = Object.entries(objectWithPhotosArrays);
        console.log(asArrays)
        // const sortedByLikesArray = asArrays.sort(([key,valueA], b) => b[1].length - a[1].length)
        const sortedByLikesArray = asArrays.sort((a, b) => b[1].length - a[1].length)
        const extractOnlyPhotos = sortedByLikesArray.map(x => x[1].map(y => y.photo))
        console.log(extractOnlyPhotos);
        const topPhotosByLikes = extractOnlyPhotos.map(x => x[0])
        console.log(topPhotosByLikes);
        return topPhotosByLikes.slice(0, 3);
    } catch (error) {
        console.log(error)
        return [];
    }
}
