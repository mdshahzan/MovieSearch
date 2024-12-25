import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ListMovies from './ListMovies';
import RelatedMovies from './RelatedMovies';
import RelatedSeries from './RelatedSeries';

function SelectedMovie() {
  let { seriesName, SeriesId } = useParams();
  let [castDetails, setCastdetails] = useState([])
  let [moviedet, setMovieDet] = useState(null);
  let [movieTrailer, setMovieTrailer] = useState(null);
  let [isTrailerActive, setIsTrailerActive] = useState(false);

  const key = "d22bf07acb8f59af1b43fecbc641c4d9";
  console.log(SeriesId)

 
    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/tv/${SeriesId}?api_key=${key}`)
        .then((res) => {
          setMovieDet(res?.data);
        })
        .catch((err)=>{
          console.log(err)
        })
      
    }, [SeriesId]);

  
  useEffect(() => {
    if (isTrailerActive && moviedet?.id) {
      axios.get(`https://api.themoviedb.org/3/tv/${SeriesId}/videos?api_key=${key}`)
        .then((res) => {
          const trailer = res?.data?.results[0];
          setMovieTrailer(trailer);
        })
        
    }
  }, [isTrailerActive, moviedet?.id]);
        useEffect(()=>{
          axios.get(`https://api.themoviedb.org/3/tv/${SeriesId}/credits?api_key=${key}`)
          .then((res)=>{
            console.log(res?.data?.cast)
            setCastdetails(res?.data?.cast)
          })

        },[])

  const watchTrailer = () => {
    setIsTrailerActive(true);
  };

  const closeTrailer = () => {
    setIsTrailerActive(false);
  };

  return (
    <div className='selected-movie'>
      <img className='movie-background' src={`https://image.tmdb.org/t/p/w500/${moviedet?.backdrop_path}`} alt="Movie backdrop" />

      <div className='movie-details'>
        <h1>{seriesName}</h1>
        <p>{moviedet?.status}</p>
        <span>{moviedet?.release_date}</span>
        {moviedet?.adult === false ? <span>U/A 13+</span> : <span>U/A 18+</span>}
        <span>{moviedet?.spoken_languages[0]?.name}</span>

        <div style={{ marginTop: "20px" }}>
          <span>{moviedet?.genres[0]?.name}</span>
          <span style={{ marginLeft: "20px" }}>|</span>
          <span>{moviedet?.genres[1]?.name}</span>
          <span style={{ marginLeft: "20px" }}>|</span>
          <span>{moviedet?.genres[2]?.name}</span>
        </div>

        <div style={{ width: "70%", textAlign: "start", marginLeft: "10px", marginTop: "20px" }}>
          <span style={{ fontSize: "24px", fontWeight: "500", marginLeft: "0" }}>{moviedet?.overview}</span>
        </div>
      </div>

     {/* <ListMovies/> */}

      <button className='trailer-btn' onClick={watchTrailer}>Watch Trailer Now</button>

      
      {isTrailerActive && movieTrailer && (
        <div className='trailer-overlay'>
          <div className='close-btn' onClick={closeTrailer}>&#10006;</div>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${movieTrailer.key}?autoplay=1&modestbranding=1&rel=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Movie Trailer"
          ></iframe>
        </div>
      )}
      <RelatedSeries
      SeriesId ={SeriesId}
      />
      
      
      <div style={{marginTop:"40px"}}  className='popular-container'>
        <h1 style={{margin:"0"}}>Cast Details</h1>
        <div className='cast-details'>
          {castDetails.length > 0 && castDetails.map((item,i)=>{
          
            return(
              <>
              <Link to={`${item?.id}`}>
              
              <div style={{marginLeft:"50px"}}>
                <img className='cast-img' src={ item.profile_path == null ? "https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png" :`https://image.tmdb.org/t/p/w500/${item?.profile_path}` }/>
                <h5 style={{display:"inline-block",color:"white",fontWeight:"600",marginLeft:"25px",fontSize:"22px"}}>{item.name}</h5>
              </div>
              </Link>
              </>
            )

          })}


        </div>
      </div> 




    </div>
  );
}

export default SelectedMovie;
