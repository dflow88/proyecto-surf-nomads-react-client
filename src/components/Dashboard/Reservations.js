import React, {
    useContext, useEffect} from 'react'

import UserContext from '../../context/users/UserContext'
import ReservationContext from '../../context/reservations/ReservationContext'


export default function Reservations() {

    const contextReservation = useContext(ReservationContext)
    const {
        findReservationsByUser,
        userReservations
    } = contextReservation



    const contextUser = useContext(UserContext)
    const {
        user
    } = contextUser


console.log(user)

    useEffect( () => {
        console.log(user)
        findReservationsByUser(user)
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [])

    console.log(userReservations)
    
    return (
        <div>

            <div class="flex flex-col">

                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                        <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
                    </div>
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">

                            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">

                                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Dates
                                                </th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    No of days
                                                </th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Price
                                                </th>
                                                <th scope="col" class="relative px-6 py-3">
                                                    <span class="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="flex-shrink-0 h-10 w-10">
                                                            <img class="h-10 w-10 rounded-full" src="https://scontent.foax2-1.fna.fbcdn.net/v/t1.6435-9/90194677_10163096065755282_5984159194574487552_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeErkrT0OcP5Qom5JfMZPmcG6IHR0aSitYnogdHRpKK1ifRG7FZWl28uiC01sxhn4Tk&_nc_ohc=kRitRK-5VO8AX9TCiDh&_nc_ht=scontent.foax2-1.fna&oh=cf3a80e2229e93426603683a579f1f76&oe=6145CDA2" alt="" />
                                                        </div>
                                                        <div class="ml-4">
                                                            <div class="text-sm font-medium text-gray-900">
                                                                Diego Flores
                                                            </div>
                                                            <div class="text-sm text-gray-500">
                                                                dieflope@gmail.com
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div class="text-sm text-gray-900">08/21/2021 - 08/26/2021</div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    5
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        US$ 600.00
                                                    </span>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                                </td>
                                            </tr>
                                            {/* More people.. */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
