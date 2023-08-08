import './SearchBar.css'

export default function SearchBar() {

  return (
    <div className="SearchBar">
      <input type="search" placeholder="Enter a song title" />
      <button>Search</button>
    </div>    
  )
}