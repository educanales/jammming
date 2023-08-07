export default function Tracklist() {
  const tracks = [
    {songName: "Blind", artist: "Korn", id: 1},
    {songName: "Headup", artist: "Deftones", id: 2},
    {songName: "Turn to Ashes", artist: "36 Crazyfists", id: 3},
    {songName: "Ape Dos Mil", artist: "Glassjaw", id: 4}
  ];

  const lista = tracks.map(track => 
    <>
      <h3>
        {track.songName}
      </h3>
      <p>
        {track.artist}
      </p>
    </>
    
  )

  return (
    <div>
      {lista}
    </div>
  )
}