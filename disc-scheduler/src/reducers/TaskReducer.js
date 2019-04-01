import {tasksConstants} from "../constants/TasksConstants";


const initialState = {
    tasks: [],
    results: undefined,
};




export function TaskReducer(state = initialState, action) {
    switch (action.type) {
        case tasksConstants.ADD_TASK:
            return {
                tasks: [...state.tasks, action.newTask],
                results: state.results
           };
        case tasksConstants.RUN_SCHEDULER:
            const { results } = action;
            return{
                ...state,
                results: results
            };
        default:
            return{
                ...state
            }
    }


}
