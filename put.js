const axios=require('axios').default;
const updatedPost = {
    id: 1,
    userId: 1,
    title: 'A new title',
    body: 'Update this post'
};

const putData=()=>{
    
    try {
        const resp = await axios.put('https://jsonplaceholder.typicode.com/posts/1', updatedPost);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

putData();