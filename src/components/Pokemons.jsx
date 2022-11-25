import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import InputSearch from './InputSearch';
import Pagination from './Pagination';
import PokemonCard from './PokemonCard';
import SelectByType from './SelectByType';
import "./styles/pokemons.css"
import img from "../../public/pokedex-logo.png"

const Pokemons = () => {

    const[pokemonList, setPokemonList]=useState([])
    const username = useSelector(state => state.name)
    const[selectedType, setSelectedType]=useState("All pokemons")
    const navigate = useNavigate()

    useEffect(()=>{
        if(selectedType!=="All pokemons"){
          axios.get(selectedType)
        .then(res=>{
            const result = res.data.pokemon.map(e => e.pokemon)
            setPokemonList(result)
            })  
        }else{
            axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
            .then(res=>setPokemonList(res.data.results))
        }
        
    },[selectedType])

    const [page, setPage] = useState(1)
    const pokePerPage = useSelector(state => state.num)
    const initialPoke = (page-1)*pokePerPage
    const finalpoke = page * pokePerPage

    const goToConfig=()=>{
        navigate("/config")
    }

    return (
        <div className='Pokemons_container'>
            <div className='Img_header'>
                <Link to={"/"}><img src={img} alt="" /></Link>
                
            </div>

            <div className='Welcome_text'>
                <p><span>Welcome {username}</span>, here you can found your favourites pokemons!</p>
            </div>
    
            <div className='Input_section'>
                <InputSearch/>
                <motion.button 
                whileHover={{rotate: [0,360],}}
                exit={{ rotate: [360,0]}}
                transition={{duration:1}}
                className='Config_btn' onClick={goToConfig}><i className="fa-solid fa-gear"></i></motion.button>
                <SelectByType setSelectedType={setSelectedType} setPage={setPage}/>  
            </div>
           
           <div className='Card_container'>
                {
                    pokemonList?.slice(initialPoke, finalpoke).map(pokemon=>(
                        <div key={pokemon.name}>
                            <PokemonCard  url={pokemon.url}/>
                        </div>
                    ))
                }
           </div>
           
           <Pagination
           page={page}
           pagesLength={pokemonList && Math.ceil(pokemonList.length / pokePerPage)}
           setPage={setPage}/>
        </div>
    );
};

export default Pokemons;