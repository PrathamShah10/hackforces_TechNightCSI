import React from 'react'
import './css/Description.css'

const Description = (props) => {
    return (
        <>
        <div className="des">
        <h2>{props.desc}</h2>
        </div>
        </>
    )
}

export default Description