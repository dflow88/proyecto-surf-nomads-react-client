export default (globalState, action) => {

    switch(action.type) {

        case "GET_RESERVATIONS":
            return {
                ...globalState,
                reservations: action.payload
            }

        case "FIND_CREATED":
            return {
                ...globalState,
                reservation: action.payload
            }

            case "CREATED_RESERVATION":
                    return {
                        ...globalState,
                        reservation: action.payload
                    }
        
        
        case "GET_USER_RESERVATIONS":
            return {
                ...globalState,
                userReservations: action.payload
            }
            

        default:
            return globalState
    }


}