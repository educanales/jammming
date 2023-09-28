/* eslint-disable react/prop-types */
import Tracklist from '../TrackList/Tracklist';

export default function SearchResults({ filteredTrack }) {

  return (
    <>
      <div className='container'>
        <Tracklist filteredTrack={filteredTrack} />
      </div>
    </>
  )

}