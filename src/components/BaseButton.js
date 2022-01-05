import './BaseButton.css'

export default function BaseButton({ value, startIcon, size }) {
  return (
    <button 
      className={`flex items-center text-neutrals-white tracking-wider rounded-md shadow-md shadow-dark-blue-text hover:shadow-dark-gray transform ease-in-out duration-300 ${size}`}

    >
      { startIcon && <span className="mr-2">{ startIcon }</span>}
      { value }
    </button>
  )
}