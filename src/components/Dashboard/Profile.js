import React, {useState,
    useContext, useEffect} from 'react'

import UserContext from '../../context/users/UserContext'

export default function Profile() {


    const contextUser = useContext(UserContext)
    const {
        token,
        user,
        updateUser,
    } = contextUser

    const [ editActive, setEditActive ] = useState(false)
    const [ editUser, setEditUser ] = useState({})


    const handleChange = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        setEditUser({
            ...editUser,
            [event.target.name]: event.target.value
            })
    }

    const activateEdit = (event) => {
        event.preventDefault()
        setEditActive(true)
    }

    const sendForm = (event, element) => {
        console.log(event)
        event.preventDefault()
        updateUser(element, user)


    }


    useEffect( () => {

        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [])

    return (
        <div>

            <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">

                <div>

                    <div>
                        <h1 class="text-2xl font-semibold text-gray-900">
                            Profile
                        </h1>
                    </div>

                    <div className="mt-8">

                        {/* CREATE/EDIT THE USER */}

                    { editActive ?
                        <div className="mt-6 grid grid-cols-2">
                            <form className="space-y-6" onSubmit={(e)=> { sendForm(e, editUser); setEditActive(false) }}
                            >

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <div className="mt-1">
                                        <input  name="firstName" type="text" defaultValue={user.firstName} required
                                            className="appearance-none block w-2/3 px-5 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                            onChange={(e)=> { handleChange(e) }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">
                                        Last Name
                                    </label>
                                    <div className="mt-1">
                                        <input  name="lastName" type="text" defaultValue={user.lastName} required
                                            className="appearance-none block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                            onChange={(e)=> { handleChange(e) }}/>
                                    </div>
                                </div>     

                                <div>
                                    <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">
                                        Username
                                    </label>
                                    <div className="mt-1">
                                        <p className="text-base text-gray-400">{user.username}</p>
                                    </div>
                                </div>         

                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                            name="email" 
                                            type="email" 
                                            defaultValue={user.email}
                                            required 
                                            className="appearance-none block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" 
                                            onChange={(e) => { handleChange(e) }}/>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="area" className="block text-sm font-medium text-gray-700">
                                        Role
                                    </label>
                                    <div className="mt-1">
                                        <p className="text-base text-gray-400">{user.role}</p>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="area" className="block text-sm font-medium text-gray-700">
                                        Picture URL
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                            name="picture" 
                                            type="text" 
                                            defaultValue={user.picture}
                                            required 
                                            className="appearance-none block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" 
                                            onChange={(e) => { handleChange(e) }}
                                        />
                                    </div>
                                </div>        

                                <div class="pt-5 sm:grid sm:grid-cols-2">
                                    <div class="flex justify-center">
                                        <button type="button" onClick={(e) => {setEditActive(false)}} class="ml-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-black bg-white hover:bg-sky-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                                            Cancel
                                        </button>
                                        <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <img className="flex items-center justify-items-start" src={user.picture} alt="" />
                        </div>
                            
                    :
                        

                        <div className="mt-6 grid grid-cols-2">
                            <form className="space-y-6" //onSubmit={(e)=> { sendForm(e) }}
                                    >

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <div className="mt-1">
                                        {user.firstName ? <p className="text-base text-gray-900">{user.firstName}</p> : <p className="text-base text-gray-400">Give your user a cool name</p>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">
                                        Last Name
                                    </label>
                                    <div className="mt-1">
                                    {user.lastName ? <p className="text-base text-gray-900">{user.lastName}</p> : <p className="text-base text-gray-400">Input short description</p>}
                                    </div>
                                </div>           

                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                        Username
                                    </label>
                                    {user.username ? <p className="text-base text-gray-900">{user.username}</p> : <p className="text-base text-gray-400">Describe your user</p>}
                                </div>

                                <div>
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <div className="mt-1">
                                    {user.email ? <p className="text-base text-gray-900">{user.email}</p> : <p className="text-base text-gray-400">Missing country</p>}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="area" className="block text-sm font-medium text-gray-700">
                                        User type
                                    </label>
                                    <div className="mt-1">
                                    {user.role ? <p className="text-base text-gray-900">{user.role}</p> : <p className="text-base text-gray-400">Missing area</p>}
                                    </div>
                                </div>    
   


                                <div class="pt-5 sm:grid sm:grid-cols-2">
                                    <div class="flex justify-center">

                                        <button onClick={(e) => {activateEdit(e, user)}} type="button" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                                            Edit
                                        </button>

                                    </div>
                                </div>
                            </form>
                            <img src={user.picture} alt="" />
                              
                        </div>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
