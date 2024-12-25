import React from 'react'
import { Link } from 'react-router-dom'

function CurrentlyInTheatre({inTheatre}) {
  return (
    <div style={{marginTop:"40px",marginBottom:"40px"}} className='popular-container'>
    <h1>Currently In Theatre</h1>
    <div className='sliding'>
      {inTheatre.length > 0 && inTheatre.map((item, i) => {
        return (
          <>
          <Link to={`${item.title}/${item.id}`} >
          <div className='sliding-items' key={i}>
            <img className='sliding-cards' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
            <div className="hover-text">{item.title}</div>
          </div>
          </Link>
          </>
        )
      })}
    </div>
  </div>
  )
}

export default CurrentlyInTheatre
