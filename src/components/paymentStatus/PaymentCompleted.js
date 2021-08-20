import React, {useContext, useEffect, useState} from 'react'

import { Link } from 'react-router-dom'

import ReservationContext from '../../context/reservations/ReservationContext'

export default function PaymentCompleted() {


    const contextReservation = useContext(ReservationContext)
const {
    reservation,
    updateReservationStatus,
    findReservationCreated
} = contextReservation

useEffect( async () => {
    await findReservationCreated()

    updateReservationStatus(reservation)
    // eslint-disable-next-line react-hooks/exhaustive-deps
} , [])

console.log(reservation._id)
    return (
        <div>
            <div class="bg-white min-h-screen flex flex-col lg:relative">
            <div class="flex-grow flex flex-col">
                <main class="flex-grow flex flex-col bg-white">
                <div class="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">

                    <div class="flex-shrink-0 my-auto py-16 sm:py-32">
                    <p class="text-sm font-semibold text-sky-600 uppercase tracking-wide">THANKS FOR YOUR PURCHASE!</p>
                    <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Your tour is confirmed</h1>
                    <p class="mt-2 text-base text-gray-500">Get ready for the time of your life.</p>
                    <div class="mt-6">
                        <Link to="/" class="text-base font-medium text-sky-600 hover:text-sky-500">Go back home<span aria-hidden="true"> &rarr;</span></Link>
                    </div>
                    </div>
                </div>
                </main>

            </div>
            <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img class="absolute inset-0 h-full w-full object-cover" src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2018/05/04/2e359676-5f70-43f6-8eca-92ed4fdcfec4/sessions-mikala-jones-surf-indonesia-ola-perfecta" alt=""/>
            </div>
            </div>

                        

        </div>
    )
}
