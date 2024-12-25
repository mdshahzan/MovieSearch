import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ListMovies from './ListMovies';
import CurrentlyInTheatre from './CurrentlyInTheatre';
import TopInHindi from './TopInHindi';


function PopularMovies() {
  const key = "d22bf07acb8f59af1b43fecbc641c4d9";
  const [popularMovies, setPopularMovies] = useState([]);
  const [inTheatre, setInTheatre] = useState([]);
  const [topInHindi, setTopInHindi] = useState([]);
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=1`)
      .then((res) => {
        setPopularMovies(res?.data?.results);
        const movieIds = res?.data?.results.map(movie => movie.id);
        
      });
  }, []);

  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`)
      .then((res) => {
        setInTheatre(res?.data?.results);
      });
  }, []);

 
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=hi&page=1`)
      .then((res) => {
        setTopInHindi(res?.data?.results);
      });
  }, []);
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/299536/videos?api_key=${key}`)
    .then((res)=>{
      console.log(res.data.results)
      setTrailers(res?.data?.results)
    })

  },[])
  return (
    <>
      <ListMovies popularMovies={popularMovies} />
      <CurrentlyInTheatre inTheatre={inTheatre} />
      <TopInHindi topInHindi={topInHindi} />
      <div className='popular-container'>
    <h1>Popular Trailers</h1>
    <div className='sliding'>
      {trailers.length > 0 && trailers.map((item, i) => {
        return (
          <div className='sliding-vids' key={i}>
            <iframe className='sliding-vids' src={`https://www.youtube.com/embed/${item?.key}`} alt={item.title} ></iframe>
            <div className="hover-text">{item.title}</div>
          </div>
          
        )
      })}
    </div>
  </div>


      </>
  );
}

export default PopularMovies;
