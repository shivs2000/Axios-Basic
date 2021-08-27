const axios=require('axios').default;
const getData=async ()=>{
try {
const res=await axios.get('https://jsonplaceholder.typicode.com/posts');
console.log(res.data);


}catch(e){
    connsole.log(e);
}


}
getData();