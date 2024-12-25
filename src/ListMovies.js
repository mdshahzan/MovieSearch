import React from 'react'
import { Link } from 'react-router-dom'

function ListMovies({popularMovies}) {
  return (
    <div className='popular-container'>
    <h1>What's Popular</h1>
    <div className='sliding'>
      {popularMovies.length > 0 && popularMovies.map((item, i) => {
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

export default ListMovies
