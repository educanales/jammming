/* eslint-disable react/prop-types */
import "./TrackList.css";

export default function Tracklist({ filteredTrack, onClick }) {
  
  const lista = filteredTrack.map(track => 
    <div className="trackContainer" key={track.id}>
      <div className="trackInfo">
        <h3>
          {track.songName}
        </h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      <div>
        <button className="addBtn" onClick={() => onClick(track.id)}>+</button>
      </div>
    </div>    
  )

  return (
    <div className="Tracklist">
      {lista}
    </div>
  )
}