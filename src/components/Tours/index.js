import React from 'react'

export default function Tours() {
    return (
        <div>
          
            <div class="bg-white">
                <h1
                    class="text-4xl py-5 px-4 tracking-tight text-align-top font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl sm:py-8 sm:px-6">
                    <span class="block xl:inline">Check out our<br/></span>
                    <span class="block text-sky-600 xl:inline">Surf tours</span>
                </h1>

            <div class="max-w-7xl mx-auto py-10 px-4 sm:py-15 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                    <a href="#" class="group">
                        <div class="w-full aspect-w-1 aspect-h-2 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-1 xl:aspect-h-2">
                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75" />
                        </div>
                        <h3 class="mt-4 text-sm text-gray-700">
                        Earthen Bottle
                        </h3>
                        <p class="mt-1 text-lg font-medium text-gray-900">
                        $48
                        </p>
                    </a>

                    <a href="#" class="group">
                        <div class="w-full aspect-w-1 aspect-h-2 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-1 xl:aspect-h-2">
                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="w-full h-full object-center object-cover group-hover:opacity-75" />
                        </div>
                        <h3 class="mt-4 text-sm text-gray-700">
                        Nomad Tumbler
                        </h3>
                        <p class="mt-1 text-lg font-medium text-gray-900">
                        $35
                        </p>
                    </a>

                    <a href="#" class="group">
                        <div class="w-full aspect-w-1 aspect-h-2 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-1 xl:aspect-h-2">
                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." class="w-full h-full object-center object-cover group-hover:opacity-75" />
                        </div>
                        <h3 class="mt-4 text-sm text-gray-700">
                        Focus Paper Refill
                        </h3>
                        <p class="mt-1 text-lg font-medium text-gray-900">
                        $89
                        </p>
                    </a>

                    <a href="#" class="group">
                        <div class="w-full aspect-w-1 aspect-h-2 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-1 xl:aspect-h-2">
                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="w-full h-full object-center object-cover group-hover:opacity-75" />
                        </div>
                        <h3 class="mt-4 text-sm text-gray-700">
                        Machined Mechanical Pencil
                        </h3>
                        <p class="mt-1 text-lg font-medium text-gray-900">
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
