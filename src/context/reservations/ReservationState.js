import React, {useReducer} from 'react'
import axiosClient from './../../config/axios'

import ReservationContext from './ReservationContext'
import ReservationReducer from './ReservationReducer'

const ReservationState = (props) => { 


    const initialState = {
        reservations: [],
        userReservations: [],
        reservation: {
            startDate: "",
            endDate: "",
            user: [],
            guide: "",
            tour: [],
            totalPrice: 0,
            totalPrice: 0,
            totalDays: 0,
            isPaid: false,
            reservationId: ""
        }
    }

    const [ globalState, dispatch ] = useReducer(ReservationReducer, initialState)


    const getReservations = async () => {
        try {
            const res = await axiosClient.get(`${process.env.REACT_APP_BACKEND_URL}/api/reservations`)
            const updatedReservations = res.data
            // console.log(updatedReservations)
            dispatch({
                type: "GET_RESERVATIONS",
                payload: updatedReservations
            })

        } catch (error) {

        }
    }

    const findReservationsByUser = async () => {

        const res = await axiosClient.get(`${process.env.REACT_APP_BACKEND_URL}/api/reservations`)
        .then((res) => {
            dispatch({
                type: "GET_USER_RESERVATIONS",
                payload: ({ user: res.data._id})
            })
        })
        //     console.log(loggedUser)

        // try {
        //     const res = await axiosClient.get(`${process.env.REACT_APP_BACKEND_URL}/api/reservations/reservations-user`)
        //     .then((res) => {})
        //     console.log(res)
        // //     console.log(res)
        //     // const updatedReservations = res.data
        //     // console.log(updatedReservations)

        .catch((error) => {
            console.log(error)
        })
    }

    const createReservation = async (dataForm) => {
        try {
            const res = await axiosClient.get(`${process.env.REACT_APP_BACKEND_URL}/api/reservations/create`, dataForm)
            const createdReservation = res.data

            dispatch({
                type: "CREATED_RESERVATION",
                payload: createdReservation
            })
        } catch (error) {

        }
    }

    const findReservationCreated = async () => {
        try {
            const res = await axiosClient.get(`${process.env.REACT_APP_BACKEND_URL}/api/reservations/find-created`)
            console.log(res.data)
            dispatch({
                type: "FIND_CREATED",
                payload: res.data
            })
        } catch (e) {
            console.log(e)
        }
    }

    const updateReservationStatus = async (dataForm) => {
        console.log(dataForm)
        const form = {
            reservationId: dataForm._id,
            isPaid: true
        }
            const res = await axiosClient.post(`${process.env.REACT_APP_BACKEND_URL}/api/reservations/edit-status`, form )
            
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
                getReservations,
                createReservation,
                updateReservationStatus,
                deleteReservation,
                findReservationCreated,
                findReservationsByUser,
                userReservations: globalState.userReservations
            }}
        >
            {props.children}

        </ReservationContext.Provider>
    )

}

export default ReservationState