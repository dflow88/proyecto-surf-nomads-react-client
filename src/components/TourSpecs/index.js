import React, {useContext, useEffect, useState} from 'react'

import { 
    useParams
} from 'react-router-dom'

import TourContext from '../../context/tours/TourContext'

import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

export default  function TourSpecs() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    }

    const context = useContext(TourContext)
    
    const {
        tours,
        findTour
    } = context
    
    const { tourId}  = useParams()

    console.log(tourId)

    useEffect( () => {


        console.log("Useeffect")
        findTour(tourId)
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [])

   

    return (
        <div>
            <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                    <li>
                    <div className="flex items-center">
                        <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                        Mexico
                        </a>
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                        </svg>
                    </div>
                    </li>

                    <li className="text-sm">
                    <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                        Salina Cruz
                    </a>
                    </li>
                </ol>
                </nav>

                {/* Image gallery */}
                <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                        <img src="https://scontent.foax2-1.fna.fbcdn.net/v/t1.6435-9/33248050_10214909517745621_931752799354486784_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGGiXO3WmX9_1bUAuG43MUJ_IlzGTNvBk78iXMZM28GTp0lL9Z8ge2Cs-fZKr3M_b8&_nc_ohc=3a4m_lsRslEAX8K42OA&_nc_ht=scontent.foax2-1.fna&oh=12cda2331d7dce671659cea730215106&oe=613CE0E1" alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full object-center object-cover"/>
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                            <img src="https://scontent.foax2-1.fna.fbcdn.net/v/t1.6435-9/65921517_2124485944326726_8480232064879165440_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeELjIakc_ONHXWt1ZBy-n637tDqqi94znTu0OqqL3jOdN71ysBpDMLXaftBvQc-zI8&_nc_ohc=5wWK69F7hYIAX-eWlFp&tn=JifT7AxkWWAeiEu5&_nc_ht=scontent.foax2-1.fna&oh=5b69a7c4c42178419b277352b2b62f4c&oe=613CC6DE" alt="Model wearing plain black basic tee." className="w-full h-full object-center object-cover"/>
                        </div>
                        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                            <img src="https://scontent.foax2-1.fna.fbcdn.net/v/t1.6435-9/65645888_2124485884326732_557025548547653632_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHvNcyETxmPRGVr2qHt7akUKQmoDAgUmPcpCagMCBSY96e0_3t8SKji3ebZvS1r190&_nc_ohc=rEkE-0CvisIAX_Fu3Qe&_nc_ht=scontent.foax2-1.fna&oh=d3764fef43cea9a53f938ff4136a8e8c&oe=613D91CC" alt="Model wearing plain gray basic tee." className="w-full h-full object-center object-cover"/>
                        </div>
                    </div>
                    <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                        <img src="https://imparcialoaxaca.mx/wp-content/uploads/2020/02/Corren.jpg" className="w-full h-full object-right object-cover"/>
                    </div>
                </div>

                {/* Product info */}
                <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                    Tour Salina Cruz
                    </h1>
                </div>

                {/* Options */}
                <div className="mt-4 lg:mt-0 lg:row-span-3">
                    <h2 className="sr-only">Tour information</h2>
                    <p className="text-3xl text-gray-900">$140 /day</p>

                    {/* Reviews */}
                    <div className="mt-6">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                        <div className="flex items-center">
                        

                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>


                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>


                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>


                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>


                        <svg className="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        </div>
                        <p className="sr-only">4 out of 5 stars</p>
                        <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                    </div>
                    </div>

                    <form className="mt-10">

                        {/* <div>
                            <h3 className="text-sm text-gray-900 font-medium">Color</h3>

                            <fieldset className="mt-4">
                            <legend className="sr-only">
                                Choose a color
                            </legend>
                            <div className="flex items-center space-x-3">
                    
                                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label"/>
                                <p id="color-choice-0-label" className="sr-only">
                                    White
                                </p>
                                <span aria-hidden="true" className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                                </label>

                                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                <input type="radio" name="color-choice" value="Gray" className="sr-only" aria-labelledby="color-choice-1-label"/>
                                <p id="color-choice-1-label" className="sr-only">
                                    Gray
                                </p>
                                <span aria-hidden="true" className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"></span>
                                </label>

                                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                                <input type="radio" name="color-choice" value="Black" className="sr-only" aria-labelledby="color-choice-2-label"/>
                                <p id="color-choice-2-label" className="sr-only">
                                    Black
                                </p>
                                <span aria-hidden="true" className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"></span>
                                </label>
                            </div>
                            </fieldset>
                        </div> */}

                        {/* <div className="mt-10">
                            <div className="flex items-center justify-between">
                            <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                            </div>

                            <fieldset className="mt-4">
                            <legend className="sr-only">
                                Choose a size
                            </legend>
                            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed">
                                <input type="radio" name="size-choice" value="XXS" disabled className="sr-only" aria-labelledby="size-choice-0-label"/>
                                <p id="size-choice-0-label">
                                    XXS
                                </p>

                                <div aria-hidden="true" className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none">
                                    <svg className="absolute inset-0 w-full h-full text-gray-200 stroke-2" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                                    <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                                    </svg>
                                </div>
                                </label>

                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                <input type="radio" name="size-choice" value="XS" className="sr-only" aria-labelledby="size-choice-1-label"/>
                                <p id="size-choice-1-label">
                                    XS
                                </p>

                                <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                                </label>

                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                <input type="radio" name="size-choice" value="S" className="sr-only" aria-labelledby="size-choice-2-label"/>
                                <p id="size-choice-2-label">
                                    S
                                </p>

                                <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                                </label>

                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                <input type="radio" name="size-choice" value="M" className="sr-only" aria-labelledby="size-choice-3-label"/>
                                <p id="size-choice-3-label">
                                    M
                                </p>

                                <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                                </label>

                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                <input type="radio" name="size-choice" value="L" className="sr-only" aria-labelledby="size-choice-4-label"/>
                                <p id="size-choice-4-label">
                                    L
                                </p>

                                <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                                </label>

                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                <input type="radio" name="size-choice" value="XL" className="sr-only" aria-labelledby="size-choice-5-label"/>
                                <p id="size-choice-5-label">
                                    XL
                                </p>

                                <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                                </label>

                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                <input type="radio" name="size-choice" value="2XL" className="sr-only" aria-labelledby="size-choice-6-label"/>
                                <p id="size-choice-6-label">
                                    2XL
                                </p>

                                <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                                </label>

                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                <input type="radio" name="size-choice" value="3XL" className="sr-only" aria-labelledby="size-choice-7-label"/>
                                <p id="size-choice-7-label">
                                    3XL
                                </p>

                                <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                                </label>
                            </div>
                            </fieldset>


                        </div> */}

                        <DatePicker
                            selected={startDate}
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            inline
                            /> 

                        <button type="submit" className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><a href="/stripe">Book the tour</a></button>
                    </form>
                </div>

                <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <div>
                    <h3 className="sr-only">Description</h3>

                    <div className="space-y-6">
                        <p className="text-base text-gray-900">Tour with unlimited transportation to the waves on request and by recommendation of Luis "Toro", your expert guide. You will also have 3 meals included in this package and accommodation in a very nice surf camp with A/C.</p>
                    </div>
                    </div>

                    <div className="mt-10">
                    <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                    <div className="mt-4">
                        <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                        <li className="text-gray-400"><span className="text-gray-600">Unlimited transportation</span></li>

                        <li className="text-gray-400"><span className="text-gray-600">Wave recommendations based on wind, swell size, direction</span></li>

                        <li className="text-gray-400"><span className="text-gray-600">3 meals included per day</span></li>

                        <li className="text-gray-400"><span className="text-gray-600">Rooms with AC</span></li>
                        </ul>
                    </div>
                    </div>

                    <div className="mt-10">
                    <h2 className="text-sm font-medium text-gray-900">Details</h2>

                    <div className="mt-4 space-y-6">
                        <p className="text-sm text-gray-600">Pick up locations Huatulco and Salina Cruz included on the price. Puerto Escondido pick up on request for an additional price</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}
