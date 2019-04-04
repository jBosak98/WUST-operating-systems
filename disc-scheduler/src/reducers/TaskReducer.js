import {tasksConstants} from "../constants/TasksConstants";


const initialState = {
    tasks: [],
    results: undefined,
};


export function TaskReducer(state = initialState, action) {
    switch (action.type) {
        case tasksConstants.ADD_TASK:
            let tasks = [...state.tasks, action.newTask]
            return {
                tasks: tasks.sort(function (a, b) {
                    return a.arrivalTime - b.arrivalTime
                }),
                results: state.results
           };
        case tasksConstants.RUN_SCHEDULER:
            const { results } = action;
            console.log(results);
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
