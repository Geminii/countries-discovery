import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { useState } from "react/cjs/react.development";
import BaseButton from "../components/BaseButton";
import useFetch from "../composables/useFetch"
import { formatPopulation } from "../utils/format";

export default function CountryDetails() {
  const { countryId } = useParams()
  const { data: countries, error, isLoading } = 
    useFetch(`${process.env.REACT_APP_COUNTRIES_API_URL}/name/${countryId}?fullText=true`)
  const [ country, setCountry ] = useState(null)
  const [ borderCountries, setBorderCountries ] = useState([])

  const getBordersCountry = ({ borders }) => {
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
        <BaseButton value="Back" size="large" startIcon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        } />
      </Link>

      { !isLoading && error && <p className='text-neutrals-white text-center mt-6'>{ error }</p> }
      { isLoading && <p className='text-neutrals-white text-center mt-6'>Loading ...</p> }
      {
        country && <div className="grid grid-cols-1 md:gap-8 lg:gap-36 sm:grid-cols-2 mt-32">
          <img 
            className="w-full pr-12 py-0 sm:py-11 lg:py-0"
            src={ country.flags.png } 
            alt={ country.name.official } 
          />
          
          <div className="py-11 text-neutrals-white">
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

            <div className="flex flex-col items-start sm:flex-row mt-16">
              <p className="font-semibold mr-0 mb-4 sm:mb-0 sm:mr-4 min-w-[145px] pt-1">
                Border Countries: 
              </p>
              <div className="flex flex-wrap gap-2">
                {
                  borderCountries && borderCountries.map(borderCountry => (
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
          </div>
        </div>
      }
    </div>
   );
}
