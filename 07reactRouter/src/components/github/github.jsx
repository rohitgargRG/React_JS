import React, { useState,useEffect } from 'react'
import {Link , NavLink} from 'react-router-dom'
import { useLoaderData } from 'react-router-dom';


function Github(){
    const data = useLoaderData()
    // const [data , setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/rohitgargRG')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers : {data.followers}

        <img  className='text-center w-xl' src={data.avatar_url} alt="avatar image github"/>
        </div>
    );
}

export default Github;


// for loader

export const githubFollower = async () => {
    const response = await fetch('https://api.github.com/users/rohitgargRG')
        
    return response.json()
    
}