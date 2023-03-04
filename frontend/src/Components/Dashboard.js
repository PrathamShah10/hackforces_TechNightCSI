import React from 'react'
import "./css/Dashboard.css"
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import Display from './Display';
// import { use } from '../../../backend/routes/details';
export const Dashboard = () => {

    const [eve, seteve] = useState([])
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [act, setAct] = useState([]);
    const [display, setDisplay] = useState(false);
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

    const readevent = () => {
        const useris = JSON.parse(localStorage.getItem("user"));
        const userid = useris._id
        fetch(`/getwebdata/${userid}`, {
            method: 'get'
        })
            .then(res => res.json())
            .then((result) => {
                console.log("ara result", result)
                seteve(result)
            })
        // seteve(even)
    }
    // console.log(eve)

    useEffect(() => {
        readevent();

    }, []);

    const renderCard = (card, index) => {
        return (
            <>
                <Card className="Card" style={{ width: '15rem', height: '16rem',  color: 'white'}} key={index}  onClick={
                    ()=>{
                        setTitle(card.title)
                        setDesc(card.desc)
                        setAct(card.actDetails)
                        setDisplay(true)
                    }
                }>
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>
                            {card.desc}
                        </Card.Text>

                    </Card.Body>
                    {/* <Button id="CardButton" variant="primary">VOTE</Button> */}
                </Card>
            </>
        )
    }

    return (
        <>
            {
                display
                    ?
                    <Display color={"pink"} title={title} desc={desc} actDetails={act} />
                    :
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
                            <hr />
                            <div className="past_events">
                                past events
                            </div>
                        </div>
                    </>
            }

        </>
    )
}