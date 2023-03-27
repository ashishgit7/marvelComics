import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router'
import {getHash} from '../utils/utils'
import { useQuery } from 'react-query';
import axios  from 'axios';
import Loader from '../components/Loader';

const ComicDescription = () => {
    const param = useParams()
    const getURL=()=>{
        let API_URL = process.env.REACT_APP_API_URL
        let heroUrl = `${API_URL}/v1/public/comics/${param.ID}`;

        let ts = Date.now().toString();
        let apiKey = process.env.REACT_APP_PUBLIC_KEY
        let privateKey = process.env.REACT_APP_PRIVATE_KEY

        let hash = getHash(ts, privateKey, apiKey);
        var tempURL = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`
        return tempURL

    }

    const fetchData = () => {
        var url = getURL()
        return axios.get(url)
    }
    
    const { isLoading,isError, data } = useQuery([`comic-${param.ID}`], fetchData)
    if(!isLoading)
    console.log(data)
    if(isLoading){
        return <Loader/>
    }
    else if(isError){
        return (<> Error </>)
    }
    console.log(data)
    var image = data.data.data.results[0].thumbnail.path
    var characterList = data.data.data.results[0].characters.items
    var desc = data.data.data.results[0].description
    desc = desc ? "NA":desc
    var title = data.data.data.results[0].title
    console.log(characterList)
    // const param = useParams()
    // console.log(param)
  return (
    <>
    <Navbar/>
    <div className='text-center text-6xl text-red-600 bg-black py-2'>
        {title}
    </div>
    <div className='flex'>
        <div className='basis-1/3 mt-8'>
            <img className = "m-auto w-72 rounded-lg" src={`${image}/portrait_xlarge.jpg`} />
            
        </div>
        <div className='basis-2/3 mt-8'>
            <div className='text-xl'> Character List</div>
            <div className='grid grid-cols-4 gap-2 mt-2 px-5 '>
            {
                characterList.map((character)=>{
                return <div className='text-white bg-black px-2 rounded-lg text-center '>{character.name}</div>
                })
            }
            </div>
            <div className='mt-2'>
            <div className='text-xl'> Description</div>
            <div>{desc}</div>
            </div>
        </div>

    </div>
    </>
  )
}

export default ComicDescription