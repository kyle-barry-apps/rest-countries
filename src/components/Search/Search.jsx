import { useContext, useState } from 'react'
import { SearchContext } from '../../contexts/SearchContext'
import { ThemeContext } from '../../contexts/ThemeContext'
import './search.css'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
  const {searchTerm, setSearchTerm} = useContext(SearchContext)
  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme === 'dark' ? 'search' : 'search light'}>
      <div className="search__icon">
        <AiOutlineSearch className={theme === 'dark' ? '' : 'icon__light'} size={22}/>
      </div>
      <div className={theme === 'dark' ? 'search__area' : 'search__area light'}>
        <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} type="text" placeholder='Search for a country...'/>
      </div>
    </div>
  )
}

export default Search