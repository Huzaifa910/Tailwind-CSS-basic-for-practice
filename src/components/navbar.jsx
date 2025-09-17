import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <nav>
                        <li className="flex bg-zinc-600 font-serif font-bold text-zinc-50 p-2 justify-around">
                            <Link to="/" className="cursor-pointer hover:text-zinc-300">
                                Home
                            </Link>
                            <Link to="/about" className="cursor-pointer hover:text-zinc-300">
                                About
                            </Link>
                            <Link to="/user-profile" className="cursor-pointer hover:text-zinc-300">
                                User Profile
                            </Link>
                        </li>
                    </nav>
      
    </div>
  )
}

export default Navbar
