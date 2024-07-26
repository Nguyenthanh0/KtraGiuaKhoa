import React from 'react'
import './Card.css'

function Card(Props) {
  return (
    <div>
        <img src={Props.img} alt="" />
        <div className='massage'>
            <h2>Weather With You</h2>
            <p> Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. </p>
        </div>
        
    </div>
  )
}

export default Card