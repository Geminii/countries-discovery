import { Link } from "react-router-dom"
import BaseButton from '../components/button/BaseButton'
import { ReactComponent as ArrowLeftIcon } from "../assets/svg/arrow-left.svg"

export default function Error() {
  return ( 
    <div className="mt-2">
      <Link to="/" className="inline-block mt-5">
        <BaseButton value="Back" icon={ <ArrowLeftIcon className="h-6 w-6" /> } />
      </Link>
      
      <h1 className="text-3xl text-light-gray mt-8">
        Oops, something is wrong ...
      </h1>
    </div>
   );
}
