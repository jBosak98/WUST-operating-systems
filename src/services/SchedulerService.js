
class SchedulerService{


    constructor(tasks){
        this.tasks = tasks;
    }

    start() {
        console.log("start");
        console.log(this.tasks);
        let procString = JSON.stringify(this.tasks);
        let fcfs = this.fcfs(JSON.parse(procString));
        let sstf = this.sstf(JSON.parse(procString));
        console.log("sstf: " + sstf);
        const results = {
            sstf,
            fcfs
        };
        return results
    }

    fcfs(proc){
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
                actual = queue.shift();
                headMovement += Math.abs(headPosition - actual.blockAddress);
                headPosition = actual.blockAddress;
            }
            time++;
        }
        return headMovement
    }

    sstf(proc){
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
                queue.map(function (task) {
                    if (Math.abs(headPosition - task.blockAddress) < Math.abs(headPosition - actual.blockAddress)){
                        actual = task;
                    }
                });
                queue = queue.filter(function (task) {
                    return task !== actual;
                });
                headMovement += Math.abs(headPosition - actual.blockAddress);
                headPosition = actual.blockAddress;
            }
            time++;
        }
        return headMovement
    }

}

export default SchedulerService;
// Disk scheduling algorithms
// simulation of algorithms FCFS, SSTF, SCAN, C-SCAN, EDF, FD-SCAN.
// Compare their execution time (estimated by the total movement of disk head).

