const axios=require('axios').default;
const post={
    userId:12,
    title:'A new Post',
    body:'This is the body'
}



const postData=async ()=>{

try{
const res=await axios.post('https://jsonplaceholder.typicode.com/posts',post);
console.log(res.data);
}
catch(e){
    console.log(e);


}


}

postData();