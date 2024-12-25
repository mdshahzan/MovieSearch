import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function RelatedMovies({ SeriesId }) {
  const key = "d22bf07acb8f59af1b43fecbc641c4d9";
  let [relatedMov, setRelatedMov] = useState([]);
  const navigate = useNavigate();

  
  // Fetch related movies based on the provided movieId
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/tv/${SeriesId}/recommendations?api_key=${key}`)
      .then((res) => {
        setRelatedMov(res?.data?.results);
      });
  }, [SeriesId]);


  const handleMovieClick = (id,name) => {
    // Navigate to the related movie's detail page and preserve the movieId in the URL
    navigate(`/series/${name}/${id}`);
  };

  return (
    <div  className='popular-container'>
      <h1>Related Series</h1>
      <div className='sliding'>
        {relatedMov.length > 0 && relatedMov.map((item, i) => {
          console.log(item)
          return (
            <div className='sliding-items' key={i} onClick={() => handleMovieClick(item.id,item.name)}>
              <img 
                className='sliding-cards' 
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
                alt={item.title} 
              />
              <div className="hover-text">{item?.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RelatedMovies;
