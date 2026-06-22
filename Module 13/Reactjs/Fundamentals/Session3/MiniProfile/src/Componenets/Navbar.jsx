import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="flex items-center justify-between bg-black px-8 py-4 text-white shadow-lg">

                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <i className="fa-solid fa-store text-2xl text-indigo-500"></i>
                    <h1 className="text-2xl font-bold tracking-wide">
                        ShopHub
                    </h1>
                </div>

                {/* Menu */}
                <ul className="flex items-center gap-10 text-lg font-medium">
                    <li className="cursor-pointer transition hover:text-indigo-400">
                        <NavLink to='/product'>Product</NavLink>
                    </li>
                </ul>

                {/* Right Side Icons */}
                <div className="flex items-center gap-6">
                    <NavLink to='/userprofile'><i className="fa-solid fa-user-circle cursor-pointer text-3xl text-indigo-400"></i></NavLink>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
