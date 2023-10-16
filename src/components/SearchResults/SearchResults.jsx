/* eslint-disable react/prop-types */
import Tracklist from '../TrackList/Tracklist';

export default function SearchResults({ filteredTrack, onClick }) {

  return (
    <>
      <div className='container'>
        <h2>Results</h2>
        <Tracklist filteredTrack={filteredTrack} onClick={onClick} />
      </div>
    </>
  )

}