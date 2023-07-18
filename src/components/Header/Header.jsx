import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { BsFillMoonFill } from 'react-icons/bs'
import './header.css'

const Header = () => {

  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.classList = theme
  }, [theme]);

  return (
    <div className={theme === 'dark' ? 'header' : 'header light'}>
      <span className='header__title'>Where in the world?</span>
      <div className="header__mode" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <BsFillMoonFill size={12} />
        <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
      </div>
    </div>
  )
}

export default Header