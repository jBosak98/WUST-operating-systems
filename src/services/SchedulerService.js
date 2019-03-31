
class SchedulerService{
    processes;


    constructor(processes){
        this.processes = processes;
    }

    start() {
        console.log(this.processes)
    }

}

export default SchedulerService;
// Disk scheduling algorithms
// simulation of algorithms FCFS, SSTF, SCAN, C-SCAN, EDF, FD-SCAN.
// Compare their execution time (estimated by the total movement of disk head).
