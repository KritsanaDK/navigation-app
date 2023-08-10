import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import MemuData from '../data/MemuData';

import './Navigation.css'

const Navigation = () => {

    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => setShowMenu(!showMenu)


    return (
        <aside>
            <div className='navbar'>
                <div className='navbar-toggle'>
                    <Link to="#" className='menu-bar'>
                        <FaBars onClick={toggleMenu} />
                    </Link>
                </div>
            </div>
            <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
                <ul className='nav-menu-item'>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bar'>
                            <FaRegWindowClose onClick={toggleMenu} />
                        </Link>
                    </li>

                    {MemuData.map((menu, index) => {
                        return (
                            <li key={index} className='menu-text'>
                                <Link to={menu.path}>
                                    {menu.icon} <span>{menu.title}</span>
                                </Link>
                            </li>
                        )
                    })}


                </ul>

            </nav>
        </aside>
    )
}

export default Navigation