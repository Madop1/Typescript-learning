const initialState = {
    numberOfIceCream: 20,
}
type Cake = {
    numberOfIceCream: number
}
type Action = { type: "BUY_ICECREAM", payload: number }
const iceCreamReducer = (state: Cake = initialState, action: Action) => {
    switch (action.type) {
        case "BUY_ICECREAM":
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream - action.payload,
            }
        default: return state
    }
}
export default iceCreamReducer;