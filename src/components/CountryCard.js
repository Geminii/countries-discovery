export default function CountryCard({ country }) {
  // TODO(format population)

  return (
    <div className="rounded-md bg-dark-blue overflow-hidden">
      <img 
        className="h-[200px] w-full"
        src={ country.flags.png } 
        alt={ country.name.official } 
      />

      <div className='pt-8 pb-14 px-8 text-neutrals-white text-sm'>
        <h2 className='font-bold text-lg mb-7'>{ country.name.official }</h2>

        <p className='mb-1'>
          <strong>Population: </strong> 
          { country.population }
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