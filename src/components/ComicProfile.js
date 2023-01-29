import React from 'react'

const ComicProfile = ({ data }) => {
    return (
        <div className='grid grid-cols-5 gap-2 px-20 mb-5 '>
            {data.map(comic => (
                <div className='basis-3/12 h-full' key={comic.id} title="comicInfo">
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
            ))}
        </div>
    )
}

export default ComicProfile