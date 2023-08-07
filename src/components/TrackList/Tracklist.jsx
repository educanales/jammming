export default function Tracklist() {
  const tracks = [
    {songName: "Blind", artist: "Korn"},
    {songName: "Headup", artist: "Deftones"},
    {songName: "Turn to Ashes", artist: "36 Crazyfists"},
    {songName: "Ape Dos Mil", artist: "Glassjaw"}
  ];

  const songs = tracks.map(song => 
    song.songName)

  return (
    <div>
      <h3>{songs.songName}</h3>
      <p>{tracks.artist}</p>
    </div>
  )
}