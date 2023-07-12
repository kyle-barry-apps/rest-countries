import { useState } from 'react'
import './search.css'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
  const [searchText, setSearchText] = useState('')

  return (
    <div className='search'>
      <div className="search__icon">
        <AiOutlineSearch size={22}/>
      </div>
      <div className="search__area">
        <input onChange={(e) => setSearchText(e.target.value)} value={searchText} type="text" placeholder='Search for a country...'/>
      </div>
    </div>
  )
}

export default Search