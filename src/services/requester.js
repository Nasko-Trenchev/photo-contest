
const request = async (method, url, data) => {

    try {
        const authString = localStorage.getItem("user");
        const auth = JSON.parse(authString || '{}');
        let headers = {};

        if(auth.accessToken) {
            headers["X-Authorization"] = auth.accessToken
        }

        let requestBuilder;

        if(method === "GET"){
            requestBuilder = fetch(url, {headers});
        }
        else {
            requestBuilder = fetch(url, {
                method,
                headers: {
                    ...headers,
                 'content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
        }
        const response = await requestBuilder;

        const result = await response.json()

        return result;
    }
    catch (err) {
       console.log(err);
    }
}

export const get = request.bind({}, "GET")
export const post = request.bind({}, "POST")
export const put = request.bind({}, "PUT")
export const patch = request.bind({}, "PATCH")
export const remove = request.bind({}, "DELETE")