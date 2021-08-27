// use default  at end for better autocompletion
const axios=require('axios').default;
axios.get('https://jsonplaceholder.typicode.com/posts')
.then((res)=>{
    console.log(res.data);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("hello");
})