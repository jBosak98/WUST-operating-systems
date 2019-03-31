import {tasksConstants} from "../constants/TasksConstants";


const initialState = {
    tasks: []
};




export function TaskReducer(state = initialState, action) {
    switch (action.type) {
        case tasksConstants.ADD_TASK:
            return {
                tasks: [...state.tasks, action.newTask]
           };
        case tasksConstants.RUN_SCHEDULER:
            return{
                ...state,
            };
        default:
            return{
                ...state
            }
    }


}
