import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { useQuery } from 'react-query';
import ComicProfile from './ComicProfile';
import Loader from './Loader';
import {getHash} from '../utils/utils'
 


export const ComicBoard = ({ ids, title, heroName }) => {
    const [offset, setOffset] = useState(0)
    let API_URL = process.env.REACT_APP_API_URL
    let heroUrl = `${API_URL}/v1/public/comics`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_PUBLIC_KEY
    let privateKey = process.env.REACT_APP_PRIVATE_KEY

    let hash = getHash(ts, privateKey, apiKey);
    const getURL = () => {
        var tempURL = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`
        
        // if marvel heroes are selected
        if (ids.length != 0) {
            tempURL = `${tempURL}&characters=`
            ids.forEach(ele => {
                tempURL = `${tempURL}${ele}%2C`
            });
            tempURL = tempURL.substring(0, tempURL.length - 3)
        }
        // if searched by title
        if (title != '')
            tempURL = `${tempURL}&titleStartsWith=${title}`

        tempURL = `${tempURL}&offset=${offset}`
        return tempURL
    }
    
    const fetchData = () => {
        var url = getURL()
        return axios.get(url)
    }
    
    const { isLoading,isError, data } = useQuery(['marvel', ids, title, offset], fetchData) // fetching comics
    
    const getPageCount = () =>{
        var tot = data.data.data.total
        var pageCount = Math.ceil(tot/20)
        return pageCount
    }

    const handlePageClick = (event) => {
        var page = event.selected
        var comicOffset = (page) * 20
        setOffset(comicOffset)
    };
    if (isLoading) {
        return (
            <Loader/>
        )
    }
    else if(isError){
        return (
        <div className='text-center'>System error</div>
        )
    }
    else
    return (
        <div className='p-8 bg-slate-900'>
            <div className='flex justify-between mx-8 my-4 '>
                <div className='flex text-white gap-2'>
                    {heroName.length>0 && <p>Explore - </p>}
                    {heroName.map((name)=>{
                       return <p>{name} , </p>
                    })}
                </div>
            <button onClick={()=> window.location.reload(false)} className='bg-white px-2 rounded-sm'> Clear All filter</button>
            </div>
            <ComicProfile data = {data.data.data.results}/>
            <ReactPaginate
                breakLabel="..."
                nextLabel=" >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={getPageCount()}
                previousLabel="< "
                renderOnZeroPageCount={null}
                forcePage = {offset/20 }
                containerClassName={"px-2 pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}

            />
        </div>
    )
}
