"use client"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import React from 'react'

const page = () => {

  const notify=()=>{
    console.log("Hello Iram");
    //toast("Login successfully")
    toast.success('🦄 Wow so easy!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      //transition: Bounce,
      });
  }

  return (
    <div>
      <button onClick={notify}>Login</button>
      <ToastContainer />
    </div>
  )
}

export default page


// import  {myContext}  from '@/Helper/Context'
// import React, { useContext } from 'react'

// const page = () => {
//   const ok=useContext(myContext)
//   console.log(ok);
//   return (
//     <div>
//       This is home page{ok}
//     </div>
//   )
// }

// export default page





// "use client"
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import Link from 'next/link'


// const page = () => {
// const [users,setusers]=useState([])
// const getUsers= async ()=>{
//   try{
//     let data= await axios.get("https://jsonplaceholder.typicode.com/users")
//   .then((response)=>{
//    console.log(response.data)
//    setusers(response.data)
//   })}
//   catch(err){
//     console.error(err);
//   }
// }
// useEffect(()=>{
//   getUsers()
// },[])
//  return (
//     <>
//     <button  onClick={getUsers} className='bg-green-600 text-white rounded font-bold'>Get Data</button>
//     <div className='p-8 bg-slate-100 mt-5'>
//     <ul>  {
//         users.map((ele)=>(
//       <li key={ele.id}>{ele.username}  --- <a href={`/${ele.id}`}> Explore</a></li>
//         ))
//       }</ul>
//     </div>
//     </>
//   )
// }

// export default page
