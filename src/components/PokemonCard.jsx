import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import "./styles/PokemonCard.css"
import img from "../../public/heart.png"
import img2 from "../../public/sword.png"
import img3 from "../../public/castillo.png"

const PokemonCard = ({url}) => {

    const[pokemon, setPokemon]=useState({})
    
    useEffect(()=>{
        axios.get(url)
        .then(res=>setPokemon(res.data))
    },[])

    const navigate = useNavigate()

    const goToDetail=()=>{
        navigate(`/pokemons/${pokemon?.id}`)
    }

    console.log(pokemon);
    return (
        <motion.article 
        whileHover={{scale:1.05}}
        whileTap={{scale:0.9}}
        transition={{ type: "tween"}}
        className={`Card border_${pokemon?.types?.[0].type.name}`} onClick={goToDetail}>
            <div className={`Card_img ${pokemon?.types?.[0].type.name}`}>
                <div className="Card_img_content">
                    <img src={pokemon?.sprites?.other["dream_world"].front_default} alt="" /> 
                </div>  
            </div>
            <div className='Card_nme'>
                <h2>{pokemon?.name}</h2>
                <ul>
                    {
                        pokemon?.types?.map(type=>(
                        <li key={type.type.name}>{type.type.name}</li>
                        ))
                    }  
                </ul>
                <p>TYPE</p>
            </div>
            <div className='Card_stats'>
                <div className='Card_stats_container'>
                    <img src={img} alt="" />
                    <p>HP <br /> <span>{pokemon?.stats?.[0].base_stat}</span>
                    </p></div>
                <div className='Card_stats_container'>
                    <img src={img2} alt="" />
                    <p>POW <br /> <span>{pokemon?.stats?.[1].base_stat}</span>
                    </p></div>
                <div className='Card_stats_container'>
                    <img src={img3} alt="" />
                    <p>DEF <br /> <span>{pokemon?.stats?.[2].base_stat}</span>
                    </p></div>
            </div> 
        </motion.article>
    );
        
       
};

export default PokemonCard;