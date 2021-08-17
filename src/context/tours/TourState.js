import React, {useReducer, useState} from 'react'
import axios from 'axios'

import TourContext from './TourContext'
import TourReducer from './TourReducer'

const TourState = (props) => { 


    const initialState = {
        tours: [],
    }

    const [ globalState, dispatch ] = useReducer(TourReducer, initialState)

    const [ createActive, setCreateActive ] = useState(false)

    const [ newTour, setNewTour ] = useState({
        name: "",
        area: "",
        country: "",
        guide: "",
        priceDay: "",
        description: "",
        amenities: ""
    })


    const activateCreate = (event) => {
        event.preventDefault()
        setCreateActive(true)
    }



    const getTours = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/tours`)
            const updatedTours = res.data

            dispatch({
                type: "GET_TOURS",
                payload: updatedTours
            })

        } catch (error) {

        }
    }

    const findTour = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/tours/tour-specs/611ae780c9dc3e08c61b1981`)
            const foundTour = res.data
            console.log(foundTour)

        } catch (error) {

        }
    }

    const createTour = async (dataForm) => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/tours/create`, dataForm)

            getTours()
            setCreateActive(false)
            setNewTour({
                name: "",
                area: "",
                country: "",
                guide: "",
                priceDay: "",
                description: "",
                amenities: ""
            })
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
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/tours/update`, form )
            
            getTours()

    }

    const deleteTour = async (dataForm) => {
        const form = {
            tourId: dataForm._id
        }
        console.log(dataForm)

        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/tours/delete`, form )
            
        getTours()
    }

    return (
        <TourContext.Provider
            value={{
                tours: globalState.tours,
                getTours,
                createTour,
                activateCreate,
                createActive,
                setCreateActive,
                newTour,
                setNewTour,
                updateTour,
                deleteTour,
                findTour
            }}
        >
            {props.children}

        </TourContext.Provider>
    )

}

export default TourState