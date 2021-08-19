export default (globalState, action) => {

    switch(action.type) {

        case "GET_TOURS":
            return {
                ...globalState,
                tours: action.payload
            }

        case "FIND_TOUR":
            
            return {
                ...globalState,
                tour: action.payload
            }

        case "GET_AMENITIES":
            
            return {
                ...globalState,
                allAmenities: action.payload
            }
            

        default:
            return globalState
    }


}