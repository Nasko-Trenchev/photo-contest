
export const getNautreContests = async () => {

    const response = await fetch("http://localhost:3030/jsonstore/contest/nature")
    const result = await response.json();

    return result
}

export const getCurrentContestImages = async () => {

    const response = await fetch("http://localhost:3030/jsonstore/contest/nature/photos")
    const result = await response.json();

    return result
}

export const getAllContests = async () => {

    const response = await fetch("http://localhost:3030/data/contests")

    const result = await response.json();
    
    return result;
    
}