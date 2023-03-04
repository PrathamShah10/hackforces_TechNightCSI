import React, { useState, useEffect } from 'react'

export const Landingpage = () => {
  const [stat, setStat] = useState("");
  useEffect(() => {
    const user= JSON.parse(localStorage.getItem('user'));
    const id = user._id
    fetch( `/getngodata/${id}`,{
      method:'get'
    })
      .then(res => res.json())
      .then((result) => {
        setStat(result);
      })
  }, [])
  return (
    <>
    <h1>landing page hai vai</h1>
    <h1>name: {stat[0]?.name}</h1>
    <h1>desc: {stat[0]?.desc}</h1>
    <h1>goal: {stat[0]?.goal}</h1>
    <h1>contact: {stat[0]?.contact}</h1>
    </>
  )
}
