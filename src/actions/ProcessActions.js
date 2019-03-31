import {processConstants} from "../constants/processConstants";
import SchedulerService from "../services/SchedulerService";


export function addProcess(newProcess) {
    return dispatch => {
        const action = {
            newProcess,
            type: processConstants.ADD_PROCESS
        };
        dispatch(action)
    }
}

export function runScheduler(processes) {
    return dispatch => {
        const scheduler = new SchedulerService(processes);
        scheduler.start();
        const startScheduler = {
            type: processConstants.RUN_SCHEDULER
        };
        dispatch(startScheduler)
    }
}

// export default addProcess;
