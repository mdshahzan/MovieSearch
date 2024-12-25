import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Cast() {
    let {castId} = useParams()
    let [castInfo , setCastInfo] = useState(null)
    console.log(castId)
  const key = "d22bf07acb8f59af1b43fecbc641c4d9";


useEffect(()=>{
axios.get(`https://api.themoviedb.org/3/person/${castId}?api_key=${key}`)
.then((res)=>{
    console.log(res.data)
    setCastInfo(res?.data)
})
},[castId])

  return (
    <div style={{marginTop:"90px"}}   className='popular-container related'>
        <img style={{borderRadius:"20px"}} src= {`https://image.tmdb.org/t/p/w500/${castInfo?.profile_path}`}/>
        <div className='cast-info'>
            <h2 style={{color:"white",fontWeight:"bold"}}>{castInfo?.name} ({castInfo?.birthday}) : </h2> 
            <p style={{color:"white",marginTop:"30px",fontSize:"20px",fontWeight:"600"}}>{castInfo?.biography}</p>
        </div>



    </div>
  )
}

export default Cast
