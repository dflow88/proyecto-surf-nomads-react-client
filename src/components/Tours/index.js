import React, {useContext, useEffect} from 'react'

import TourContext from '../../context/tours/TourContext'



export default function Tours() {

    const context = useContext(TourContext)
    
    const {
        tours,
        getTours,
    } = context


    useEffect( () => {
        getTours()
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [])

console.log(tours)

    return (
        <div>
          
            <div className="bg-white">
                <h1
                    className="text-4xl py-5 px-4 tracking-tight text-align-top font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl sm:py-8 sm:px-6">
                    <span className="block xl:inline">Check out our<br/></span>
                    <span className="block text-sky-600 xl:inline">Surf tours</span>
                </h1>

            <div className="max-w-7xl mx-auto py-10 px-4 sm:py-15 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                {
                    tours.map((e, i) => {
                        return(
                            <a key={i} href={`/tour-specs/${e._id}`} className="group">
                                <div className="aspect-w-1 aspect-h-2 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-1 xl:aspect-h-2">
                                <img src={e.picture1} alt={e.picture2} className="w-full h-full object-center object-cover group-hover:opacity-75" />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">
                                {e.name}
                                </h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">
                                From US${e.priceDay}/day
                                </p>
                            </a>
                        )
                    })
                }
                 {/* More products... */}
                </div>
            </div>
            </div>


        </div>
    )
}
