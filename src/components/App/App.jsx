import { useState } from 'react'
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

function App() {
  

  return (
    <>
      <h1>Jammming</h1>
      <SearchBar />
      <div className='mainContainer'>
        <SearchResults />
        <Playlist />
      </div>
    </>
  )
}

export default App
