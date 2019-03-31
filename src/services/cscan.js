export function cscan(proc){
    let i = 0;
    let queue = [];
    let time = 0;
    let actual = undefined;
    let headPosition = 0;
    let headMovement = 0;
    while (i < proc.length || queue.length !== 0) {
        for (let p = i; p < proc.length; p++){
            if (time >= proc[p].arrivalTime){
                queue.push(proc[p]);
                i++;
            }
        }
        if (queue.length !== 0) {
            actual = queue[0];

            let tmp = queue.filter(function (task) {
                return headPosition < task.blockAddress
            });
            if (tmp.length === 0){
                headMovement -= -headPosition;//headMovement += headPosition
                //fuck this dynamic typing
                headPosition = 0;
                tmp = queue.filter(function (task) {
                    return headPosition < task.blockAddress
                });
            }
            console.log("headMovement");
            console.log(headMovement);

            tmp.map(function (task) {
                if (Math.abs(headPosition - task.blockAddress) < Math.abs(headPosition - actual.blockAddress)){
                    actual = task;
                }
            });
            queue = queue.filter(function (task) {
                return task !== actual;
            });

            console.log("actual");
            console.log(actual);
            headMovement += Math.abs(headPosition - actual.blockAddress);
            headPosition = actual.blockAddress;
        }
        time++;
    }
    return headMovement
}
