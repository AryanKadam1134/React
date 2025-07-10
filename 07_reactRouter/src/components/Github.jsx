import React from 'react'
import { useLoaderData } from 'react-router-dom'    

export default function Github() {
    const { data } = useLoaderData()
    return (
        <div className='grid gap-4 sm:grid-cols-2 grid-cols-1 bg-gray-500 text-white rounded-lg p-4'>
            <h1 className='sm:col-span-2 items-center'>Id : {data.id}</h1>
            <img className='sm:col-span-1 h-100 w-100' src={data.avatar_url}/>
        </div>
    )

}