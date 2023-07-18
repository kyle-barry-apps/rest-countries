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
  const { theme } = useContext(ThemeContext)

  const countryDetailData = countries.find((country) => country.name === countrySelected)

  return (
    <div className={theme === 'dark' ? 'layout' : 'layout light'}>
      {countrySelected ? (
        <CountryDetail country={countryDetailData} />
      ) : (
        <div className={theme === 'dark' ? 'search_and_filter' : 'search_and_filter light'}>
          <Search />
          <Filter />
        </div>
      )}
      {!countrySelected && (
        <div className={theme === 'dark' ? 'layout__grid' : 'layout__grid light'}>
          <CountryList countries={countries} />
        </div>
      )}
    </div>
  );
}

export default Layout