import * as request from "../services/requester"

const baseUrl = "http://localhost:3030/data/categories";

export const getAllCategories = async () => {

    const response = await fetch(baseUrl)

    const result = await response.json();

    return result;
}

export const getCategory = async (categoryId) => {

    const response = await fetch(`${baseUrl}/${categoryId}`)

    const result = await response.json();

    return result;
}

// export const createPhoto = async (data) => {

//     const response = await request.post(`http://localhost:3030/data/photos`, data)

//     return response;
// }

// export const editPhoto = async (photoId, data) => {

//     const response = await request.put(`http://localhost:3030/data/photos/${photoId}`, data)

//     return response;
// }

export const createCategory = async (data) => {

    const response = await request.post(baseUrl, data)

    return response;
}

// export const getCurrentContestImages = async (categoryId) => {

//     const where = encodeURIComponent(`categoryId="${categoryId}"`)
//     try {
//         const response = await request.get(`http://localhost:3030/data/photos?where=${where}`)
//         return response;
//     } catch (error) {
//         console.log(error);
//     }

// }

// export const getPhotoCreator = async (photoId) => {

//     const relations = encodeURIComponent(`user=_ownerId:users`)

//     const response = await request.get(`http://localhost:3030/data/photos/${photoId}?load=${relations}`)

//     return response;
// }

// export const getImageDetails = async (id) => {

//     const response = await request.get(`http://localhost:3030/data/photos/${id}`)

//     return response;
// }

export const createLike = async (data) => {

    const response = await request.post(`http://localhost:3030/data/likes`, data)

    return response;
}

export const getLikeCount = async (photoId) => {

    const where = encodeURIComponent(`photoId="${photoId}"`)
    try {
        const response = await request.get(`http://localhost:3030/data/likes?where=${where}&count`,)
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const getTopPhotos = async (categoryId) => {
    const relations = encodeURIComponent(`photo=photoId:photos`)
    const where = encodeURIComponent(`categoryId="${categoryId}"`)

    try {
        const response = await request.get(`http://localhost:3030/data/likes?where=${where}&load=${relations}`,)
        const objectWithArrays = response.reduce((acc, current) => {
            if (acc[current.photoId]) {
                acc[current.photoId].push(current)
            } else {
                acc[current.photoId] = [current];
            }
            return acc;
        }, {})

        const asArray = Object.entries(objectWithArrays);

        const sortedByLikesArrayLenght = asArray.sort((a, b) => b[1].length - a[1].length)
        const extractOnlyPhotosInTheSecondArray = sortedByLikesArrayLenght.map(x => Object.values(x[1].map(y => y.photo)))
        const topPhotosByLikes = extractOnlyPhotosInTheSecondArray.map(x => Object.values(x)[0])
        if (topPhotosByLikes.length < 3) {
            return topPhotosByLikes;
        }
        return topPhotosByLikes.slice(0, 3);
    } catch (error) {
        console.log(error)
    }
}
