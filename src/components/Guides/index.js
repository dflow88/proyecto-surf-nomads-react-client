import React from 'react'

export default function Guides() {
    
    return (
        <div>
                        <div class="bg-white">
            <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                <div class="space-y-5 sm:space-y-4">
                    <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet the guides</h2>
                    <p class="text-xl text-gray-500">Surf Nomada offers a curated selection of specialized surf guides that will take you to the best secret spots in the World.</p>
                </div>
                <div class="lg:col-span-2">
                    <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
                        <li>
                            <div class="space-y-4">
                            <div class="aspect-w-3 aspect-h-2">
                                <img class="object-cover shadow-lg rounded-lg" src="https://scontent.foax2-1.fna.fbcdn.net/v/t31.18172-8/22904937_10207641475995011_216413397525276070_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeHl6Lbd4pyg5aWi6sIqCmE53WZ_fSU8PyXdZn99JTw_JQU4CRgYVLbMOHUbgelh8t0&_nc_ohc=dfeVP5vPczEAX-u4hm0&_nc_ht=scontent.foax2-1.fna&oh=9505f812c530c5a43f8ab06b5956b087&oe=613C39EF" alt=""/>
                            </div>
                            <div class="text-lg leading-6 font-medium space-y-1">
                                <h3>Lalo Mendoza</h3>
                                <p class="text-indigo-600">Surf Guide from Huatulco</p>
                            </div>
                            <div class="text-lg">
                                <p class="text-gray-500">Surf guide with 15 years of experience. He worked several years for the most famous surf camps in the area, and now he focuses in offering a tailor-made experience for surfers from all over the Globe.</p>
                            </div>

                            </div>
                        </li>

                    {/* More people.. */}
                        <li>
                            <div class="space-y-4">
                            <div class="aspect-w-3 aspect-h-2">
                                <img class="object-cover shadow-lg rounded-lg" src="https://scontent.foax2-1.fna.fbcdn.net/v/t1.6435-9/59453446_2267498943523464_3125611154869583872_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFgvQDc_Db4obgXQStPBtA0wR8k2hRFvEHBHyTaFEW8QV6d3t2QIbFbmRGAuV_dKkc&_nc_ohc=iZwzsPEJZ10AX98ei91&tn=JifT7AxkWWAeiEu5&_nc_ht=scontent.foax2-1.fna&oh=17e91020ac84ca876b19b18fa039abaf&oe=613E262E" alt=""/>
                            </div>
                            <div class="text-lg leading-6 font-medium space-y-1">
                                <h3>Ricky Ramírez</h3>
                                <p class="text-indigo-600">Surf Guide from Puerto Escondido</p>
                            </div>
                            <div class="text-lg">
                                <p class="text-gray-500">Famous body-boarder from Puerto Escondido, he has been showing around secret waves to surfers for the last 10 years.</p>
                            </div>

                            </div>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
