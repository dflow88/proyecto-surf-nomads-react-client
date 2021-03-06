import React from 'react'

import { Link } from 'react-router-dom'

export default function Home() {


    return (
        
    <div className=" bg-gray-600">
        <div className="bg-gray-50 shadow">

            <main className="lg:relative">
                <div className="mx-auto max-w-7xl w-full pt-16 pb-48 text-center lg:py-25 lg:text-left">
                    <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                        <h1
                            className="text-4xl tracking-tight text-align-top font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                            <span className="block xl:inline">It is time to</span>
                            <span className="block text-sky-600 xl:inline">surf<br/>the wave of<br/>your life</span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            Find the best surf guides in the Oaxacan coast to take you and your friends to the trip of your life.
                        </p>
                        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <Link to="/tours"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 md:py-4 md:text-lg md:px-10">
                                    Book a tour
                                </Link>
                            </div>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                <Link to="/guides"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                                    Meet the guides
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div
                        className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                        <img className="absolute inset-0 w-full h-full object-cover"
                            src="https://surflaspalmeras.com/wp-content/uploads/surf_las_palmeras_homepage_slider-01_josh_mulcoy.jpg"
                            alt="" />
                    </div>
                </div>
            </main>
        </div>
    </div>
            
        
    )
}