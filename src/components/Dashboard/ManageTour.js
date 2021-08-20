import React, {useState,
    useContext, useEffect} from 'react'

import TourContext from '../../context/tours/TourContext'
import UserContext from '../../context/users/UserContext'

export default function ManageTour() {

    const context = useContext(TourContext)
    
    const {
        tour,
        tours,
        getTours,
        createTour,
        updateTour,
        deleteTour,
        // getAmenities,
        // allAmenities,
        findTour
    } = context

    const contextUser = useContext(UserContext)
    const {
        token,
        user
    } = contextUser


    const [ editActive, setEditActive ] = useState(false)

    const [ createActive, setCreateActive ] = useState(false)




    // const [ checkboxValue, setCheckboxValue ] = useState(
    //     new Array(allAmenities.length).fill(false)
    // )

    // const handleCheck = (event) => {
    //     setCheckboxValue(!checkboxValue)
    // }
    

    const activateCreate = (event) => {
        event.preventDefault()
        setCreateActive(true)
    }

    const [newTour, setNewTour] = useState({
        name:"",
        shortDescription:"",
        description:"",
        priceDay:"",
        country: "",
        area: "",
        guide: user._id,
        picture1: "",
        picture2: "",
        picture3: "",
        picture4: ""
    })


    const turnOff = (event) => {
        event.preventDefault();
        setCreateActive(false);
        setEditActive(false)
    }


    const handleChange = (event) => {
        event.preventDefault()
        setNewTour({
            ...newTour,
            [event.target.name]: event.target.value
        })
    }

    const sendForm = (event) => {
        event.preventDefault()
        createTour(newTour)
    }

    const editTour = (event) => {
        event.preventDefault()
        console.log(newTour)
        updateTour(newTour)
        setEditActive(false)

    }

    const activateEdit = (event, element) => {
        event.preventDefault()
        setEditActive(true)
    }

    // const eraseTour = (event, element) => {
    //     event.preventDefault()
    //     deleteTour(element)
    // }

    const findTourbyGuideId =  (guideId) => {

          tours.map((element) => {
            
             if (element.guide[0] === guideId) {
                return findTour(element._id)
            } 
        })
    }

    useEffect( () => {
        getTours()

        findTourbyGuideId(user._id)
        // setCheckboxValue(false)
        // getAmenities()
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [])

    return (
        <div>

            <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">

                <div>

                    <div>
                        <h1 class="text-2xl font-semibold text-gray-900">
                            Manage your tour
                        </h1>
                    </div>

                    <div className="mt-8">

                        {/* CREATE/EDIT THE TOUR */}

                    { editActive || createActive ?
                        <div className="mt-6 grid grid-cols-2">
                            <form className="space-y-6" onSubmit={(e)=> { editActive ? editTour(e) : sendForm(e) }}>

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Tour Name
                                    </label>
                                    <div className="mt-1">
                                        <input id="name" name="name" defaultValue={tour.name} type="text" required
                                            className="appearance-none block w-4/5 px-5 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                            onChange={(e)=> { handleChange(e) }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">
                                        Short description
                                    </label>
                                    <div className="mt-1">
                                        <textarea id="shortDescription" defaultValue={tour.shortDescription} name="shortDescription" type="text" required
                                            className="appearance-none block w-4/5 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                            onChange={(e)=> { handleChange(e) }}/>
                                    </div>
                                </div>           

                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                    Main description
                                    </label>
                                    <div className="mt-1">
                                        <textarea 
                                            id="description" 
                                            name="description" 
                                            defaultValue={tour.description}
                                            type="text" 
                                            required 
                                            className="appearance-none block w-4/5 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" 
                                            onChange={(e) => { handleChange(e) }}/>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                        Country
                                    </label>
                                    <div className="mt-1">
                                        <select 
                                            value={newTour.Country}
                                            id="country" 
                                            name="country" 
                                            type="text" 
                                            defaultValue={tour.country}
                                            required 
                                            className="appearance-none block w-4/5 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" 
                                            onChange={(e) => { handleChange(e) }}
                                            >
                                            <option value="">Choose the tour country</option>
                                            <option value="Mexico">Mexico</option>
                                            
                                        </select>
                                    </div>
                                </div>



                                <div className="space-y-1">
                                    <label htmlFor="area" className="block text-sm font-medium text-gray-700">
                                        Area
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                            id="area" 
                                            name="area" 
                                            type="text" 
                                            defaultValue={tour.area}
                                            required 
                                            className="appearance-none block w-4/5 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" 
                                            onChange={(e) => { handleChange(e) }}
                                        />
                                    </div>
                                </div>    

                                <div className="space-y-1">
                                    <label htmlFor="priceDay" className="block text-sm font-medium text-gray-700">
                                        Daily price per person (US$)
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                            id="priceDay" 
                                            name="priceDay" 
                                            defaultValue={tour.priceDay}
                                            type="number" 
                                            required 
                                            className="appearance-none block w-1/6 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" 
                                            onChange={(e) => { handleChange(e) }}/>
                                    </div>
                                </div>   

                                <div className="space-y-1">
                                    <label htmlFor="picture1" className="block text-sm font-medium text-gray-700">
                                        Picture 1
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                            id="area" 
                                            name="picture1" 
                                            type="text" 
                                            defaultValue={tour.picture1}
                                            required 
                                            className="appearance-none block w-4/5 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" 
                                            onChange={(e) => { handleChange(e) }}
                                        />
                                    </div>
                                </div>               
                                <div className="space-y-1">
                                    <label htmlFor="picture2" className="block text-sm font-medium text-gray-700">
                                        Picture 2
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                            id="area" 
                                            name="picture2" 
                                            defaultValue={tour.picture2}
                                            type="text" 
                                            required 
                                            className="appearance-none block w-4/5 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" 
                                            onChange={(e) => { handleChange(e) }}
                                        />
                                    </div>
                                </div>  
                                <div className="space-y-1">
                                    <label htmlFor="picture3" className="block text-sm font-medium text-gray-700">
                                        Picture 3
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                            id="area" 
                                            name="picture3" 
                                            defaultValue={tour.picture3}
                                            type="text" 
                                            required 
                                            className="appearance-none block w-4/5 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" 
                                            onChange={(e) => { handleChange(e) }}
                                        />
                                    </div>
                                </div>  
                                <div className="space-y-1">
                                    <label htmlFor="picture4" className="block text-sm font-medium text-gray-700">
                                        Picture 4
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                            id="area" 
                                            name="picture4" 
                                            type="text" 
                                            defaultValue={tour.picture4}
                                            required 
                                            className="appearance-none block w-4/5 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" 
                                            onChange={(e) => { handleChange(e) }}
                                        />
                                    </div>
                                </div> 


                                {/* <div class="space-y-6 sm:space-y-5 divide-y divide-gray-200">        
                                    <div role="group" aria-labelledby="label-amenities">
                                        <div class="sm:grid sm:grid-cols-1 sm:gap-4 ">
                                            <div>
                                                <div class="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700" id="Amenities">
                                                    Amenities
                                                </div>
                                            </div>
                                                <select class="w-4/5 h-full" type="text" name="amenities" multiple>
                                                    { 
                                                        allAmenities.map((e,i) => {
                                                            return(
                                                                        <option key={i} value={e._id}>{e.name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                                    
                                                
                                        </div>
                                    </div>
                                </div> */}

                                <div class="pt-5 sm:grid sm:grid-cols-2">
                                    <div class="flex justify-center">
                                        <button type="button" onClick={(e) => {turnOff(e)}} class="ml-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-black bg-white hover:bg-sky-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                                            Cancel
                                        </button>
                                        <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div>
                                <img className="w-1/2"  src={tour.picture1} alt=""/>
                                <img className="w-1/2"  src={tour.picture2} alt=""/>
                                <img className="w-1/2"  src={tour.picture3} alt=""/>
                                <img className="w-1/2"  src={tour.picture4} alt=""/>
                            </div>
                        </div>
                            
                    :
                        

                        <div className="mt-6 grid grid-cols-2">
                            <form className="space-y-6" onSubmit={(e)=> { sendForm(e) }}
                                    >

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Tour Name
                                    </label>
                                    <div className="mt-1">
                                        {tour.name ? <p className="text-base text-gray-900">{tour.name}</p> : <p className="text-base text-gray-400">Give your tour a cool name</p>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">
                                        Short description
                                    </label>
                                    <div className="mt-1">
                                    {tour.name ? <p className="text-base text-gray-900">{tour.shortDescription}</p> : <p className="text-base text-gray-400">Input short description</p>}
                                    </div>
                                </div>           

                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                    Main description
                                    </label>
                                    {tour.name ? <p className="text-base text-gray-900">{tour.description}</p> : <p className="text-base text-gray-400">Describe your tour</p>}
                                </div>

                                <div>
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                        Country
                                    </label>
                                    <div className="mt-1">
                                    {tour.name ? <p className="text-base text-gray-900">{tour.country}</p> : <p className="text-base text-gray-400">Missing country</p>}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="area" className="block text-sm font-medium text-gray-700">
                                        Area
                                    </label>
                                    <div className="mt-1">
                                    {tour.name ? <p className="text-base text-gray-900">{tour.area}</p> : <p className="text-base text-gray-400">Missing area</p>}
                                    </div>
                                </div>    

                                <div className="space-y-1">
                                    <label htmlFor="priceDay" className="block text-sm font-medium text-gray-700">
                                        Daily price (US$)
                                    </label>
                                    <div className="mt-1">
                                    {tour.name ? <p className="text-base text-gray-900">{tour.priceDay}</p> : <p className="text-base text-gray-400">Put a price for your tour</p>}
                                    </div>
                                </div>                

                                {/* <div class="space-y-6 sm:space-y-5 divide-y divide-gray-200">        
                                    <div role="group" aria-labelledby="label-amenities">
                                        <div class="sm:grid sm:grid-cols-1 sm:gap-4 ">
                                            <div>
                                                <div class="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700" id="label-email">
                                                    Amenities
                                                </div>
                                            </div>
                                            <div class="mt-4 sm:mt-0 sm:col-span-2">
                                                <div class="max-w-lg space-y-1 sm:grid sm:grid-cols-4 sm:gap-4">
                                                    <div class="relative flex items-start">
                                                        <div class="ml-3 text-sm">
                                                            <label htmlFor="comments" class="font-medium text-gray-700">Comments</label>
                                                        </div>
                                                    </div>
                                                    <div class="relative flex items-start">
                                                        <div class="ml-3 text-sm">
                                                            <label htmlfor="comments" class="font-medium text-gray-700">Comments</label>
                                                        </div>
                                                    </div>
                                                    <div class="relative flex items-start">
                                                        <div class="flex items-center h-5">
                                                            <input id="comments" name={`amenities[]`} type="checkbox" class="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300 rounded"/>
                                                        </div>
                                                        <div class="ml-3 text-sm">
                                                            <label htmlfor="comments" class="font-medium text-gray-700">Comments</label>
                                                        </div>
                                                    </div>
                                                    <div class="relative flex items-start">
                                                        <div class="flex items-center h-5">
                                                            <input id="comments" name={`amenities[]`} type="checkbox" class="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300 rounded"/>
                                                        </div>
                                                        <div class="ml-3 text-sm">
                                                            <label htmlfor="comments" class="font-medium text-gray-700">Comments</label>
                                                        </div>
                                                    </div>                                                                                                            
                                                    <div>
                                                        <div class="relative flex items-start">
                                                            <div class="flex items-center h-5">
                                                                <input id="candidates" name="candidates" type="checkbox" class="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300 rounded"/>
                                                            </div>
                                                            <div class="ml-3 text-sm">
                                                                <label htmlfor="candidates" class="font-medium text-gray-700">Candidates</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="relative flex items-start">
                                                            <div class="flex items-center h-5">
                                                                <input id="offers" name="offers" type="checkbox" class="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300 rounded"/>
                                                            </div>
                                                            <div class="ml-3 text-sm">
                                                                <label htmlfor="offers" class="font-medium text-gray-700">Offers</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                <div class="pt-5 sm:grid sm:grid-cols-2">
                                    <div class="flex justify-center">

                                        <button onClick={tour.name ? (e) => {activateEdit(e, tour)} : (e) => {activateCreate(e)}} type="button" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                                            {tour.name ? "Edit" : "Crear nuevo tour"}
                                        </button>

                                    </div>
                                </div>
                            </form>
                            <div>
                                <img className="w-1/2" src={tour.picture1} alt=""/>
                                <img className="w-1/2" src={tour.picture2} alt=""/>
                                <img className="w-1/2" src={tour.picture3} alt=""/>
                                <img className="w-1/2" src={tour.picture4} alt=""/>
                            </div>
                        </div>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
