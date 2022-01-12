import { ReactComponent as SunIcon } from "../assets/svg/sun.svg"
import { ReactComponent as MoonIcon } from "../assets/svg/moon.svg"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Header() {
  const [ mode, setMode ] = useState(localStorage.theme || 'light')

  const handleDarkMode = () => {
    const theme = mode === 'light' ? 'dark' : 'light'

    localStorage.theme = theme
    setMode(theme)
    toggleDarkMode()
  }

  const toggleDarkMode = () => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    toggleDarkMode()
  }, [ mode ])

  return (  
    <header className="bg-neutrals-white dark:bg-dark-blue transition-colors ease-in-out duration-300 drop-shadow-md">
      <div className="max-w-7xl mx-auto p-5 flex justify-between items-center h-20 text-dark-blue-text dark:text-neutrals-white">
        <Link to="/">
          <h1 className="text-sm md:text-2xl font-semibold">
            Where in the world?
          </h1>
        </Link>

        <button 
          className="flex gap-2 items-center"
          onClick={ () => handleDarkMode() }
        >
          { mode === 'light' && <MoonIcon className="w-4 h-4" /> }
          { mode === 'dark' && <SunIcon className="w-4 h-4" /> }
          
          <span className="text-xs md:text-base">
            Dark Mode
          </span>
        </button>
      </div>
    </header>
  );
}
 