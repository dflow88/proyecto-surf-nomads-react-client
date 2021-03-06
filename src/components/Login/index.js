import React, { useState, useContext } from 'react'
import UserContext from '../../context/users/UserContext'
import logo from './../../images/surfnomadalogo.png'

export default function Login() {

    const [ data, setData ] = useState({
        email: "",
        password: ""
    }) 

    const userCtx = useContext(UserContext)

    const {
        loginUser
    } = userCtx


    const handleChange = (event) => {
        event.preventDefault()

        setData({
            ...data,
            [event.target.name]: event.target.value
        })

    }

    const sendData = (event) => {
        event.preventDefault()
        return loginUser(data)
    }


    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img className="mx-auto h-24 w-auto" src={logo} alt="Workflow" />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-600">
                            Iniciar sesión
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={ (e) => { sendData(e) } }>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label for="email-address" className="sr-only">Tu correo</label>
                                <input 
                                id="email-address" 
                                name="email" 
                                type="email" 
                                autocomplete="email" 
                                required 
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm" placeholder="Tu correo" 
                                onChange={(e) => { handleChange(e) }}
                                />
                            </div>
                            <div>
                                <label for="password" className="sr-only">Password</label>
                                <input id="password" name="password" type="password" autocomplete="current-password" 
                                required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm" 
                                placeholder="Password" 
                                onChange={(e) => { handleChange(e) }}
                                />
                            </div>
                        </div>

                        {/* <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded" />
                                <label for="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Recuérdame
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-sky-600 hover:text-sky-500">
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </div>
                        </div> */}

                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                                    <svg className="h-5 w-5 text-sky-500 group-hover:text-sky-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                Comenzar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}