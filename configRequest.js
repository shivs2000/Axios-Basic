const axios = require('axios').default;

const sendRequest = async () => {
    try {
        const resp = await axios({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            data: {
                id: 1,
                userId: 1,
                title: 'A new title',
                body: 'Update this post'
            }
        });

        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

sendRequest();
// we can use object instead for sending request containing some values.