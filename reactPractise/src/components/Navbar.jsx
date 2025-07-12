import React, { PureComponent } from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {

    return (
        <nav className="fixed top-0 w-full z-10">
            <div className='flex justify-between items-center bg-blue-200 h-16'>

                <ul className='flex justify-between rounded-lg items-center h-full text-lg'>

                    <li>
                        <NavLink to="/home" 
                            className={({isActive}) => `text-black hover:text-red-600 transition duration-200 rounded-lg m-8 p- ${isActive ? `text-red-600` : `text-black`}`}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" 
                            className={({isActive}) => `text-black hover:text-red-600 transition duration-200 rounded-lg m-8 p- ${isActive ? `text-red-600` : `text-black`}`}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/currcon" 
                            className={({isActive}) => `text-black hover:text-red-600 transition duration-200 rounded-lg m-8 p- ${isActive ? `text-red-600` : `text-black`}`}>
                            CurrCon
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/randompass" 
                            className={({isActive}) => `text-black hover:text-red-600 transition duration-200 rounded-lg m-8 p- ${isActive ? `text-red-600` : `text-black`}`}>
                            RandomPass
                        </NavLink>
                    </li>

                </ul>

        
                <div>
                    <NavLink to="/login" className='bg-red-400 text-lg text-black hover:bg-red-500 transition duration-200 rounded-lg mr-8 p-2'>Login</NavLink>
                </div>
            </div>
        </nav>
    )
}