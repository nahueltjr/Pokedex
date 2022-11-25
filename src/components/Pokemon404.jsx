import React from 'react';
import { Link } from 'react-router-dom';

const Pokemon404 = () => {
    return (
        <div style={{padding:"1rem", display:"flex",alignItems:"center",gap:"1rem"}}>
          <Link className="Link" to={"/pokemons"}><i className="fa-solid fa-arrow-left"></i></Link>
          <h2>Pokemon Not Found <i className="fa-regular fa-face-frown"></i></h2>
        </div>
    );
};

export default Pokemon404;