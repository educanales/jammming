export default function Tracklist() {
  const tracks = [
    {songName: "Blind", artist: "Korn", album: "Korn", id: 1},
    {songName: "Headup", artist: "Deftones", album: "Around the Fur", id: 2},
    {songName: "Bloodwork", artist: "36 Crazyfists", album: "A Snow Capped Romance", id: 3},
    {songName: "Ape Dos Mil", artist: "Glassjaw", album: "Workship and Tribute", id: 4}
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