import React, { useState,useEffect } from 'react'
import './navbar.css'
import IconDarkMode from '../../assets/images/icon-moon.svg'

import Logo from '../../assets/images/logo.svg'

const Navbar = (props) => {
   

    return (
        <nav className={`container nav__container ${props.theme}`} >
            <div>
                <img src={Logo} alt="logo"></img>
            </div>
            <div className='nav__right'>

                <select name="fontStyle" onChange={props.handleFontChange} id="" >
                    <option className="styleoption"value="Sans-Serif">Sans Serif</option>
                    <option value="Serif">Serif</option>
                    <option value="Mono">Mono</option>


                </select>

                <div className='dark-mode'>
                   
                    <div>
                        <label className="switch">
                            <input type="checkbox" onChange={props.toggleTheme} checked={props.checkboxValue} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className='on-mode'><img src={IconDarkMode} alt="" /></div>
                </div>

            </div>


        </nav >
    )
}

export default Navbar