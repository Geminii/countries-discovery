import { useState } from 'react'
import CountryCard from '../components/CountryCard'
import SearchBar from '../components/SearchBar'
import WorldRegionsFilter from '../components/WorldRegionsFilter'
import useFetch from '../composables/useFetch'

const ALL_COUNTRIES_ENDPOINT = 'all'
const COUNTRY_NAME_ENDPOINT = 'name'

export default function Home() {
  const [ endpoint, setEndpoint ] = useState(ALL_COUNTRIES_ENDPOINT)
  const { data: countries, isLoading, error } = useFetch(
    `${process.env.REACT_APP_COUNTRIES_API_URL}/${endpoint}`
  )
  const [ searchCountryName, setSearchCountryName ] = useState('')
  const [ regionFilter, setRegionFilter ] = useState(null)

  const handleSearch = (searchCountryName) => {
    setSearchCountryName(searchCountryName)
    setEndpoint(searchCountryName ? `${COUNTRY_NAME_ENDPOINT}/${searchCountryName}` : ALL_COUNTRIES_ENDPOINT)
  }  

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between">
        <SearchBar 
          searchCountry={ searchCountryName }
          handleSearch={ (searchCountry) => handleSearch(searchCountry) } 
        />

        <div className="mt-8 md:mt-0">
          <WorldRegionsFilter 
            regionSelected={ regionFilter } 
            handleSelectRegion={ (region) => setRegionFilter(region) } 
          />
        </div>
      </div>

      { !isLoading && error && <p className='text-neutrals-white text-center mt-6'>{ error }</p> }
      { isLoading && <p className='text-neutrals-white text-center mt-6'>Loading ...</p> }

      { countries && 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 my-9 mx-6 md:my-12 md:mx-0">
          {
            countries
              .filter(country => country.population !== 0)
              .filter(country => regionFilter ? country.region === regionFilter.value : true)
              .map(country => (
                <CountryCard 
                  key={country.name.common}
                  country={ country } 
                />
              ))
          }
        </div>
      }
    </>
   );
}
