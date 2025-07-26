import React from 'react'
import appwriteService from '../appwrite/mainConfig'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/path/${$id}`}>
        <div className="w-full bg-gray-500 rounded-xl p-4">
            <div className='w-full justify-center mb-4'>
                <div>
                    <img src={appwriteService.previewFile(featuredImage)} alt={title} className='rounded-xl'/>
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
                
            </div>

        </div>
    </Link>
  )
}

export default PostCard