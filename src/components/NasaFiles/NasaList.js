import React from 'react'
import NasaItem from './NasaItem'
const NasaList = (props) => {
    return (
        <ul>
        {props.dataList.map((data) =>(
            <NasaItem  title={data.title} explanation={data.explanation}  image={data.image} date={data.date} />
        ))}
            
        </ul>
    )
}

export default NasaList
