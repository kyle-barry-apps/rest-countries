import { useState, useContext } from 'react'
import { FilterContext } from '../../contexts/FilterContext'
import { ThemeContext } from '../../contexts/ThemeContext'
import { BsChevronDown } from 'react-icons/bs'
import { BiRefresh } from 'react-icons/bi'
import './filter.css'

const Filter = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)

  const { theme } = useContext(ThemeContext)

  const { filterTerm, setFilterTerm } = useContext(FilterContext)

  return (
    <div className={theme === 'dark' ? 'filter' : 'filter light'}>
      <div className={theme === 'dark' ? 'filter__select' : 'filter__select light'}>
        <span>Filter by region</span>
        <div className='filter__icon' onClick={() => setToggleDropdown(!toggleDropdown)}><BsChevronDown /></div>
      </div>
      <div className={toggleDropdown && theme === 'dark' ? 'filter__dropdown active' : toggleDropdown && theme === 'light' ? 'filter__dropdown active light' : 'filter__dropdown'}>
        {filterTerm !== 'all' && <div className='filter__refresh' onClick={() => setFilterTerm('all')}><BiRefresh /></div>}
        <ul>
          <li onClick={() => setFilterTerm('Africa')}>Africa</li>
          <li onClick={() => setFilterTerm('Americas')}>Americas</li>
          <li onClick={() => setFilterTerm('Asia')}>Asia</li>
          <li onClick={() => setFilterTerm('Europe')}>Europe</li>
          <li onClick={() => setFilterTerm('Oceania')}>Oceania</li>
        </ul>
      </div>
    </div>
  )
}

export default Filter