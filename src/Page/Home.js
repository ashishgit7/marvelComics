import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ComicBoard } from '../components/ComicBoard';
import { useState } from 'react';
import CharacterProfile from '../components/CharacterProfile';
import Navbar from '../components/Navbar';

const charID = ["1009610", "1009368", "1009664", "1009220", "1009189", "1010801", "1009351", "1009718", "1009187","1009338","1009282","1009471"]

export const Home = () => {
    const [ids, setId] = useState([])
    const [title, setTitle] = useState('')
    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    const charactersFilter = (id) => {
        if (!ids.includes(id)) {
            setId(ids => [...ids, id])
        }
        else {
            var filterId = ids.filter(elem => elem != id)
            setId(filterId)
        }
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3
    };
    return (
        <>
            <Navbar title={title} handleChange={handleChange} />
            <div className='w-full px-12 bg-slate-800'>
                <Slider {...settings}>
                    {charID.map((hero, id) => (
                            <CharacterProfile key = {id} Id = {hero} charactersFilter={charactersFilter} />
                        ))}
                </Slider>
            </div>
            <div className='h-screen '>
                <ComicBoard ids={ids} title={title} />
            </div>
        </>
    )
}
