import React from 'react'
import './css/Box.css'
const Box = (props) => {
    return (
        <>
            <div className='cp' style={{backgroundColor : props.color}}>
                <h4><b>{props.title}</b></h4>
                <br/>
                <h6>{props.desc}</h6>
            </div>
        </>
    )
}

export default Box