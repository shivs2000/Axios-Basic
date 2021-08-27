const axios=require('axios').default;
const deleteData=async()=>{
    try{
     const res=await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
     console.log(res.data);
    }
    catch(e){

        console.log(e);
    }

}
deleteData();



//The axios.delete() function only needs the URL of the resource we want to remove. 
//Executing this program displays {} in the terminal: