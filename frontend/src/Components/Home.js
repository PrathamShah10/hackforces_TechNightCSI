import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter, Navigate, Route, Routes, useNavigate, useLocation } from "react-router-dom"
import NavBar from './NavBar';
import Description from './Description';
import Box from './Box';
function Home() {
    const [color, setColor] = useState("");
    const [title, setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [displayActive,setDisplayActive] = useState(false);
    const [actTitle,setActTitle] = useState("");
    const [actDesc,setActDesc] = useState("");
    const [count,setCount] = useState(0);
    const [actDetails,setActDetails] = useState([]);
    const [generate, setGenerate] = useState(false);
    useEffect(()=> {
        let arr = actDetails;
        if(actTitle&& actDesc) {
            arr.push({
                actTitle,
                actDesc
            })
        }
        setActDetails(arr)
    },[count])
    return (
        <>
            {
                generate
                    ?
                    <>
                        <NavBar color={color} title={title}/>
                        <Description desc={desc}/>
                        <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
                        {
                            actDetails?.map((ele)=> {
                                return(
                                    <Box width="100px" height="100px" title={ele.actTitle} desc={ele.actDesc}/>
                                )
                            })
                        }
                        </div>
                    </>
                    :
                    <>
                        <h1>select color:</h1>
                        <button onClick={() => setColor("black")}>black</button>
                        <button onClick={() => setColor("green")}>green</button>
                        <button onClick={() => setColor("blue")}>blue</button>
                        <button onClick={() => setColor("pink")}>pink</button>
                        <button onClick={() => setColor("black")}>black</button>
                        <br />
                        add title: <input type="text" style={{ width: '25%' }} onChange={(e) => setTitle(e.target.value)} />
                        <br />
                        add desc: <input type="text" style={{ width: '25%' }} onChange={(e) => setDesc(e.target.value)} />
                        <br/>
                        {
                            displayActive && (
                                <>
                                <h4>Add activity name:</h4>
                                <input type="text" onChange={(e)=>setActTitle(e.target.value)}/>
                                <h4>Add activity description:</h4>
                                <input type="text" onChange={(e)=>setActDesc(e.target.value)}/>
                                <button onClick={()=> {
                                    setDisplayActive(false);
                                    setCount(count+1);
                                }}>
                                    Submit
                                </button>
                                </>
                            )
                        }
                        {
                            !displayActive && (
                                <button onClick={()=>setDisplayActive(true)}>Add activities</button>
                            )
                        }
                        <button onClick={(e) => setGenerate(true)}>Preview</button>
                    </>
            }
        </>
    )
}

export default Home;
