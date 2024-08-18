// "use client"
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'



// const page = ({params}) => {
//    // console.log(params.id)
//    const {id}=params;

//    const [users,setusers]=useState([])
//    const getUsers= async ()=>{
//      try{
//        let data= await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
//      .then((response)=>{
//       console.log(response.data)
//       setusers(response.data)
//      })}
//      catch(err){
//        console.error(err);
//      }
//    }
//    useEffect(()=>{

//      getUsers()
//    },[])

//   return (
//     <div>
//       {JSON.stringify(users)}
//     </div>
//   )
// }

// export default page



// "use client"
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'



// const page = ({params}) => {
//    // console.log(params.id)
//    const {id}=params;

//    const [users,setusers]=useState("")
//    const getUsers= async ()=>{
//      try{
//        let data= await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
//      .then((response)=>{
//       console.log(response.data)
//       setusers(response.data.username)
//      })}
//      catch(err){
//        console.error(err);
//      }
//    }
//    useEffect(()=>{
//      getUsers()
//    },[])

//   return (
//     <div>
//       page {id}  {users}
//     </div>
//   )
// }

// export default page
