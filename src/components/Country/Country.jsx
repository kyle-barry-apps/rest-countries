import { useContext } from 'react'
import { CountryContext } from '../../contexts/CountryContext'
import { ThemeContext } from '../../contexts/ThemeContext'
import './country.css'

const Country = ({country}) => {

  const { setCountrySelected } = useContext(CountryContext)
  const { theme } = useContext(ThemeContext)

  const formattedPopulation = country.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  return (
    <div className={theme === 'dark' ? 'country' : 'country light'} onClick={() => setCountrySelected(country.name)}>
      <div className="country__image">
        <img src={country.flags.svg} alt="country flag" />
      </div>
      <div className={theme === 'dark' ? 'country__data' : 'country__data light'}>
        <div className={theme === 'dark' ? 'country__title' : 'country__title light'}>{country.name}</div>
        <div className="country__population"><span>Population: </span>{formattedPopulation}</div>
        <div className="country__region"><span>Region: </span>{country.region}</div>
        <div className="country__capital"><span>Capital: </span>{country.capital}</div>
      </div>
    </div>
  )
}

export default Country