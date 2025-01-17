// import React from "react";
import { Link } from 'react-router-dom'
import logoImg from '../assets/Logo.svg'
const linkStyle = 'text-[#61dafb] no-underline text-[24px] rounded-lg px-4 py-1 hover:bg-[#fff] hover:text-[#000] duration-500'

const Sidebar = () => {
  return (
    <div className='w-[350px] bg-[#282c34] color-[#fff] p-[20px] flex flex-col items-start gap-5 '>
      <img src={logoImg} alt='logo of school' />
      <nav>
        <ul>
          <li>
            <Link to='/' className={linkStyle}>
              Main
            </Link>
          </li>
          <li>
            <Link to='/about' className={linkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to='/data' className={linkStyle}>
              Data
            </Link>
          </li>
          <li>
            <Link to='/skills' className={linkStyle}>
              Basic skills
            </Link>
          </li>
          <li>
            <Link to='/news' className={linkStyle}>
              News
            </Link>
          </li>
          <li>
            <Link to='/team' className={linkStyle}>
              Our team
            </Link>
          </li>
          <li>
            <Link to='/contact' className={linkStyle}>
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
