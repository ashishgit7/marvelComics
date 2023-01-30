import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios';
import Loader from './Loader';
import Character from './Character';
import { getHash } from '../utils/utils';

const CharacterProfile = ({ Id,charactersFilter }) => {
    const [toggle, setToggle] = useState(true) // for toggling characters inclusion and exclusion
    const handleEvent = ()=>{
        setToggle(!toggle)
        charactersFilter(data.data.data.results[0].id,data.data.data.results[0].name)
    }

    const getURL=()=>{
        let API_URL = process.env.REACT_APP_API_URL
        let url = `${API_URL}/v1/public/characters`;
        let ts = Date.now().toString();
        let apiKey = process.env.REACT_APP_PUBLIC_KEY
        let privateKey = process.env.REACT_APP_PRIVATE_KEY
        let hash = getHash(ts, privateKey, apiKey);
        let heroURL = `${url}/${Id}?ts=${ts}&apikey=${apiKey}&hash=${hash}`
        return heroURL
    }
    const fetchData = () => {
        var url = getURL()
        return axios.get(url)
    }
    
    const { isLoading,isError, data } = useQuery([`marvel${Id}`], fetchData) //fetching marvel character data 

    if(isLoading)
    return (<Loader/>)

    else if(isError){
        return (
        <div className='text-center'>System error (may be due to API Limit Reached)</div>
        )
    }
    else
    return (
        <Character handleEvent={handleEvent} hero = {data.data.data.results[0]} toggle = {toggle}/>
        
    )
}

export default CharacterProfile