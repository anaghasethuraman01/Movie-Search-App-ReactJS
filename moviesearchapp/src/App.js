import React from 'react';
import SearchMovie from './components/SearchMovie';
import './App.css';
const App = () => {
  return (
    <div className='container'>
      <h1 className='title' id='startShow'> Movie Search</h1>
      <SearchMovie />
    </div>
  )
}

export default App;
