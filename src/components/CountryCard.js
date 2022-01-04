export default function CountryCard({ country }) {
  const formatPopulation = (population) => {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="rounded-md bg-dark-blue overflow-hidden h-full hover:shadow-xl">
      <img 
        className="h-[200px] w-full"
        src={ country.flags.png } 
        alt={ country.name.official } 
      />

      <div className='pt-8 pb-14 px-8 text-neutrals-white text-sm'>
        <h2 className='font-bold text-lg mb-7 min-h-[56px]'>{ country.name.official }</h2>

        <p className='mb-1'>
          <strong>Population: </strong> 
          { formatPopulation(country.population) }
        </p>
        <p className='mb-1'>
          <strong>Region: </strong>
          { country.region }
        </p>
        <p>
          <strong>Capital: </strong>
          { country.capital }
        </p>
      </div>
    </div>
  )
}