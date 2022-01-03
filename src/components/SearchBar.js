export default function SearchBar({ searchCountry, handleSearch }) {

  const handleKeyPressEnter = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event.target.value)
    }
  }

  return (
    <div className="flex items-center px-10 py-3 bg-dark-blue rounded-md">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutrals-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>

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