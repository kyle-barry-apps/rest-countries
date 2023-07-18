import { useContext } from 'react'
import { CountryContext } from '../../contexts/CountryContext'
import { ThemeContext } from '../../contexts/ThemeContext'
import { BsArrowLeft } from 'react-icons/bs'


const CountryDetail = ({ country }) => {

  const { setCountrySelected } = useContext(CountryContext)
  const { theme } = useContext(ThemeContext)


  const languages = []
  country.languages.map((l)=> {
    languages.push(l.name)
  })

  const languagesFormatted = languages.join(', ')

  
  return (
    <div className={theme === 'dark' ? 'countryDetail' : 'countryDetail light'}>
      <div onClick={()=> setCountrySelected(null)} className={theme === 'dark' ? 'countryDetail__back' : 'countryDetail__back light'}>
        <BsArrowLeft />
        <span>Back</span>
      </div>
      <div className="countryDetail__information">
        <div className={theme === 'dark' ? 'countryDetail__image' : 'countryDetail__image light'}>
          <img src={country.flags.svg} alt="country flag" />
        </div>
        <div className="countryDetail__details">
          <div className={theme === 'dark' ? 'countryDetail__title' : 'countryDetail__title light'}>{country.name}</div>
          <div className={theme === 'dark' ? 'countryDetail__data' : 'countryDetail__data light'}>
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
          {'borders' in country && 
          
          <div className={theme === 'dark' ? 'countryDetail__borders' : 'countryDetail__borders light'}>
            <span>Border Countries: </span>
            {country.borders.map((b) => (
              <div>{b}</div>
            ))}
          </div>
          }
        </div>

      </div>
    </div>
  )
}

export default CountryDetail