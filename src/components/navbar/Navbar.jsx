import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/GPT-3.svg'

import './navbar.css'

const Menu = () => (
    <>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#wpt3">Wath is GPT?</a></li>
            <li><a href="#possibility">Open AI</a></li>
            <li><a href="#features">Case Studies</a></li>
            <li><a href="#blog">Library</a></li>
        </ul>

    </>
)
const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <section className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='gpt3__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='gpt3__navbar-sign'>
                <a href='#home'>Sign In</a>
                <button type='button'> Sign Up</button>
            </div>
            <div className='gpt3__navbar-menu'>
                {toggleMenu

                    ? <RiCloseLine color="#fafafa" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fafafa" size={27} onClick={() => setToggleMenu(true)} />

                }
                {
                    toggleMenu && (
                        <div className='gpt3__navbar-menu_container scale-up-center'>
                            <div className='gpt3__navbar-menu_container-links'>
                                <Menu />
                                <div className='gpt3__navbar-menu_container-links-sign'>
                                    <a href='#home'>Sign In</a>
                                    <button type='button'> Sign Up</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Navbar