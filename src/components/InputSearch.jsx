import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles/inputSearch.css"

const InputSearch = () => {

    const navigate = useNavigate()

    const submit= e =>{
        e.preventDefault()
        navigate(`/pokemons/${e.target.search.value.trim().toLowerCase()}`)
    }
    return (
        <form className='Form' onSubmit={submit}>
            <input className='Input' type="text" id='search' placeholder='Search a pokemon by name'/>
            <button className='Input_btn'><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    );
};

export default InputSearch;