import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/Logo.png'
import { IoIosSearch } from "react-icons/io";
import { HiSun } from "react-icons/hi";
import { ThemeContext } from '../../context/ThemeContext';

// import { IoIosCall } from "react-icons/io";

const Header = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);




  return (
    <div>
      <header className={`${theme == 'dark' ? 'header_light' : 'header_dark'}`}>
        {/* <header className={`app ${theme}`}> */}
        <div className="page_width">
          <nav>
            <div className="logo">
              <Link to="/" ><img src={Logo} alt="" /></Link>
            </div>
            <div className="nav_link">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/create_blog_post">Create Blog Post</Link>
                </li>
                <li>
                  <Link to="/author">Pages</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
                <li>
                  <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <IoIosSearch />
                  </div>
                </li>
                <li>
                  <button
                    onClick={toggleTheme}
                    className={'background-change-button ${animationDirection}'}
                  >
                    <div className="sun-container" id='colorButton'>
                      <HiSun />
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
