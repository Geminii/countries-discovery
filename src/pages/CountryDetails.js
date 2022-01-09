import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import BaseButton from "../components/button/BaseButton"
import useFetch from "../composables/useFetch"
import { formatPopulation } from "../utils/format"
import { ReactComponent as ArrowLeftIcon } from "../assets/svg/arrow-left.svg"

export default function CountryDetails() {
  const { countryId } = useParams()
  const { data: countries, error, isLoading } = 
    useFetch(`${process.env.REACT_APP_COUNTRIES_API_URL}/name/${countryId}?fullText=true`)
  const [ country, setCountry ] = useState(null)
  const [ borderCountries, setBorderCountries ] = useState([])

  const getBordersCountry = ({ borders }) => {
    if (borders) {
      fetch(`${process.env.REACT_APP_COUNTRIES_API_URL}/alpha?codes=${ borders.join(',') }`)
        .then(response => response.json())
        .then((bordersCountries) => {
          setBorderCountries(bordersCountries.map(country => {
            return {
              id: Math.random(),
              name: country.name.common
            }
          }))
        })
    }
  }

  useEffect(() => {
    if (countries) {
      const currentCountry = countries[0]
      setCountry(currentCountry)
      getBordersCountry(currentCountry)
    }
  }, [ countries])

  return ( 
    <div className="mt-2">
      <Link to="/" className="inline-block mt-5">
        <BaseButton value="Back" size="large" startIcon={ <ArrowLeftIcon className="h-6 w-6" /> } />
      </Link>

      { !isLoading && error && <p className='text-dark-blue-text dark:text-neutrals-white text-center mt-6'>{ error }</p> }
      { isLoading && <p className='text-dark-blue-text dark:text-neutrals-white text-center mt-6'>Loading ...</p> }
      {
        country && <div className="grid grid-cols-1 md:gap-8 lg:gap-36 sm:grid-cols-2 mt-32">
          <img 
            className="w-full pr-0 sm:pr-12 py-0 sm:py-11 lg:py-0 drop-shadow-md object-cover"
            src={ country.flags.png } 
            alt={ country.name.official } 
          />
          
          <div className="py-11 transition-colors ease-in-out duration-300 text-dark-blue-text dark:text-neutrals-white">
            <h2 className='font-bold text-2xl mb-9'>
              { country.name.common }
            </h2>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
              <div>
                <p className='mb-3'>
                  <span className="font-semibold">Native Name: </span>
                  <span className="font-light">
                    { 
                      Object.values(country.name.nativeName)
                        .map(native => native.common)
                        .slice(-1)
                    }
                  </span>
                </p>
                <p className='mb-3'>
                  <span className="font-semibold">Population: </span> 
                  <span className="font-light">{ formatPopulation(country.population) }</span>
                </p>
                <p className='mb-3'>
                  <span className="font-semibold">Region: </span>
                  <span className="font-light">{ country.region }</span>
                </p>
                <p className='mb-3'>
                  <span className="font-semibold">Sub Region: </span>
                  <span className="font-light">{ country.subregion }</span>
                </p>
                <p>
                  <span className="font-semibold">Capital: </span>
                  <span className="font-light">{ country.capital }</span>
                </p>
              </div>
              
              <div className="mt-16 sm:mt-0">
                <p className='mb-3'>
                  <span className="font-semibold">Top Level Domain: </span> 
                  <span className="font-light">{ country.tld }</span>
                </p>
                <p className='mb-3'>
                  <span className="font-semibold">Currencies: </span> 
                  <span className="font-light">
                    { Object.values(country.currencies).map(currency => currency.name).join(', ') }
                  </span>
                </p>
                <p className='mb-3'>
                  <span className="font-semibold">Languages: </span> 
                  <span className="font-light">{ Object.values(country.languages).join(', ') }</span>
                </p>
              </div>
            </div>

            {
              borderCountries.length > 0 && 
              <div className="flex flex-col items-start sm:flex-row mt-16">
                <p className="font-semibold mr-0 mb-4 sm:mb-0 sm:mr-4 min-w-[145px] pt-1">
                  Border Countries: 
                </p>
                <div className="flex flex-wrap gap-2">
                  {
                    borderCountries.map(borderCountry => (
                      <Link
                        className='cursor-pointer'
                        to={ `/country/${borderCountry.name}` }
                        key={ borderCountry.id }
                      >
                        <BaseButton
                          value={ borderCountry.name }
                          size="medium" 
                        />
                      </Link>
                    ))
                  }
                </div>
              </div>
            }
          </div>
        </div>
      }
    </div>
   );
}
