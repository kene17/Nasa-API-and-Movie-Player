import React from 'react'
import IMDBComponents from './IMDBComponents'

const Card = (props) => {
    return (
        <div>
            <img src={props.poster} alt={props.title} />
            <div>
                <h1>{props.title}</h1>
                <p>{props.year} {props.type}</p>
                
            </div>
        </div>
    )
}

export default Card
