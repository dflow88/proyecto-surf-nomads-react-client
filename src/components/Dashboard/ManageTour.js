import React, {useState,
    useContext} from 'react'

import TourContext from './../context/tours/TourContext'

export default function ManageTour() {

    const context = useContext(TourContext)
    
    const {
        tours,
        getTours,
        createTour,
        activateCreate,
        createActive,
        setCreateActive,
        newTour,
        setNewTour,
        updateTour,
        deleteTour
    } = context

    const [ editActive, setEditActive ] = useState(false)

    const handleChange = (event) => {
        event.preventDefault()
        
        setNewTour({
            ...newTour,
            [event.target.name]: event.target.value
        })
    }

    const sendForm = (event) => {
        event.preventDefault()
        if (createActive) {createTour(newTour)}
        if (editActive) {editTour(event)}
    }

    const editTour = (event) => {
        event.preventDefault()
        console.log(newTour)
        updateTour(newTour)
        setEditActive(false)
        // setEditActive(false)
        // setNewTour({
        //     name: "",
        //     country: "",
        //     biggestSizeM: "",
        //     season: "",
        //     tourType: ""
        // })
    }

    const activateEdit = (event, element) => {
        event.preventDefault()
        setEditActive(true)
        setNewTour(element)
    }

    const eraseTour = (event, element) => {
        event.preventDefault()
        deleteTour(element)
    }

    return (
        <div>
            



        </div>
    )
}
