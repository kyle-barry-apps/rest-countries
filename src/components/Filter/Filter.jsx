import { useState, useEffect, useContext } from 'react'
import { FilterContext } from '../../contexts/FilterContext'
import { ThemeContext } from '../../contexts/ThemeContext'
import { BsChevronDown } from 'react-icons/bs'
import { BiRefresh } from 'react-icons/bi'
import './filter.css'

const Filter = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)

  useEffect(() => {
    window.addEventListener('click', (e) => {
      const clickedAttr = e.target.getAttribute('data-filter')
      if(!clickedAttr) {
        setToggleDropdown(false)
      }
    })
  }, [])

  const { theme } = useContext(ThemeContext)

  const { filterTerm, setFilterTerm } = useContext(FilterContext)

  return (
    <div data-filter className={theme === 'dark' ? 'filter' : 'filter light'}>
      <div data-filter className={theme === 'dark' ? 'filter__select' : 'filter__select light'}>
        <span data-filter>Filter by region</span>
        <div data-filter className='filter__icon' onClick={() => setToggleDropdown(!toggleDropdown)}><BsChevronDown data-filter /></div>
      </div>
      <div data-filter id='filter-dropdown' className={toggleDropdown && theme === 'dark' ? 'filter__dropdown active' : toggleDropdown && theme === 'light' ? 'filter__dropdown active light' : 'filter__dropdown'}>
        {filterTerm !== 'all' && <div className='filter__refresh' onClick={() => setFilterTerm('all')}><BiRefresh /></div>}
        <ul>
          <li data-filter onClick={() => setFilterTerm('Africa')}>Africa</li>
          <li data-filter onClick={() => setFilterTerm('Americas')}>Americas</li>
          <li data-filter onClick={() => setFilterTerm('Asia')}>Asia</li>
          <li data-filter onClick={() => setFilterTerm('Europe')}>Europe</li>
          <li data-filter onClick={() => setFilterTerm('Oceania')}>Oceania</li>
        </ul>
      </div>
    </div>
  )
}

export default Filter