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
        scheduler.start();
        const startScheduler = {
            type: tasksConstants.RUN_SCHEDULER
        };
        dispatch(startScheduler)
    }
}

// export default addTask;
