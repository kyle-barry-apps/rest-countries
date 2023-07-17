import { useContext } from 'react'
import { CountryContext } from '../../contexts/CountryContext'
import { BsArrowLeft } from 'react-icons/bs'


const CountryDetail = ({ country }) => {

  const { setCountrySelected } = useContext(CountryContext)

  const languages = []
  country.languages.map((l)=> {
    languages.push(l.name)
  })

  const languagesFormatted = languages.join(', ')

  
  return (
    <div className='countryDetail'>
      <div onClick={()=> setCountrySelected(null)} className="countryDetail__back">
        <BsArrowLeft />
        <span>Back</span>
      </div>
      <div className="countryDetail__information">
        <div className="countryDetail__image">
          <img src={country.flags.svg} alt="country flag" />
        </div>
        <div className="countryDetail__details">
          <div className="countryDetail__title">{country.name}</div>
          <div className="countryDetail__data">
            <ul>
              <li><span>Native Name:</span> {country.nativeName}</li>
              <li><span>Population:</span> {country.population}</li>
              <li><span>Region:</span> {country.region}</li>
              <li><span>Sub Region:</span> {country.subregion}</li>
              <li><span>Capital:</span> {country.capital}</li>
              <li><span>Top Level Domain:</span> {country.topLevelDomain[0]}</li>
              <li><span>Currencies:</span> {country.currencies[0].name}</li>
              <li><span>Languages:</span> {languagesFormatted}</li>
            </ul>
          </div>
          <div className="countryDetail__borders">
            <span>Border Countries: </span>
            {country.borders.map((b) => (
              <div>{b}</div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default CountryDetail