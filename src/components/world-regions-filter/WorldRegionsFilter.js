import { useEffect, useState } from "react"
import './WorldRegionsFilter.css'
import { ReactComponent as ChevronDownIcon } from "../../assets/svg/chevron-down.svg"

export default function WorldRegionsFilter({ regionSelected, handleSelectRegion }) {
  const [isOpen, setIsOpen] = useState(false)
  const [regions, setRegions] = useState([
    { id: 1, name: 'Africa', value: 'Africa', selected: false },
    { id: 2, name: 'America', value: 'Americas', selected: false },
    { id: 3, name: 'Asia', value: 'Asia', selected: false },
    { id: 4, name: 'Europe', value: 'Europe', selected: false },
    { id: 5, name: 'Oceania', value: 'Oceania', selected: false },
  ])

  const changeRegion = (newRegion) => {
    const hasRegionSelected = regions.some(region => region.value === newRegion.value && region.selected)

    if (hasRegionSelected) {
      setRegions(regions.map(region => {
        region.selected = false
        return region
      }))
      handleSelectRegion(null)
    } else {
      setRegions(prevRegions => {
        return prevRegions.map(region => {
          region.selected = region.value === newRegion.value
          return region
        })
      })
      handleSelectRegion(newRegion)
    }

    setIsOpen(false)
  }

  useEffect(() => {
    if (regionSelected) {
      setRegions(prevRegions => {
        return prevRegions.map(region => {
          region.selected = region.value === regionSelected.value
          return region
        })
      })
    }
  }, [ regionSelected ])

  return (
    <div className="relative inline-block text-neutrals-white text-sm min-w-[248px]">
      <button 
        className={
          `flex justify-between items-center px-7 py-5 rounded-md hover:bg-dark-blue-hover w-full ease-in-out duration-300 ${ isOpen ? 'is-open bg-dark-blue-hover' : 'bg-dark-blue' }`
        }
        id="dropdownMenuButton"
        data-toggle="dropdown" 
        aria-haspopup="true" 
        aria-expanded="false"
        onClick={ () => setIsOpen(!isOpen) }
      >
        { regionSelected ? regions.find(region => region.value === regionSelected.value).name : 'Filter by Region' }

        <ChevronDownIcon />
      </button>

      <ul 
        className="items"
        aria-labelledby="dropdownMenuButton"
      >
        {
          regions.map(region => (
            <li 
              className={
                `py-1 px-7 hover:bg-dark-blue-hover hover:cursor-pointer ${ region.selected ? 'bg-dark-blue-hover' : '' }`
              }
              key={ region.id }
              onClick={ () => changeRegion(region) }
            >
              { region.name }
            </li>
          ))
        }
      </ul>
    </div>
  )
}