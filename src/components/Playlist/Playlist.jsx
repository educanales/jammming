/* eslint-disable react/prop-types */

// import Tracklist from '../TrackList/Tracklist';

export default function Playlist({ playlist }) {

  const lista = playlist.map(track => 
    <div className="trackContainer" key={track.id}>
      <div className="trackInfo">
        <h3>
          {track.songName}
        </h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>      
    </div>    
  )

  return (
    <>
      <div className='container'>
        <h2>Playlist</h2>
        {lista}
        <button>Save</button>
      </div>      
    </>
  )
}