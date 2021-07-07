import React from 'react'
import PropTypes from 'prop-types'

const Nav = props => {
    const Button1= () => {
        console.log('you have clicked on link num: 1');
    }
    const Button2= () => {
        console.log('you have clicked on link num: 2');
    }
    const Button3= () => {
        console.log('you have clicked on link num: 3');
    }
    return (
   <nav>
        <ul className='nav_links'>
            <li><a onClick={Button1} href="src/components/logo_dud.png">features</a></li>
            <li><a onClick={Button2} href="/src/components/logo_dud.png">home</a></li>
            <li><a onClick={Button3} href="src/components/logo_dud.png">about</a></li>
        </ul>
    </nav>
        
    )
}

Nav.propTypes = {
    Button1: PropTypes.string,
    Button2: PropTypes.string,
    Button3: PropTypes.string,
    Contact: PropTypes.string,
}

export default Nav;
