import { ReactComponent as SearchIcon } from "../assets/svg/search.svg"

export default function SearchBar({ searchCountry, handleSearch }) {
  const handleKeyPressEnter = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event.target.value)
    }
  }

  return (
    <div className="flex items-center px-10 py-3 bg-dark-blue rounded-md">
      <SearchIcon />

      <input 
        className="text-neutrals-white bg-transparent outline-none w-full ml-8"
        type="text"
        defaultValue={ searchCountry }
        placeholder="Search for a country..."
        onKeyPress={ (e) => handleKeyPressEnter(e) }
      />
    </div>
  )
}