import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { BsFillMoonFill } from 'react-icons/bs'
import './header.css'

const Header = () => {

  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className='header'>
      <span className='header__title'>Where in the world?</span>
      <div className="header__mode" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <BsFillMoonFill size={12} />
        <span>Dark Mode</span>
      </div>
    </div>
  )
}

export default Header