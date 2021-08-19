import React, {useReducer} from 'react'
import axiosClient from './../../config/axios'

import ReservationContext from './ReservationContext'
import ReservationReducer from './ReservationReducer'

const ReservationState = (props) => { 


    const initialState = {
        reservations: []
    }

    const [ globalState, dispatch ] = useReducer(ReservationReducer, initialState)


    const getReservations = async () => {
        try {
            const res = await axiosClient.get(`${process.env.REACT_APP_BACKEND_URL}/api/reservations`)
            const updatedReservations = res.data

            dispatch({
                type: "GET_RESERVATIONS",
                payload: updatedReservations
            })

        } catch (error) {

        }
    }

    const findReservation = async (id) => {
        try {
            const res = await axiosClient.get(`${process.env.REACT_APP_BACKEND_URL}/api/reservations/reservation-specs/${id}`)
            const foundReservation = res.data

            dispatch({
                type: "FIND_RESERVATION",
                payload: foundReservation
            })

        } catch (error) {
        }
    }



    const createReservation = async (dataForm) => {
        try {
            const res = await axiosClient.post(`${process.env.REACT_APP_BACKEND_URL}/api/reservations/create`, dataForm)


        } catch (error) {

        }
    }

    const updateReservation = async (dataForm) => {
        const form = {
            reservationId: dataForm._id,
            name: dataForm.name,
            area: dataForm.area,
            country: dataForm.country,
            guide: dataForm.guide,
            priceDay: dataForm.priceDay,
            description: dataForm.description,
            amenities: dataForm.amenities
        }
            const res = await axiosClient.post(`${process.env.REACT_APP_BACKEND_URL}/api/reservations/update`, form )
            
            getReservations()

    }

    const deleteReservation = async (dataForm) => {
        const form = {
            reservationId: dataForm._id
        }
        console.log(dataForm)

        const res = await axiosClient.post(`${process.env.REACT_APP_BACKEND_URL}/api/reservations/delete`, form )
            
        getReservations()
    }

    return (
        <ReservationContext.Provider
            value={{
                reservations: globalState.reservations,
                reservation: globalState.reservation,
                allAmenities: globalState.allAmenities,
                getReservations,
                createReservation,
                updateReservation,
                deleteReservation,
                findReservation,

            }}
        >
            {props.children}

        </ReservationContext.Provider>
    )

}

export default ReservationState