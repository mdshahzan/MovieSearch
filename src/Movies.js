import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Movies({moviekey}) {
    let [movieData , setMovieData] = useState([])
    let [ratedMovie,setRatedMovie] = useState([])
    let [hindiMovies , setHindiMovies] = useState([])
    let [moreHindi,setMoreHindi] = useState([])
    console.log(moviekey)
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${moviekey}&page=1`)
        .then((res)=>{
            console.log(res) 
            setMovieData(res?.data?.results)   
        })
    },[])
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${moviekey}&page=1`)
        .then((res)=>{
            setRatedMovie(res?.data?.results)
        })  
    },[])
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/611359/recommendations?api_key=${moviekey}&page=1`)
        .then((res)=>{
            setHindiMovies(res?.data?.results)
        })
    },[])
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/11854/recommendations?api_key=${moviekey}&page=1`)
        .then((res)=>{
            setMoreHindi(res?.data?.results)
        })
    },[])
  return (
    <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
    <div style={{marginTop:"80px"}} className='popular-container'>
    <h1 style={{display:"block"}}>What's Popular</h1>
    <div style={{width:"100%"}} className='sliding'>
      {movieData.length > 0 && movieData.map((item, i) => {
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
    <div style={{marginTop:"40px"}}   className='popular-container'>
    <h1 style={{display:"block"}}>Top Rated Movies</h1>
    <div style={{width:"100%"}} className='sliding'>
      {ratedMovie.length > 0 && ratedMovie.map((item, i) => {
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
    <div style={{marginTop:"40px"}} className='popular-container'>
    <h1 style={{display:"block"}}>Discover More In Hindi</h1>
    <div style={{width:"100%"}} className='sliding'>
      {hindiMovies.length > 0 && hindiMovies.map((item, i) => {
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
    <div style={{marginTop:"40px"}} className='popular-container'>
    <h1 style={{display:"block"}}>Just Like Old Times</h1>
    <div style={{width:"100%"}} className='sliding'>
      {moreHindi.length > 0 && moreHindi.map((item, i) => {
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
  
  
    
    </div>
  )
}

export default Movies
