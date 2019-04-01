export function scan(proc){
    let i = 0;
    let queue = [];
    let time = 0;
    let actual = undefined;
    let headPosition = 0;
    let headMovement = 0;
    let direction = 1;
    let taskDone = 0;
    while (i < proc.length || queue.length !== 0) {
        for (let p = i; p < proc.length; p++){
            if (time >= proc[p].arrivalTime){
                queue.push(proc[p]);
                i++;
            }
        }
        queue = queue.filter(function (task) {
            return task.deadline >= Math.abs(headPosition - task.blockAddress) + time
        });
        if (queue.length !== 0) {
            actual = queue[0];

            let tmp = queue.filter(function (task) {
                return headPosition < task.blockAddress * direction
            });
            if (tmp.length === 0){
                direction *= -1;
                tmp = queue.filter(function (task) {
                    return headPosition < task.blockAddress * direction
                })
            }

            tmp.map(function (task) {
                if (Math.abs(headPosition - task.blockAddress) < Math.abs(headPosition - actual.blockAddress)){
                    actual = task;
                }
            });
            queue = queue.filter(function (task) {
                return task !== actual;
            });
            headMovement += Math.abs(headPosition - actual.blockAddress);
            headPosition = actual.blockAddress;
            taskDone++;
        }
        time++;
    }
    return { headMovement, taskDone }
}

