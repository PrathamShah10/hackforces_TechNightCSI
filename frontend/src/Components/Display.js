import React from 'react'
import NavBar from './NavBar'
import Description from './Description'
import Box from './Box'
const Display = (props) => {
    return (
        <>
            <NavBar color={props.color} title={props.title} />
            <Description desc={props.desc} />
            {/* <div className='imgg'>
                <img src={file} alt="" />
            </div> */}
            <div style={{ display: 'flex', margin: '2rem', flexWrap: 'wrap' }}>
                {
                    props.actDetails?.map((ele) => {
                        return (
                            <Box color={props.color} width="100px" height="100px" title={ele.actTitle} desc={ele.actDesc} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Display