import React from 'react'
import Nav from './Nav'
import Img from './logo_dud.png'
const Header = () => {
    const Contact = ()=>{
        console.log('dead link');
    }
    return (
        <header className='header'>
            <img src={Img} alt='ecci'id='img'/>
            <Nav />
            <button id='special' onClick={Contact}>Contact</button>
        </header>
    )
}

export default Header
