import React, { useState} from 'react'
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import data from './jsondata/randomPics.jsx'


const ImgSwap = () => {
     const [Dick, setDick] = useState(0)
    const Next=()=>{
        setDick(Dick + 1)
    }
    const Previous=()=>{
        setDick(Dick -1)
    }
     if ( data[Dick].url === data[data.length-1].url){console.log('sawd');}
    return (
        <div className='content'>
            <div className='previous'>{data[Dick].url === data[0].url ?'' :<FaArrowLeft size={50}onClick={Previous}/>}</div>
            <div className='content-img'>
                <img className='main-img'src={data[Dick].url} alt='eat shot'/>
            </div>
            <div className='next'>{data[Dick].url === data[data.length-1].url ?'': <FaArrowRight size={50} onClick={Next}/>}</div>
        </div>
    )

}
export default ImgSwap
