import React, { useState, useContext } from 'react'

import UserContext from './../../context/UserContext'

import logo from './../../images/surf-nomada-1.png'

import { Link } from 'react-router-dom'

export default function Header() {



    const [nav, setNav] = useState(false)


    const userCtx = useContext(UserContext)


    const {
        authStatus,
        user,
        logOut
    } = userCtx

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
                                <img class="h-10 w-auto" src={logo} alt="" />
                            </Link>
                            <div class="block ml-10 space-x-8 lg:block">
                                <Link to="/guides" class="text-base font-medium text-sky-600 hover:text-sky-700" key="Solutions">
                                    Guides
                                </Link>

                                <Link to="/tours" class="text-base font-medium text-sky-600 hover:text-sky-700" key="Pricing">
                                    Tours
                                </Link>

                                <Link to="/" class="text-base font-medium text-sky-600 hover:text-sky-700" key="Docs">
                                    About us
                                </Link>

                                <Link to="/" class="text-base font-medium text-sky-600 hover:text-sky-700" key="Company">
                                    
                                </Link>
                            </div>
                        </div>
                        <div class="ml-10 space-x-4">
                            <Link to="/login" class="inline-block bg-sky-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">Login</Link>
                            <Link to="/signup" class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-sky-600 hover:bg-sky-50">Sign up</Link>
                        </div>
                    </div>

                </nav>
            </header>
        </>
    )
}