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

    // const relations = encodeURIComponent(`photos=categoryId:photos`)
    const where = encodeURIComponent(`categoryId="${categoryId}"`)
    const response = await request.get(`http://localhost:3030/data/photos?where=${where}`)
    return response;
}

export const getImageDetails = async (id) => {

    const response = await request.get(`http://localhost:3030/data/photos/${id}`)

    return response;
}

export const createLike = async (data) => { 

    const response = await request.post(`http://localhost:3030/data/likes`, data)

    return response;
}

export const getLikeCount = async (photoId) =>{

    const where = encodeURIComponent(`photoId="${photoId}"`)
    const response = await request.get(`http://localhost:3030/data/likes?where=${where}&count`,)
    return response;
}

export const getTopPhotos = async (categoryId) =>{
    const relations = encodeURIComponent(`photo=photoId:photos`)
    const where = encodeURIComponent(`categoryId="${categoryId}"`)
    const response = await request.get(`http://localhost:3030/data/likes?where=${where}&load=${relations}`,)

    const objectWithArrays = response.reduce((acc, current) => {
        if(acc[current.photoId]){
            acc[current.photoId].push(current)
        } else {
            acc[current.photoId] = [];
        }
       return acc;
    }, {})
    const asArray = Object.entries(objectWithArrays);

    const sortedByLikesArrayLenght = asArray.sort((a,b) => b[1].length - a[1].length)
    const extractOnlyPhotosInTheSecondArray = sortedByLikesArrayLenght.map(x => Object.values(x[1].map(y => y.photo)))
    const topPhotosByLikes = extractOnlyPhotosInTheSecondArray.map(x => Object.values(x)[0])

    if(topPhotosByLikes.length < 3){
        return topPhotosByLikes;
    }
    return topPhotosByLikes.slice(0, 3);
    // const nova = Object.fromEntries(asArray);

    // const keys = Object.values(nova);

    // const justPhotos = keys[0].map(({photo}) => ({photo}))
    // const values = justPhotos.map(x => Object.values(x)[0])
    // return finalFinal;

    // const top3 = topPhotos.slice(0, 3);
}
