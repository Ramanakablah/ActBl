import React from 'react'
import style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={`flex items-center justify-between gap-8 ${style.Navbar}`}>

            <img src="https://actabl.com/wp-content/uploads/2022/11/actabl.png" alt="" className={style.NavImage} />

            <ul className={`flex items-center justify-start flex-1 gap-8 ${style.NavWrapper}`}>
                <li>
                    Products
                </li>
                <li>
                    Solutions
                </li>
                <li>
                    Integrations
                </li>
                <li>
                    Resources
                </li>
                <li>
                    Company
                </li>
            </ul>
            <div className={`flex gap-4`}>
                <button className={`${style.LoginButton} Buttons`}>Login</button>
                <button className={`${style.Demo} Buttons`}>Request a Demo</button>
            </div>
        </nav>
    )
}

export default Navbar