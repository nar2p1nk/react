import React, {useState} from 'react'
import {data} from './randomPics.jsx'
import TinderCard from 'react-tinder-card'
import './Cards.css'
const Cards = () => {
    const [People, setPeople] = useState(data)
    return (
        <div classname='tits'>
            <div className='card-container'>
            
            {People.map((Pic)=>{
                const {name,url} =Pic
                return(

            <TinderCard
            className='tinderCard'
            onCardLeftScreen={()=>{'card has left the screen'}}
            preventSwipe={['right','left',]}
            >
              <div
                style={{backgroundImage:`url(${url})`}}
                className='cardI'
              >
                  <h3>{name}</h3>
              </div>
            </TinderCard>
                 )
                })}
                </div>
        </div>
    )
}

export default Cards
