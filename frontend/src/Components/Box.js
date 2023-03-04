import React from 'react'
import './Box.css'
const Box = (props) => {
    return (
        <>
            <div className='cp'>
                <h4><b>{props.title}</b></h4>
                <br/>
                <h6>{props.desc}</h6>
            </div>
        </>
    )
}

export default Box