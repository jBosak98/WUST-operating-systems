import {processConstants} from "../constants/processConstants";


function addProcess(newProcess) {
    return dispatch => {
        const action = {
            newProcess,
            type: processConstants.ADD_PROCESS
        };
        dispatch(action)
    }
}

export default addProcess;
