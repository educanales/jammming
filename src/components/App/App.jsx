import { useState } from 'react'
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

export default function App() {
  const [searchItem, setSearchItem] = useState('');
  const [filteredTrack, setFilteredTrack] = useState(tracks);
  const [playlist, setPlaylist] = useState([]);

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchItem(searchTerm);

    const filteredSongs = tracks.filter((track) =>
      track.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.songName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.album.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTrack(filteredSongs);
  }

  const handleAddToPlaylist = (trackToAdd) => {
    setPlaylist([
      ...playlist,
      filteredTrack.filter(track => track.id === trackToAdd)
    ])
  }

  return (
    <>
      <h1>Jammming</h1>
      <SearchBar
        value={searchItem}
        onChange={handleInputChange}
      />
      <div className='mainContainer'>
        <SearchResults filteredTrack={filteredTrack} onClick={handleAddToPlaylist}/>
        <Playlist playlist={playlist}/>
      </div>
    </>
  )
}

const tracks = [
  {songName: "Blind", artist: "Korn", album: "Korn", id: 1},
  {songName: "Headup", artist: "Deftones", album: "Around the Fur", id: 2},
  {songName: "Bloodwork", artist: "36 Crazyfists", album: "A Snow Capped Romance", id: 3},
  {songName: "Ape Dos Mil", artist: "Glassjaw", album: "Workship and Tribute", id: 4},
  {songName: "Chi", artist: "Korn", album: "Life is Peachy", id: 5}
];
