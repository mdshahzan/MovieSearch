import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function SearchMovies() {
  let [inpChange, setInpChange] = useState("")
  let [inpSearchMovies , setInpSearchMovies] = useState([])
  let [popularMovies , setPopularMovies] = useState([])
  let [searchSeries , setSearchSeries] = useState([])
  let [popularSeries , setPopularSeries] = useState([])
  const key = "d22bf07acb8f59af1b43fecbc641c4d9";
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${inpChange}`)
    .then((res)=>{
      console.log(res)
      setInpSearchMovies(res?.data?.results)
    })

  },[inpChange]) 
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${key}&query=${inpChange}`)
    .then((res)=>{
      console.log(res)
      setSearchSeries(res?.data?.results)
    })

  },[inpChange]) 
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=1`)
      .then((res) => {
        setPopularMovies(res?.data?.results);    
      });
  }, []);
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${key}&page=1`)
    .then((res) => {
      setPopularSeries(res?.data?.results); 
      console.log(res)   
    });
  },[inpChange])
  

  return (
    <div className='search-container'>
      <input 
      onChange={(e)=>{
        setInpChange(e.target.value)

      }}
      className='search-inp' placeholder='Search for Movies'/>

      {inpSearchMovies.length == 0 && inpChange == '' ?  <div style={{marginLeft:"70px",marginTop:"-20px"}} className='popular-container'>
    <h1>What's Popular in Movies</h1>
    <div className='sliding'>
      {popularMovies.length > 0 && popularMovies.map((item, i) => {
        return (
          <>
          <Link to={`/searchMovie/${item.title}/${item.id}`} >
          <div  className='sliding-items' key={i}>
            <img className='sliding-cards' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
            <div className="hover-text">{item.title}</div>
          </div>
          </Link>
          </>
          
        )
      })}
    </div>
    <h1>What's Popular in Series</h1>
    <div className='sliding'>
      {popularSeries.length > 0 && popularSeries.map((item, i) => {
        return (
          <>
          <Link to={`/series/${item.name}/${item.id}`} >
          <div className='sliding-items' key={i}>
            <img className='sliding-cards' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
            <div className="hover-text">{item.name}</div>
          </div>
          </Link>
          </>
          
        )
      })}
    </div>
  </div> :
  
  
  
  
  
  
  <div style={{marginLeft:"70px", marginTop:"-20px"}}  className='popular-container'>
  <h1>Movie results </h1>
  
  <div className='sliding'>
  {inpSearchMovies.map((item,i)=>{
    
    return(
      <>
          <Link to={`${item?.title}/${item?.id}`} >
          <div  className='sliding-items' key={i}>
            <img  className='sliding-cards' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
            <div className="hover-text">{item.title}</div>
          </div>
          </Link>
          </>
    )
  })}
  
</div> 
<h1>Series results </h1>
  
  <div className='sliding'>
  {searchSeries.map((item,i)=>{
    console.log(item)
    
    return(
      <>
          <Link to={`/series/${item?.name}/${item?.id}`} >
          <div  className='sliding-items' key={i}>
            <img  className='sliding-cards' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
            <div className="hover-text">{item.title}</div>
          </div>
          </Link>
          </>
    )
  })}
  
</div> 
</div>
}



    </div>
  )
}

export default SearchMovies



// https://api.themoviedb.org/3/search/movie?api_key=<YOUR_API_KEY>&query=<MOVIE_NAME>
