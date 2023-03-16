
export const getNautreContests = async () => {

    const response = await fetch("http://localhost:3030/jsonstore/contest/nature")
    const result = await response.json();

    return result
}