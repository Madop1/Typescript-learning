const initialState = {
    numberOfCakes: 10,
}
type Cake = {
    numberOfCakes: number;
}
type Action = { type: "BUY_CAKE", payload: number }

const CakeReducer = (state: Cake=initialState, action: Action) => {
    switch (action.type) {
        case "BUY_CAKE":
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - action.payload,
            };
        default:
            return state;
    }
};

export default CakeReducer;

