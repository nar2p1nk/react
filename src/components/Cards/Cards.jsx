import React, {useState} from 'react'
import {data} from './randomPics.jsx'
import TinderCard from 'react-tinder-card'
import './Cards.css'
const Cards = () => {
    const [People, setPeople] = useState(data)
    return (
        <div classname='nokos'>
            <div className='card-container'>
            
            {People.map((Pic)=>{
                const {name,url} =Pic
                return(

            <TinderCard
            className='tinderCard'
            onCardLeftScreen={()=>{'card has left the screen'}}
            preventSwipe={['up','down',]}
            >
              <img
                src={url}
                className='cardI'
              />
            </TinderCard>
                 )
                })}
                </div>
        </div>
    )
}

export default Cards
