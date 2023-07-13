import CountryList from '../Country/CountryList'
import Search from '../Search/Search'
import Filter from '../Filter/Filter'
import './layout.css'

const Layout = ({countries}) => {
  return (
    <div className='layout'>
      <div className="search_and_filter">
        <Search />
        <Filter />
      </div>
      <div className="layout__grid">
        <CountryList countries={countries}/>
      </div>
    </div>
  )
}

export default Layout