import React from 'react'
import "./css/Dashboard.css"
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

export const Dashboard = () => {

    const [eve, seteve] = useState([])
    const navigate = useNavigate()
    let even = [
        {
            name: "Event 1",
            description: "This is event 1"
        },
        {
            name: "Event 2",
            description: "This is event 2"
        }
    ]

    const readevent = async () =>{
        seteve(even)
    }
    console.log(eve)

    useEffect((onload) => {
        readevent();
        
      },[]);

    const renderCard = (card, index) => {
        return (
            <Card className="Card" style={{ width: '15rem', height: '16rem' , color:"black" }} key={index}>
                <Card.Body>
                    <Card.Title>{card.name}</Card.Title>
                    <Card.Text>
                        {card.description}
                    </Card.Text>

                </Card.Body>
                {/* <Button id="CardButton" variant="primary">VOTE</Button> */}
            </Card>
        )
    }

    return (
        <>
            <div className='welcome'>welcome</div>
            <div onClick={() => { navigate('/Home'); }} className="add">
                +
            </div>
            <div className="events">
                <div className="current_events">
                    Current events
                    <div className="Cards">
                        {eve.map(renderCard)}
                    </div>
                </div>
                <div className="past_events">
                    past events
                </div>
            </div>
        </>
    )
}
