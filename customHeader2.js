const axios = require('axios').default;

axios({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
    headers: {
        'authorization': 'Bearer YOUR_JWT_TOKEN_HERE'
    }
}).then(resp => {
    console.log(resp.data);
}).catch(err => {
    // Handle Error Here
    console.error(err);
});
//it possible to use with axios.post(), axios.put(), 
//axios.delete(). The headers property should be entered after the data object in axios.post() and axios.put().