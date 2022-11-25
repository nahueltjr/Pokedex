import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/name.slice';
import "./styles/firstPage.css"
import img from "../../public/charizard.png"
import img2 from "../../public/pokedex-logo.png"
import { motion } from 'framer-motion';

const InputName = () => {
    const[userName, setUserName] = useState("")
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const enterName = () =>{
        dispatch(changeName(userName))
        navigate("/pokemons")
    }

    const goToConfig=()=>{
        navigate("/config")
    }

    return (
        <div className='First_page'>
            <motion.div className='First_page_input'
                initial={{opacity:0}}
                transition={{duration:1}}
                animate={{opacity:1}}>
                <img src={img2} alt="" />
                <h2>Hi trainer!</h2>
                <p>Enter your name to continue...</p>
                <div className='First_page_input_content'>
                    <div><input type="text" placeholder='Enter name...'
                  onChange={e=>setUserName(e.target.value)}
                  value={userName}/></div>
                    <div>
                        <button onClick={enterName}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>        
            </motion.div>
                
            <div className='First_page_img'>
                <motion.img initial={{opacity:0, x:-100}}
                transition={{duration:.8,delay: .8}}
                animate={{x:0, opacity:1}} 
                src={img} alt="" />
                <motion.button
                whileHover={{
                    rotate: [0,360],
                }}
                exit={{ rotate: [360,0]}}
                transition={{duration:1}}
                className='Config_btn' onClick={goToConfig}>
                    <i className="fa-solid fa-gear">
                </i></motion.button>
            </div>
            
        </div>
    );
};

export default InputName;