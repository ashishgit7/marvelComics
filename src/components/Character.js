import React from 'react'

const Character = ({ handleEvent, hero,toggle }) => {
    return (
        <div className='relative py-4 hover:scale-125' onClick={handleEvent} title="hero">
            <img className={` ${toggle ? ' ' : 'brightness-75 scale-90 border-2 border-sky-500 '} rounded-full h-[100px] w-[100px] m-auto`} src={`${hero.thumbnail.path}/portrait_xlarge.jpg`}>
            </img>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={` ${toggle ? 'hidden' : ' '}  w-12 h-12 text-blue-300 absolute top-[42%] left-[42%]`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
        </div>
    )
}

export default Character