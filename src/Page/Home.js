import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ComicBoard } from '../components/ComicBoard';
import { useState } from 'react';
import CharacterProfile from '../components/CharacterProfile';
import Navbar from '../components/Navbar';


// IDs of Marvel Character 
const charID = ["1009610", "1009368", "1009664", "1009220", "1009189", "1010801", "1009351", "1009718", "1009187","1009338","1009282","1009471"]

export const Home = () => {

    const [heroName, setHeroName] = useState([])
    const [ids, setId] = useState([])
    const [title, setTitle] = useState('')

    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    const charactersFilter = (id,name) => {
        console.log(name)
        // if it includes the character ids, remove it
        if (!ids.includes(id)) {
            setId(ids => [...ids, id])
            var tempHeroName = heroName
            tempHeroName.push(name)
            setHeroName(tempHeroName)
        }
        else {
            var filterId = ids.filter(elem => elem != id)
            var filterHeroName = heroName.filter(elem => elem!=name)
            setId(filterId)
            setHeroName(filterHeroName)
        }
    };
    // setting for caroussel
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <>
            <Navbar title={title} handleChange={handleChange} />
            <div className='w-full px-12 bg-slate-800'>
                <Slider {...settings}>
                    {charID.map((hero, id) => (
                            <CharacterProfile key = {id} Id = {hero} charactersFilter={charactersFilter}  />
                        ))}
                </Slider>
            </div>
            <div className=''>
                {/* <div className="px-8 bg-white m-8" onClick={()=>setFilter(!filter)}> clear filter</div> */}
                <ComicBoard ids={ids} title={title} heroName={heroName}/>
            </div>
        </>
    )
}
