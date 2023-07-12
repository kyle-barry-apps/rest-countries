import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import './filter.css'

const Filter = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)

  return (
    <div className="filter">
      <div className="filter__select">
        <span>Filter by region</span>
        <div className='filter__icon' onClick={() => setToggleDropdown(!toggleDropdown)}><BsChevronDown /></div>
      </div>
      <div className={toggleDropdown ? 'filter__dropdown active' : 'filter__dropdown'}>
        <ul>
          <li>Africa</li>
          <li>Americas</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      </div>
    </div>
  )
}

export default Filter