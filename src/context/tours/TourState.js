import React, {useReducer} from 'react'
import axiosClient from './../../config/axios'

import TourContext from './TourContext'
import TourReducer from './TourReducer'

const TourState = (props) => { 


    const initialState = {
        tours: [],
        tour: {
            amenities: []
        },
        allAmenities: []
    }

    const [ globalState, dispatch ] = useReducer(TourReducer, initialState)


    const getTours = async () => {
        try {
            const res = await axiosClient.get(`${process.env.REACT_APP_BACKEND_URL}/api/tours`)
            const updatedTours = res.data

            dispatch({
                type: "GET_TOURS",
                payload: updatedTours
            })

        } catch (error) {

        }
    }

    const getAmenities = async () => {
        try {
            const res = await axiosClient.get(`${process.env.REACT_APP_BACKEND_URL}/api/amenities`)
            const foundAmenities = res.data.amenities

            dispatch({
                type: "GET_AMENITIES",
                payload: foundAmenities
            })

        } catch (error) {
            console.log(error)
        }
    }

    const findTour = async (id) => {
        try {
            const res = await axiosClient.get(`${process.env.REACT_APP_BACKEND_URL}/api/tours/tour-specs/${id}`)
            const foundTour = res.data

            dispatch({
                type: "FIND_TOUR",
                payload: foundTour
            })

        } catch (error) {
        }
    }



    const createTour = async (dataForm) => {
        try {
            const res = await axiosClient.post(`${process.env.REACT_APP_BACKEND_URL}/api/tours/create`, dataForm)


        } catch (error) {

        }
    }

    const updateTour = async (dataForm) => {
        const form = {
            tourId: dataForm._id,
            name: dataForm.name,
            area: dataForm.area,
            country: dataForm.country,
            guide: dataForm.guide,
            priceDay: dataForm.priceDay,
            description: dataForm.description,
            amenities: dataForm.amenities
        }
            const res = await axiosClient.post(`${process.env.REACT_APP_BACKEND_URL}/api/tours/update`, form )
            
            getTours()

    }

    const deleteTour = async (dataForm) => {
        const form = {
            tourId: dataForm._id
        }
        console.log(dataForm)

        const res = await axiosClient.post(`${process.env.REACT_APP_BACKEND_URL}/api/tours/delete`, form )
            
        getTours()
    }

    return (
        <TourContext.Provider
            value={{
                tours: globalState.tours,
                tour: globalState.tour,
                allAmenities: globalState.allAmenities,
                getTours,
                createTour,
                updateTour,
                deleteTour,
                findTour,
                getAmenities
            }}
        >
            {props.children}

        </TourContext.Provider>
    )

}

export default TourState