import { useContext } from 'react'
import { CountryContext } from '../../contexts/CountryContext'
import './country.css'

const Country = ({country}) => {

  const { setCountrySelected } = useContext(CountryContext)

  return (
    <div className='country' onClick={() => setCountrySelected(country.name)}>
      <div className="country__image">
        <img src={country.flags.svg} alt="country flag" />
      </div>
      <div className="country__data">
        <div className="country__title">{country.name}</div>
        <div className="country__population"><span>Population: </span>{country.population}</div>
        <div className="country__region"><span>Region: </span>{country.region}</div>
        <div className="country__capital"><span>Capital: </span>{country.capital}</div>
      </div>
    </div>
  )
}

export default Country