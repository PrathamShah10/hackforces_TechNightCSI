import React, { useState, useEffect } from 'react'
import "./css/Landingpage.css"
export const Landingpage = () => {
  const [stat, setStat] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user._id
    fetch(`/getngodata/${id}`, {
      method: 'get'
    })
      .then(res => res.json())
      .then((result) => {
        setStat(result);
      })
  }, [])
  return (
    <>
      <div className="content"> 
        <div className='Nav'>
          <h3>{stat[0]?.name}</h3>
        </div>
        <div className="lrcontent">
          <div className="left_content">
            <div className="messagee">Want to DONATE ? <br />We Can Help!</div>
            <div className="desss">
              <h1>{stat[0]?.desc}</h1>
            </div>


          </div>
          <div className="right_content">
            <img src="./ngo.png" alt="" />
          </div>
        </div>
      </div>
      <div className="goalm">OUR GOAL</div>
      <hr />
      <div className="goal">
        <h3>{stat[0]?.goal}</h3>
      </div>

      <div className='contact'>
        <h1>CONTACT US -{stat[0]?.contact}</h1>
      </div>

    </>
  )
}
