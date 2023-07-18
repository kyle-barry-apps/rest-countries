import { useContext } from 'react'
import { CountryContext } from '../../contexts/CountryContext'
import { ThemeContext } from '../../contexts/ThemeContext'
import CountryList from '../Country/CountryList'
import CountryDetail from '../Country/CountryDetail'
import Search from '../Search/Search'
import Filter from '../Filter/Filter'
import './layout.css'

const Layout = ({countries}) => {

  const { countrySelected, setCountrySelected } = useContext(CountryContext)
  const { theme, setTheme } = useContext(ThemeContext)

  const countryDetailData = countries.find((country) => country.name === countrySelected)

  return (
    <div className='layout'>
      {countrySelected ? (
        <CountryDetail country={countryDetailData} />
      ) : (
        <div className="search_and_filter">
          <Search />
          <Filter />
        </div>
      )}
      {!countrySelected && (
        <div className="layout__grid">
          <CountryList countries={countries} />
        </div>
      )}
    </div>
  );
}

export default Layout