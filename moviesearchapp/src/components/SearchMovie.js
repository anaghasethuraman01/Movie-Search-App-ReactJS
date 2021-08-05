import React, { useState } from 'react';
import MovieInfo from './MovieInfo';
const SearchMovie = () => {

    const [ query,setQuery ] = useState('');
    //keeping array of movies in an object
    const [ movies,setMovies ]= useState([]);

    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

    //async and await
    const getMovies = async(e) => {
        try{
            e.preventDefault();
            const result = await fetch(url);
            const data = await result.json(); 

            setMovies( data.results  ); //obtained by checking on inspect 
            console.log('my states ',query, movies);
         
        }catch(error){
            console.log('fetch error', error.message)
        }
        
    }    
    return (
        <div id='content' className = 'section' onSubmit={getMovies}>
            <form className='form-control'>

                <label className='form-label'>MOVIE NAME</label>
                <input className='form-input' type='text' name='query'
                 required onChange = { (e) => setQuery(e.target.value) } />
                <button className='form-button' type='submit'>Search</button>
            </form>
            <div className='card-list'>
                {
                movies.filter(movie => movie.poster_path).map(movie =>
                    <MovieInfo movie = {movie} key={ movie.id }/>
                    )
                }
            </div>
        </div>

    )
}

export default SearchMovie;
