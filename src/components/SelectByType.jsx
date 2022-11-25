import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./styles/selectType.css"

const SelectByType = ({setSelectedType, setPage}) => {

    const[typesList, setTypesList]=useState([])

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/type")
        .then(res=>setTypesList(res.data.results))
    },[])

    const handleChange = e =>{
        setSelectedType(e.target.value);
        setPage(1)
    } 

    return (
        <select className='SelectPoke' onChange={handleChange}>
            <option value="All pokemons">All pokemons</option>
            {
                typesList?.map(type=>(
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))
            }
        </select>
    );
};

export default SelectByType;