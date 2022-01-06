import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from './pages/Home'
import Error from './pages/Error'
import CountryDetails from './pages/CountryDetails'

export default function App() {
  return (
    <Router>
      <Navbar />

      <main className="bg-neutrals-white dark:bg-dark-blue-bg transition-colors ease-in-out duration-300 min-h-screen">
        <div className="max-w-7xl mx-auto px-5 py-6">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/country/:countryId">
              <CountryDetails />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </div>
      </main> 
    </Router>
  )
}
