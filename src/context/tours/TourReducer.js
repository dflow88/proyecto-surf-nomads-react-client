export default (globalState, action) => {

    switch(action.type) {

        case "GET_TOURS":
            return {
                ...globalState,
                tours: action.payload
            }

        default:
            return globalState
    }


}