import CountryCard from '../components/CountryCard'
import SearchBar from '../components/SearchBar'
import WorldRegionsFilter from '../components/WorldRegionsFilter'
import useFetch from '../composables/useFetch'

export default function Home() {
  const { data: countries, isLoading, error } = useFetch(`${process.env.REACT_APP_COUNTRIES_API_URL}/all`)

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between">
        <SearchBar />

        <div className="mt-8 md:mt-0">
          <WorldRegionsFilter />
        </div>
      </div>

      { error && <p className='text-neutrals-white text-center mt-6'>{ error }</p> }
      { isLoading && <p className='text-neutrals-white text-center mt-6'>Loading ...</p> }

      { countries && 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 my-9 mx-6 md:my-12 md:mx-0">
          {
            countries.map(country => (
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
