// const Promises=new Promises((resolve,reject)=>{
//     let foodReady=true;
//     if(foodReady){
//         resolve("Food Is Ready");
//     }
//     else{
//         reject("Food Not Ready");
//     }
// })
// foodorder
//     .then((result)=>console.log(result))
//     .then((error)=>console.log(error))

 const getUsers=async()=>{
    console.log("Fetching the user")
    const respones=await fetch ('https://jsonplaceholder.typicode.com/users')
    const data=await response.json()
    const emails=data.map((n)=>n.email)
    console.log(data);
}
getUsers()