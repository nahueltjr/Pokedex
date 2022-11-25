import React, { useState } from "react";
import { changeNum } from "../store/slices/configNum.slice";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Select from 'react-select'
import "./styles/config.css"

const Config = () =>{

    const dispatch = useDispatch()

    const options = [
        { value: 4, label: '4' },
        { value: 8, label: '8' },
        { value: 12, label: '12' },
        { value: 16, label: '16' }
      ]
      
    const handleOption = value => {
        dispatch(changeNum(value.value))
    }
    
    return (
        <div className="Config_container">
            <div className="Config">
              <Link className="Link" to={"/pokemons"}><i className="fa-solid fa-arrow-left"></i></Link>
              <h2>Settings</h2>  
            </div>
            <div className="Items">
                <p>Items per page</p>
                <Select className="Select" options={options} onChange={handleOption}/>
            </div>
            {/* <div className="Theme">
                <p>Theme</p>
                <button><i className="fa-solid fa-moon"></i></button>
            </div> */}

        </div>
    )
}
export default Config;