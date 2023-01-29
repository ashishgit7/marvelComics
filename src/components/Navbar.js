import React from 'react'

const Navbar = ({handleChange,title}) => {
    return (
        <>
            <div className='h-14 w-full bg-red-600 flex justify-around items-center'>
                <div>
                    <img className="w-16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png"></img>
                </div>
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bg-white rounded-l-lg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                    <input className='rounded-r-lg focus:outline-none ' placeholder="Search Title" onChange={handleChange}
                        value={title} />
                </div>
            </div>
        </>
    )
}

export default Navbar