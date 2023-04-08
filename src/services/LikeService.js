import * as request from "../services/requester"

const baseUrl = "http://localhost:3030/data/likes";

export const createLike = async (data) => {

    const response = await request.post(`${baseUrl}`, data)

    return response;
}

export const getLikeCount = async (photoId) => {

    const where = encodeURIComponent(`photoId="${photoId}"`)

    const response = await request.get(`${baseUrl}?where=${where}&count`,)

    return response;

}

export const getAllLikes = async () => {

    try {
        const response = await request.get(`${baseUrl}`);
        return response;
    } catch (error) {
        console.log(error)
        return [];
    }
}

export const getTopLikedPhotos = async (categoryId) => {
    const relations = encodeURIComponent(`photo=photoId:photos`)
    const where = encodeURIComponent(`categoryId="${categoryId}"`)
    try {
        const response = await request.get(`${baseUrl}?where=${where}&load=${relations}`,)
        if (response.code) {
            console.log(response.message)
            return response
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
        const sortedByLikesArrayLenght = asArrays.sort((a, b) => b[1].length - a[1].length)
        const extractOnlyPhotosInTheSecondArray = sortedByLikesArrayLenght.map(x => Object.values(x[1].map(y => y.photo)))
        console.log(extractOnlyPhotosInTheSecondArray);
        const topPhotosByLikes = extractOnlyPhotosInTheSecondArray.map(x => Object.values(x)[0])
        console.log(topPhotosByLikes);
        if (topPhotosByLikes.length < 3) {
            return topPhotosByLikes;
        }
        return topPhotosByLikes.slice(0, 3);
    } catch (error) {
        console.log(error)
        return [];
    }
}
