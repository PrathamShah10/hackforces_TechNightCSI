import React, { useState, useEffect } from 'react'

export const Landingpage = () => {
  const [stat, setStat] = useState("");
  useEffect(() => {
    fetch()
      .then(res => res.json())
      .then((result) => {
        setStat(result);
      })
  }, [])
  return (
    <>
      <h2>{stat.title}</h2>
      Our motto: <h4>{stat.goal}</h4>
      
    </>
  )
}
