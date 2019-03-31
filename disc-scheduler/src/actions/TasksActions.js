import {tasksConstants} from "../constants/TasksConstants";
import SchedulerService from "../services/SchedulerService";


export function addTask(newTask) {
    return dispatch => {
        const action = {
            newTask,
            type: tasksConstants.ADD_TASK
        };
        dispatch(action)
    }
}

export function runScheduler(tasks) {
    return dispatch => {
        const scheduler = new SchedulerService(tasks);
        let results = scheduler.start();
        const action = {
            results: results,
            type: tasksConstants.RUN_SCHEDULER
        };
        dispatch(action)
    }
}

// export default addTask;
