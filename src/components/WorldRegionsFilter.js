export default function WorldRegionsFilter() {
  return (
    <div className="inline-block text-neutrals-white text-sm min-w-[248px]">
      <button 
        className="flex justify-between items-center px-7 py-5 rounded-md bg-dark-blue w-full"
        id="dropdownMenuButton"
        data-toggle="dropdown" 
        aria-haspopup="true" 
        aria-expanded="false"
      >
        Filter by Region

        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <ul 
        className="hidden px-7 py-5 rounded-md bg-dark-blue mt-2" 
        aria-labelledby="dropdownMenuButton"
      >
        <li className="mb-1">Africa</li>
        <li className="mb-1">America</li>
        <li className="mb-1">Asia</li>
        <li className="mb-1">Europe</li>
        <li>Oceania</li>
      </ul>
    </div>
  )
}