/* eslint-disable react/prop-types */
import './SearchBar.css'

export default function SearchBar({ value, onChange }) {

  return (
    <div className="SearchBar">
      <input 
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search here"
      />
      <button>Search</button>
    </div>    
  )
}