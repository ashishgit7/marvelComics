import React from 'react'
import { Link } from 'react-router-dom'

const ComicProfile = ({ data }) => {
    console.log(data)
    return (
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-2 lg:px-20 md:px-10 mb-5 '>
            {data.map(comic => (
               <Link to={`/comic/${comic.id}`}> <div  className='basis-3/12 h-full hover:scale-125 duration-200	' key={comic.id} title="comicInfo">
                    <div className='max-w-[15rem] h-full rounded overflow-hidden shadow-lg m-auto'>
                        <img className="w-full" src={`${comic.thumbnail ? comic.thumbnail.path : "ran"}/portrait_xlarge.jpg`}>
                        </img>
                        <div className='flex justify-between px-2 bg-stone-800 h-full'>
                            <div className='text-white'>
                                {comic.title}
                            </div>
                            <div className='text-red-600'> #{comic.issueNumber}</div>
                        </div>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    )
}

export default ComicProfile