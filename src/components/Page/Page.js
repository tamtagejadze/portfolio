import React, { useState } from 'react';
import {FiGithub} from 'react-icons/fi';
import {FaLinkedinIn} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Page({children}) {
  const [activeNav, setActiveNav] = useState('#')
  return (
   <div>
    <header>
      <nav className='nav-bar'>
        <ul className='permalinks'>
          <li>
            <Link to={'/'} onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to={"/portfolio"} onClick={() => setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active' : ''}>Portfolio</Link>
          </li>
          <li>
            <Link to={'/contact'} onClick={() => setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>

    {children}
    
    <footer>
      <ul className='permalinks'>
      <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>

      <div className="footer__socials">        
        <a href="https://https://github.com/tamtagejadze" target='_blank'><FiGithub /></a>
        <a href="https://linkedin.com" target='_blank'><FaLinkedinIn /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
   </div>
  )
}

export default Page