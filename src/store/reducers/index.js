import typeOfAction from "../constants";
const initialState={
   Data: []
}
export default (state = initialState , action) => {
    switch(action.type){
        case typeOfAction.Data:
                return ({
                    ...state,
                    Data: action.payload
                })
        default:
            return state
    }
}