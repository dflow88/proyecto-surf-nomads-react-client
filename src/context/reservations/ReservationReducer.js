export default (globalState, action) => {

    switch(action.type) {

        case "GET_RESERVATIONS":
            return {
                ...globalState,
                reservations: action.payload
            }
            

        default:
            return globalState
    }


}