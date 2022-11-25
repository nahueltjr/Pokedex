import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pokemon404 from './Pokemon404';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import "./styles/pokemonDetail.css"
import img from "../../public/pokemon-logo.svg"
import img2 from "../../public/heart.png"
import img3 from "../../public/sword.png"
import img4 from "../../public/castillo.png"
import img5 from "../../public/speed.png"
import img6 from "../../public/nucleo.png"
import img7 from "../../public/poder.png"

const PokemonDetail = () => {

    const { id }= useParams()
    const [pokemon, setPokemon] = useState({})
    const [hasError, setHasError] = useState(false)

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res=>setPokemon(res.data))
        .catch(err=>{
            console.log(err)
            setHasError(true)})
    },[])

    console.log(pokemon);

    if (hasError) return <Pokemon404/>

    return (
        <article className={`Article ${pokemon?.types?.[0].type.name}`}>
            <header>
                <Link className="Link_btn" to={"/pokemons"}><i className="fa-solid fa-arrow-left"></i></Link>
            </header>
            <div className='Pokemon_logo'>
                <img src={img} alt="" />
            </div>
            <div className='Pokemon_desc'>
                <div className='Pokemon_img'>
                    <motion.img
                     drag
                     dragConstraints={{ left: 5, right: 5 ,top:5, bottom:5}}
                     dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                     dragElastic={0.3}
                    src={pokemon?.sprites?.other["dream_world"].front_default} alt="" />
                </div>
                <div className='Pokemon_nme'>
                    <h2 className={`border_${pokemon?.types?.[0].type.name}`}>{pokemon?.name} <span>#{pokemon?.id}</span></h2>
                </div>
                <div className='Pokemon_det'>
                    <p className={`border_${pokemon?.types?.[0].type.name}`}>WEIGHT: <span>{pokemon?.weight} Hg</span> </p>
                    <p className={`border_${pokemon?.types?.[0].type.name}`}>HEIGHT: <span>{pokemon?.height} Dc</span> </p>
                </div>
            </div>

            <div className='Pokemon_chars_container'>
                <div className='Pokemon_chars'>
                   <div className={`Pokemon_type border_${pokemon?.types?.[0].type.name}`}>
                    <div className='Pokemon_type_desc'>
                      <h3>TYPE</h3>
                      <img src={img6} alt="" />  
                    </div>
                   
                    <ul>
                        {
                            pokemon?.types?.map(type=>(
                                <li key={type.type.name}>{type.type.name}</li>
                            ))
                        }  
                    </ul> 
                </div>

                <div className={`Pokemon_ab border_${pokemon?.types?.[0].type.name}`}>
                    <div className='Pokemon_type_desc'>
                      <h3>ABILITIES</h3> 
                      <img src={img7} alt="" />
                    </div>
                    
                    <ul>
                        {
                            pokemon?.abilities?.map(ability=>(
                                <li key={ability.ability.name}>{ability.ability.name}</li>
                            ))
                        }  
                    </ul> 
                </div> 
                </div>
                

                <div className={`Pokemon_stats border_${pokemon?.types?.[0].type.name}`}>
                    <div>
                        <h3>STATS</h3>
                    </div>
                    <div className='Pokemon_stats_content'>
                        <div className='Stats'><img src={img2} alt="" /> HP: {pokemon?.stats?.[0].base_stat}</div>
                        <div className='Stats'><img src={img3} alt="" /> Attack: {pokemon?.stats?.[1].base_stat}</div>
                        <div className='Stats'><img src={img4} alt="" /> Defense: {pokemon?.stats?.[2].base_stat}</div>
                        <div className='Stats'><img src={img5} alt="" /> Speed: {pokemon?.stats?.[5].base_stat}</div>
                    </div>
                </div>

            </div>

            

            <div className={`Pokemon_moves border_${pokemon?.types?.[0].type.name}`}>
                <h3>MOVES</h3>
                <ul>
                        {
                            pokemon?.moves?.map(move=>(
                                <li key={move.move.name} className={`${pokemon?.types?.[0].type.name}`}>{move.move.name}</li>
                            ))
                        }  
                </ul> 
            </div>
            
        </article>
    );
    
};

export default PokemonDetail;