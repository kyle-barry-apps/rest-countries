import { useState, useContext } from 'react'
import { FilterContext } from '../../contexts/FilterContext'
import { BsChevronDown } from 'react-icons/bs'
import './filter.css'

const Filter = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)

  const { filterTerm, setFilterTerm } = useContext(FilterContext)

  return (
    <div className="filter">
      <div className="filter__select">
        <span>Filter by region</span>
        <div className='filter__icon' onClick={() => setToggleDropdown(!toggleDropdown)}><BsChevronDown /></div>
      </div>
      <div className={toggleDropdown ? 'filter__dropdown active' : 'filter__dropdown'}>
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