import { useContext, useEffect, useState } from 'react';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { ThemeContext } from '../../contexts/theme';
import {
  education,
  certifications,
  experience,
  volunteerExperience,
  projects,
  skills,
  contact,
} from '../../portfolio';
import './Navbar.css';

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)
  const closeNavList = () => setShowNavList(false)

  useEffect(() => {
    if (!showNavList || window.innerWidth > 1024) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [showNavList])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setShowNavList(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        id='nav-menu'
        className='nav__list'
      >
        {education.length ? (
          <li className='nav__list-item'>
            <a
              href='#education'
              onClick={closeNavList}
              className='link link--nav'
            >
              Education
            </a>
          </li>
        ) : null}

        {certifications.length ? (
          <li className='nav__list-item'>
            <a
              href='#certifications'
              onClick={closeNavList}
              className='link link--nav'
            >
              Certifications
            </a>
          </li>
        ) : null}

        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={closeNavList}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={closeNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={closeNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
        {experience.length ? (
          <li className='nav__list-item'>
            <a
              href='#experience'
              onClick={closeNavList}
              className='link link--nav'
            >
              Work Experience
            </a>
          </li>
        ) : null}

        {volunteerExperience.length ? (
          <li className='nav__list-item'>
            <a
              href='#volunteer-experience'
              onClick={closeNavList}
              className='link link--nav'
            >
              Volunteer Experience
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
        aria-expanded={showNavList}
        aria-controls='nav-menu'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar;
