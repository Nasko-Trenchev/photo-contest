
const request = async (method, url, data) => {

    try {

        let requestBuilder;

        if(method === "GET"){
            requestBuilder = fetch(url);
        }
        else {
            requestBuilder = fetch(url, {
                method,
                headers: {
                 'content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
        }
        const response = await requestBuilder;

        const result = await response.json()

        return result;
    }
    catch {
            // Handle error
    }
}

export const get = request.bind({}, "GET")
export const post = request.bind({}, "POST")
export const put = request.bind({}, "PUT")
export const remove = request.bind({}, "DELETE")