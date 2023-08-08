import "./TrackList.css";

export default function Tracklist() {
  const tracks = [
    {songName: "Blind", artist: "Korn", album: "Korn", id: 1},
    {songName: "Headup", artist: "Deftones", album: "Around the Fur", id: 2},
    {songName: "Bloodwork", artist: "36 Crazyfists", album: "A Snow Capped Romance", id: 3},
    {songName: "Ape Dos Mil", artist: "Glassjaw", album: "Workship and Tribute", id: 4}
  ];

  const lista = tracks.map(track => 
    <div className="trackContainer">
      <div className="trackInfo">
        <h3>
          {track.songName}
        </h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      <div>
        <button className="addBtn">+</button>
      </div>
    </div>
    
  )

  return (
    <div className="Tracklist">
      {lista}
    </div>
  )
}