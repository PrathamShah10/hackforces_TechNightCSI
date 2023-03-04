import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter, Navigate, Route, Routes, useNavigate, useLocation } from "react-router-dom"
import NavBar from './NavBar';
import Description from './Description';
import Box from './Box';
import "./css/Home.css"

function Home() {
    const [color, setColor] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [displayActive, setDisplayActive] = useState(false);
    const [actTitle, setActTitle] = useState("");
    const [actDesc, setActDesc] = useState("");
    const [count, setCount] = useState(0);
    const [actDetails, setActDetails] = useState([]);
    const [generate, setGenerate] = useState(false);
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    useEffect(() => {
        let arr = actDetails;
        if (actTitle && actDesc) {
            arr.push({
                actTitle,
                actDesc
            })
        }
        setActDetails(arr)
    }, [count])
    const postWeb = () => {
        const useris = JSON.parse(localStorage.getItem("user"));
        const userid = useris._id
        fetch('/putwebdata', {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                desc,
                actDetails,
                userid
            })
        })
            .then(res => res.json())
            .then((result) => {
                console.log("webpage save res", result)
            })
    }
    return (
        <>
            {
                generate
                    ?
                    <>
                        <NavBar color={color} title={title} />
                        <Description desc={desc} />
                        <div className='imgg'>
                            <img src={file} alt="" />
                        </div>
                        <div style={{ display: 'flex', margin: '2rem', flexWrap: 'wrap' }}>
                            {
                                actDetails?.map((ele) => {
                                    return (
                                        <Box color={color} width="100px" height="100px" title={ele.actTitle} desc={ele.actDesc} />
                                    )
                                })
                            }
                        </div>

                        <button onClick={() => postWeb()}>Finalize</button>
                    </>
                    :
                    <>  <div className="main-content">
                        <div className="nav-color">
                            <h1>Select Navbar Color:</h1>
                            <div className="but">
                            <button style={{ backgroundColor: 'black' }} onClick={() => setColor("black")}>Black</button>
                            <button style={{ backgroundColor: 'green' }} onClick={() => setColor("green")}>Green</button>
                            <button style={{ backgroundColor: 'yellow' }} onClick={() => setColor("yellow")}>yellow</button>
                            <button style={{ backgroundColor: 'pink' }} onClick={() => setColor("pink")}>Pink</button>
                            <button style={{ backgroundColor: 'lightblue' }} onClick={() => setColor("lightblue")}>Lightblue</button>
                            <br />
                            </div>
                        </div>
                        <div className="main-info">
                            Add Title: <input type="text" style={{ width: '50%' }} onChange={(e) => setTitle(e.target.value)} />
                            <br />
                            Add Desc: <input type="text" style={{ width: '50%' }} onChange={(e) => setDesc(e.target.value)} />
                            <br />
                            <hr />
                            <h2>Add Image:</h2>
                            <input type="file" onChange={handleChange} />
                            {/* <img src={file} /> */}
                        </div>
                        {
                            displayActive && (
                                <>
                                    <div className="activity">
                                        <h4>Add activity name:</h4>
                                        <input type="text" style={{ width: '50%' }} onChange={(e) => setActTitle(e.target.value)} />
                                        <h4>Add activity description:</h4>
                                        <input type="text" style={{ width: '50%' }} onChange={(e) => setActDesc(e.target.value)} />


                                    </div>
                                    <button id='submitt' className='addActi' onClick={() => {
                                        setDisplayActive(false);
                                        setCount(count + 1);
                                    }}>
                                        Submit
                                    </button>
                                </>
                            )
                        }
                        {
                            !displayActive && (
                                <button className='addActi' onClick={() => setDisplayActive(true)}>Add activities</button>
                            )
                        }
                        <button className='addActi' onClick={(e) => setGenerate(true)}>Preview</button>
                    </div>

                    </>

            }
            {/* <button onClick={localStorage.clear()}>SignOut</button> */}
        </>
    )
}

export default Home;    