import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function RelatedMovies({ movieId }) {
  const key = "d22bf07acb8f59af1b43fecbc641c4d9";
  let [relatedMov, setRelatedMov] = useState([]);
  const navigate = useNavigate();

  // Fetch related movies based on the provided movieId
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${key}`)
      .then((res) => {
        setRelatedMov(res?.data?.results);
      });
  }, [movieId]);

  // Handle navigation to the related movie's detail page
  const handleMovieClick = (id,name) => {
    // Navigate to the related movie's detail page and preserve the movieId in the URL
    navigate(`/${name}/${id}`);
  };

  return (
    <div  className='popular-container related'>
      <h1>Related Movies</h1>
      <div className='sliding'>
        {relatedMov.length > 0 && relatedMov.map((item, i) => {
          return (
            <div className='sliding-items' key={i} onClick={() => handleMovieClick(item.id,item.title)}>
              <img 
                className='sliding-cards' 
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
                alt={item.title} 
              />
              <div className="hover-text">{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RelatedMovies;
