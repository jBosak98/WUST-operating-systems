import {processConstants} from "../constants/processConstants";


const initialState = {
    processes: []
};




export function ProcessReducer(state = initialState, action) {
    switch (action.type) {
        case processConstants.ADD_PROCESS:
            return {
                processes: [...state.processes, action.newProcess]
           };
        case processConstants.RUN_SCHEDULER:
            return{
                ...state,
            };
        default:
            return{
                ...state
            }
    }


}
