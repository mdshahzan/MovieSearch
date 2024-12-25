import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Movies({moviekey}) {
    let [movieData , setMovieData] = useState([])
    let [ratedMovie,setRatedMovie] = useState([])
    let [hindiMovies , setHindiMovies] = useState([])
    let [moreHindi,setMoreHindi] = useState([])
    let [moreComedy , setMoreComedy] = useState([])
    console.log(moviekey)
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${moviekey}&language=en-US`)
        .then((res)=>{
          setMovieData(res?.data?.results) 
          console.log(res)  
          
        })
      },[])
      useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${moviekey}&language=hi-IN`)
        .then((res)=>{
          setRatedMovie(res?.data?.results)
        })
      },[])
      useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/tv/1396/recommendations?api_key=${moviekey}&page=1`)
        .then((res)=>{
          setHindiMovies(res?.data?.results)
          console.log(res) 
        })
      },[])
      useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/tv/19885/recommendations?api_key=${moviekey}&page=1`)
        .then((res)=>{
            setMoreHindi(res?.data?.results)
             
        })
    },[])
    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/tv/1668/recommendations?api_key=${moviekey}&page=1`)
      .then((res)=>{
          setMoreComedy(res?.data?.results)
           
      })
  },[])
    
  return (
    <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
    <div style={{marginTop:"90px"}} className='popular-container'>
    <h1 style={{display:"block"}}>What's Popular</h1>
    <div style={{width:"100%"}} className='sliding'>
      {movieData.length > 0 && movieData.map((item, i) => {
        return (
          <>
          <Link to={`${item.name}/${item.id}`} >
          <div className='sliding-items' key={i}>
            <img className='sliding-cards' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
            <div className="hover-text">{item.name}</div>
          </div>
          </Link>
          </>
          
        )
      })}
    </div>
    </div>
    <div style={{marginTop:"40px"}} className='popular-container'>
    <h1 style={{display:"block"}}>Top Rated Movies</h1>
    <div style={{width:"100%"}} className='sliding'>
      {ratedMovie.length > 0 && ratedMovie.map((item, i) => {
        return (
          <>
          <Link to={`${item.name}/${item.id}`} >
          <div className='sliding-items' key={i}>
            <img className='sliding-cards' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
            <div className="hover-text">{item.name}</div>
          </div>
          </Link>
          </>
          
        )
      })}
    </div>
    </div>
    <div style={{marginTop:"40px"}} className='popular-container'>
    <h1 style={{display:"block"}}>Discover More Like "Breaking Bad"</h1>
    <div style={{width:"100%"}} className='sliding'>
      {hindiMovies.length > 0 && hindiMovies.map((item, i) => {
        return (
          <>
          <Link to={`${item.name}/${item.id}`} >
          <div className='sliding-items' key={i}>
            <img className='sliding-cards' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
            <div className="hover-text">{item.name}</div>
          </div>
          </Link>
          </>
        )
      })}
    </div>
    </div>
    <div style={{marginTop:"40px"}} className='popular-container'>
    <h1 style={{display:"block"}}>More In Crime</h1>
    <div style={{width:"100%"}} className='sliding'>
      {moreHindi.length > 0 && moreHindi.map((item, i) => {
        return (
          <>
          <Link to={`${item.title}/${item.id}`} >
          <div className='sliding-items' key={i}>
            <img className='sliding-cards' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
            <div className="hover-text">{item.name}</div>
          </div>
          </Link>
          </>
          
        )
      })}
    </div>
    </div>
    <div style={{marginTop:"40px"}} className='popular-container'>
    <h1 style={{display:"block"}}>More In Drama</h1>
    <div style={{width:"100%"}} className='sliding'>
      {moreComedy.length > 0 && moreComedy.map((item, i) => {
        return (
          <>
          <Link to={`${item.name}/${item.id}`} >
          <div className='sliding-items' key={i}>
            <img className='sliding-cards' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
            <div className="hover-text">{item.name}</div>
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
