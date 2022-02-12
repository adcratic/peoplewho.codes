import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { NavbarData } from './NavbarData';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const backToTop = ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

  }
  const refreshPage = ()=>{
    window.addEventListener("dblclick", ()=>window.location.reload());
  }
 

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-text' onClick={()=>{closeMobileMenu(); backToTop(); refreshPage();}}>
            <img src='images/logo.png' className='nav-logo' alt='navLogo' /> <span className='navbar-logo-text'>peoplewho.codes</span>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {NavbarData.map((item)=>{
              const {link,cName,title} = item;
              return(
                <li className='nav-item'>
                  <Link to={link} className={cName} onClick={()=>{closeMobileMenu(); backToTop();}}>
                    {title}
                  </Link>
                </li>
              )
            })}
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
