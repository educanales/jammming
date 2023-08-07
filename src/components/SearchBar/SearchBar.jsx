import './SearchBar.css'

export default function SearchBar() {

  return (
    <div className="SearchBar">
      <input type="search" placeholder="Enter a song title or an Artist" />
      <button>Search</button>
    </div>    
  )
}