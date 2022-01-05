import { ReactComponent as SearchIcon } from "../assets/svg/search.svg"

export default function SearchBar({ searchCountry, handleSearch }) {
  const handleKeyPressEnter = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event.target.value)
    }
  }

  return (
    <label className="relative block rounded-md">
      <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-4 flex items-center pl-2">
        
        <SearchIcon />
      </span>
      
      <input 
        className="block w-full border border-transparent rounded-md px-16 py-6 shadow-sm bg-dark-blue hover:bg-dark-blue-hover focus:outline-none focus:bg-dark-blue-hover focus:border-dark-blue-text focus:ring-neutrals-white focus:ring-1 sm:text-sm text-neutrals-white ease-in-out duration-300" 
        type="text" 
        placeholder="Search for a country..."
        onKeyPress={ (e) => handleKeyPressEnter(e) }
        onBlur={ (e) => handleSearch(e.target.value) }
        name="search"
      />
    </label>
  )
}