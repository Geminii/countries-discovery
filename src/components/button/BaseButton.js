import './BaseButton.css'

export default function BaseButton({ value, startIcon, size }) {
  return (
    <button 
      className={`flex items-center text-dark-blue-text dark:text-neutrals-white tracking-wider rounded-md drop-shadow-md bg-neutrals-white dark:bg-dark-blue hover:bg-light-gray hover:dark:bg-dark-blue-hover focus:outline-none focus:bg-dark-blue-hover focus:border-dark-blue-text focus:ring-neutrals-white focus:ring-1 transform transition-colors ease-in-out duration-300 ${size}`}
    >
      { startIcon && <span className="mr-2">{ startIcon }</span>}
      { value }
    </button>
  )
}