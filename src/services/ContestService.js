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

export const testLikes = async (categoryId) =>{

    const where = encodeURIComponent(`categoryId="${categoryId}"`)
    const response = await request.get(`http://localhost:3030/data/likes?where=${where}`,)

    // const news = response.map(x=> ({...x, isCounted: false}))

    debugger;
    const a = response.reduce((acc, current) => {
        if(acc[current.photoId]){
            acc[current.photoId].push(current)
        } else {
            acc[current.photoId] = [];
        }
       return acc;
    }, {})
    console.log(a);
    // let likesCount = {};
    //     if(response.length > 0) {
    //         a.forEach(element => {
    //             if(likesCount[element.photoId]) {
    //                 likesCount[element.photoId]++;
    //             }
    //             else{
    //                 likesCount[element.photoId] = 1;
    //             }
    //         });
    //     }
  const asArray = Object.entries(a);

  console.log(asArray.sort((a,b) => b[1].length - a[1].length))
    // const sorted = Object.keys(likesCount).sort(function(a,b){return likesCount[b]-likesCount[a]});
    // const top3 = topPhotos.slice(0, 3);

    // console.log(top3);
    // return top3;
}
