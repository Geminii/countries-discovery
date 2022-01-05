import './BaseButton.css'

export default function BaseButton({ value, startIcon, size }) {
  return (
    <button 
      className={`flex items-center text-neutrals-white tracking-wider rounded-md shadow-lg bg-dark-blue hover:bg-dark-blue-hover focus:outline-none focus:bg-dark-blue-hover focus:border-dark-blue-text focus:ring-neutrals-white focus:ring-1 transform ease-in-out duration-300 ${size}`}
    >
      { startIcon && <span className="mr-2">{ startIcon }</span>}
      { value }
    </button>
  )
}