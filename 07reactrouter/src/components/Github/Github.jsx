import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
const data = useLoaderData()
// const [data, setData] = useState([])

    // useEffect(() => {
    //  fetch('https://api.github.com/users/er-yogesh-deshmane1008') 
    //  .then(Response => Response.json())
    //  .then(data => {
    //   console.log(data);
    //   setData(data)
    //  })
    // }, []);


  return (
    <>
    <div className='text-center
     text-white 
    p-4 text-3xl
     bg-gray-700'>Github followers: {data.followers}
    <center><img src={data.avatar_url} alt="Git picture" width=
     {300}></img></center>  </div>
    </>
    
  )
}

export default Github

export const githubInfoLoader = async () =>{
   const response = await  fetch('https://api.github.com/users/er-yogesh-deshmane1008')
   return response.json()
}