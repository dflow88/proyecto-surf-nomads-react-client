import React, { useState, useContext } from 'react'

import UserContext from '../../context/users/UserContext'
import TourContext from '../../context/tours/TourContext'

import logo from './../../images/surfnomadalogo.png'

import { Link } from 'react-router-dom'

export default function Header() {



    const [nav, setNav] = useState(false)


    const userCtx = useContext(UserContext)


    const {
        authStatus,
        user,
        logOut,
    } = userCtx

    const tourCtx = useContext(TourContext)
    const{
        killTour
    } = tourCtx

    const showNav = (event) => {
        event.preventDefault()
        setNav(!nav)
    }
    return (
        <>
            <header class="bg-white divide-y-4 divide-red-100 divide-opacity-75 divide-solid shadow" >
                <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                    <div class="w-full py-6 flex items-center justify-between border-b border-sky-500 lg:border-none">
                        <div class="flex items-center">
                            <Link to="/">
                                <span class="sr-only">Workflow</span>
                                <img class="h-12 w-auto" src={logo} alt="" />
                            </Link>
                            <div class="block ml-10 space-x-8 lg:block">
                                <Link to="/guides" class="text-base font-medium text-sky-600 hover:text-sky-700" key="Solutions">
                                    Guides
                                </Link>

                                <Link to="/tours" class="text-base font-medium text-sky-600 hover:text-sky-700" key="Pricing">
                                    Tours
                                </Link>
                                {!authStatus ?
                                <Link to="/guide-signup" class="text-base font-medium text-teal-600 hover:text-teal-700" key="Docs">
                                    Are you a guide?
                                </Link>
                                : null
                                }
                                <Link to="/" class="text-base font-medium text-sky-600 hover:text-sky-700" key="Company">
                                    
                                </Link>
                            </div>
                        </div>
                        {
                        !authStatus ?
                                    
                            <div class="ml-10 space-x-4">
                                <Link to="/login" class="inline-block bg-sky-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">Login</Link>
                                <Link to="/signup" class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-sky-600 hover:bg-sky-50">Sign up</Link>
                            </div>
                        :
                            <div>
                                <button
                                    onClick={(e) => { showNav(e) }}
                                    type="button" className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    {user ?
                                    <img className="h-8 w-8 rounded-full" src={user.picture} alt="" />
                                    : null}
                                </button>
                            </div>
                        }
                        {
                        nav ?
                            
                                <>
                                    <div className="origin-top-right absolute z-50 right-14 top-16 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                        <button type="submit" onClick={(e) => { showNav(e) }} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"><Link to="/dashboard">Your Profile</Link></button>
                                        <button onClick={(e) => { logOut(); killTour(); showNav(e) }} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Log out</button>
                                    </div>
                                </>
                             : null
                        }
                    </div>

                </nav>
            </header>
        </>
    )
}