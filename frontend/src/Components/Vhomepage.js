import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card,Button , Row, Col, Container } from "react-bootstrap";

export const Vhomepage = () => {
const [ngo,setNgo] = useState("");
    useEffect(()=>{
        const fetchdata = async ()=> {
            const data = await axios.get("/ngo")
            console.log(data);
            setNgo(data);
        };
        fetchdata();
    },[]);
  return (
    <>
    NGO LIST
    {
        ngo && ngo?.data.map(
            (ngo)=> (
                <Card id={ngo._id} className="Card" style={{ width: '15rem', height: '16rem',  color: 'white'}}>
                    <Card.Body>
                        <Card.Title>{ngo.name}</Card.Title>
                        <Card.Text>
                            {ngo.desc} 
                           
                        </Card.Text>

                    </Card.Body>
                    {/* <Button id="CardButton" variant="primary">VOTE</Button> */}
                    
                     {ngo.email}<br />
                    {ngo.contact}
                </Card>
            ))
    }
    </>
  )
}
