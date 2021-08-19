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
                                <img src={`${e.pictures[0]}`} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="w-full h-full object-center object-cover group-hover:opacity-75" />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">
                                {e.name}
                                </h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">
                                From ${e.priceDay}/day
                                </p>
                            </a>
                        )
                    })
                }
                    <a href="/tour-specs" className="group">
                        <div className="aspect-w-1 aspect-h-2 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-1 xl:aspect-h-2">
                        <img src="https://scontent.foax2-1.fna.fbcdn.net/v/t1.6435-9/33248050_10214909517745621_931752799354486784_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGGiXO3WmX9_1bUAuG43MUJ_IlzGTNvBk78iXMZM28GTp0lL9Z8ge2Cs-fZKr3M_b8&_nc_ohc=3a4m_lsRslEAX8K42OA&_nc_ht=scontent.foax2-1.fna&oh=12cda2331d7dce671659cea730215106&oe=613CE0E1" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="w-full h-full object-center object-cover group-hover:opacity-75" />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">
                        Guided tour in Salina Cruz
                        </h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">
                        From $140/day
                        </p>
                    </a>

                    <a href="/" className="group">
                        <div className="w-full aspect-w-1 aspect-h-2 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-1 xl:aspect-h-2">
                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-full object-center object-cover group-hover:opacity-75" />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">
                        Nomad Tumbler
                        </h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">
                        $35
                        </p>
                    </a>

                    <a href="/" className="group">
                        <div className="w-full aspect-w-1 aspect-h-2 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-1 xl:aspect-h-2">
                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." className="w-full h-full object-center object-cover group-hover:opacity-75" />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">
                        Focus Paper Refill
                        </h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">
                        $89
                        </p>
                    </a>

                    <a href="/" className="group">
                        <div className="w-full aspect-w-1 aspect-h-2 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-1 xl:aspect-h-2">
                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-full h-full object-center object-cover group-hover:opacity-75" />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">
                        Machined Mechanical Pencil
                        </h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">
                        $35
                        </p>
                    </a>

                 {/* More products... */}
                </div>
            </div>
            </div>


        </div>
    )
}
