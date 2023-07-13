import { useContext, useState } from 'react'
import { SearchContext } from '../../contexts/SearchContext'
import './search.css'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
  const {searchTerm, setSearchTerm} = useContext(SearchContext)

  return (
    <div className='search'>
      <div className="search__icon">
        <AiOutlineSearch size={22}/>
      </div>
      <div className="search__area">
        <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} type="text" placeholder='Search for a country...'/>
      </div>
    </div>
  )
}

export default Search