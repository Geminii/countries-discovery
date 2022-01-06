import { formatPopulation } from "../utils/format";

export default function CountryCard({ country }) {
  return (
    <div className="rounded-md bg-neutrals-white dark:bg-dark-blue transition-colors ease-in-out duration-300 overflow-hidden h-full drop-shadow-md hover:shadow-xl">
      <img 
        className="h-[200px] w-full drop-shadow-md"
        src={ country.flags.png } 
        alt={ country.name.official } 
      />

      <div className='pt-8 pb-14 px-8 text-dark-blue-text dark:text-neutrals-white text-sm'>
        <h2 className='font-bold text-lg mb-7 min-h-[56px]'>{ country.name.official }</h2>

        <div>
          <p className='mb-1'>
            <span className="font-semibold">Population: </span> 
            <span className="font-light">{ formatPopulation(country.population) }</span>
          </p>
          <p className='mb-1'>
            <span className="font-semibold">Region: </span>
            <span className="font-light">{ country.region }</span>
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            <span className="font-light">{ country.capital }</span>
          </p>
        </div>
      </div>
    </div>
  )
}