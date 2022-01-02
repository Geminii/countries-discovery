export default function BaseButton({ icon, value }) {
  return (
    <button className="flex items-center text-neutrals-white px-12 py-3 text-lg tracking-wider rounded-md shadow-md shadow-dark-blue-text hover:shadow-dark-gray transform ease-in-out duration-300">
      { icon && <span className="mr-2">{ icon }</span>}
      { value }
    </button>
  )
}