import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PopularMovies from './PopularMovies';
import { Link } from 'react-router-dom';

function Landing() {
    let [displayTopMovies, SetDisplayTopMovies] = useState([]); // 0  
    let [currentIndex, setCurrentIndex] = useState(0);   
    let [isImageChanging, setIsImageChanging] = useState(false);
      let [isactive,setIsActive] = useState(false)
    let api = "https://api.themoviedb.org/3";
    let key = "d22bf07acb8f59af1b43fecbc641c4d9";

    function changeImage(i){
        setCurrentIndex(i);
      }
      
      useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=en-US&page=1`)
        .then((res) => {
          SetDisplayTopMovies(res?.data?.results);             
        });
        
        const intervalId = setInterval(() => {
          setIsImageChanging(true); // Start fade-out effect
          setTimeout(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % 5); 
            setIsImageChanging(false);
            setIsActive(true)
            console.log(isactive)
              }, 1000);
            }, 5000);
            
           
            return () => clearInterval(intervalId);
          }, [currentIndex]);
          
          return (
            <>
            <div className='landing'>
            {displayTopMovies.length > 0 ? displayTopMovies.splice(5, 20) : ""}
            
            <img 
                className={`landing-img ${isImageChanging ? 'fade-out' : 'fade-in'}`}
                src={`https://image.tmdb.org/t/p/w500/${displayTopMovies[currentIndex]?.
                  backdrop_path}`} 
                  alt="Trending movie poster"
                  />
            <div className='heading-section'>
            <h1 className={`top-movie-title ${isImageChanging ? 'fade-out' : 'fade-in'}` }>{displayTopMovies[currentIndex]?.title }</h1>
            <p>{displayTopMovies[currentIndex]?.overview.slice(0,150)}</p>
              <Link className='watch-btn' to={`/${displayTopMovies[currentIndex]?.title}/${displayTopMovies[currentIndex]?.id}`} onClick={()=>{
                console.log(displayTopMovies[currentIndex])
              }}>Watch Now</Link>
            </div>
            <div className='slider-container'>
                {displayTopMovies.length > 0 ? displayTopMovies.map((item, i) => {
                  return (
                    <div key={i} className='slider-items'>
                            <img 
                                onClick={() => { changeImage(i); }} 
                                className={`slider-img ${i === currentIndex ? 'active-img' : ''}`}  
                                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
                                alt="Movie poster"
                            />
                        </div>
                    );
                }) : ''}
               
            </div>
        <PopularMovies/>
        </div>
        </>
    );
}

export default Landing;
