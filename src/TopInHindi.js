import React from 'react'
import { Link } from 'react-router-dom'

function TopInHindi({topInHindi}) {
  return (
    <div style={{marginTop:"40px",marginBottom:"40px"}} className='popular-container'>
    <h1>Top Hindi</h1>
    <div className='sliding'>
      {topInHindi.length > 0 && topInHindi.map((item, i) => {
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

export default TopInHindi
