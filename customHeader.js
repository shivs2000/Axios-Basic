const axios = require('axios').default;

const sendGetRequest = async () => {
    try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                'authorization': 'Bearer YOUR_JWT_TOKEN_HERE'
            }
        });

        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

sendGetRequest();
//this is useful in cases we are using jwt authentication or authorization.