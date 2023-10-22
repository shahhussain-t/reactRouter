import React from 'react'
import { Link } from 'react-router-dom'
import style from './header.module.css'

const Header = () => {
  return (
    <div className={style.headerContainer}>

     <div >
       <Link className={style.headerLogo} to='/'>#VANLIFE</Link>
    </div>

    <div className={style.headerNavmenu}>
        <nav>
     <Link className={style.linkStyle} to='/about'>About</Link>
     <Link className={style.linkStyle} to='Vans'>Vans</Link>

        </nav>

    </div>



    </div>

    
  )
}

export default Header