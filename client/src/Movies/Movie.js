import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';
import MovieCard from './MovieCard';

function Movie(props) {
  const [movie, setMovie] = useState(null);
  const match = useRouteMatch();

  const fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err.response));
  };


  useEffect(() => {
    fetchMovie(match.params.id);
  }, [match.params.id]);

  const handleUpdate = e => {
    e.preventDefault();
    props.history.push(`/update-movie/${movie.id}`);
  }

  const handleDelete = e => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/api/movies/${movie.id}`)
    .then( res => {
      props.getMovieList()
      props.history.push('/')
    })
    .catch ( err => console.log('handleDelete error: ', err))

  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className='save-wrapper'>
      <MovieCard movie={movie} />

      <div className='save-button' onClick={() => props.addToSavedList(movie)}>
        Save
      </div>
      <button className='edit-button' onClick={handleUpdate}>
        Edit
      </button>
      <button className='delete-button' onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Movie;