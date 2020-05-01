import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const initalState = {
    id: Date.now(),
    title: '',
    director: '',
    metascore: '',
    stars: [],
};

const MovieForm = props => {
    const [movieData, setMovieData] = useState(initalState);
    const { id } = useParams();

    useEffect(() => {
        const itemToUpdate = props.movies.find(movie => `${movie.id}` === id);
    
        if (itemToUpdate) {
          setMovieData(itemToUpdate);
        }
      }, [props.movies, id]);

    const changeHandler = e => {
        // e.persist();
        setMovieData({...movieData, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();

        axios
          .put(`http://localhost:5000/api/movies/${movieData.id}`, movieData)
          .then(res => {
     
            props.getMovieList(res.data);
            props.history.push(`/`);
          })
          .catch(err => console.log(err));
          setMovieData( {
            id: '',
            title: '',
            director: '',
            metascore: '',
            stars: [],

          } )
      };

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type='text'
                name='title'
                value={movieData.title}
                placeholder='title'
                onChange={changeHandler}
                />

                <input 
                type='text'
                name='direcctor'
                value={movieData.director}
                placeholder='Director' 
                onChange={changeHandler}
                />

                <input 
                type='number'
                name='metascore'
                value={movieData.metascore}
                placeholder='Metascore' 
                onChange={changeHandler}
                />

                <input 
                type='text'
                name='stars'
                value={movieData.stars}
                placeholder='Stars' 
                onChange={changeHandler}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default MovieForm;