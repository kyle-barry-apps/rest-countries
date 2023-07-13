import { BsFillMoonFill } from 'react-icons/bs'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <span className='header__title'>Where in the world?</span>
      <div className="header__mode">
        <BsFillMoonFill size={12} />
        <span>Dark Mode</span>
      </div>
    </div>
  )
}

export default Header