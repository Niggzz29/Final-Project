function filmReducer(state, action) {
    switch (action.type) {
        case "getUser":
            return { ...state, dataTable: action.payload };
        default:
            throw new Error();
    }
}



export default filmReducer;