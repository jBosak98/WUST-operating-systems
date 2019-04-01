import {scan} from "./scan";
import {sstf} from "./sstf";
import {fcfs} from "./fcfs";
import {cscan} from "./cscan";
import {edf} from "./edf";
import {fdscan} from "./fdscan";

class SchedulerService{


    constructor(tasks){
        this.tasks = tasks;
    }

    start() {
        let procString = JSON.stringify(this.tasks);
        const results = {
            sstf: sstf(JSON.parse(procString)),
            fcfs: fcfs(JSON.parse(procString)),
            scan: scan(JSON.parse(procString)),
            cscan: cscan(JSON.parse(procString)),
            edf: edf(JSON.parse(procString)),
            fdscan: fdscan(JSON.parse(procString))
        };
        return results
    }

}

export default SchedulerService;
// Disk scheduling algorithms
// simulation of algorithms FCFS, SSTF, SCAN, C-SCAN, EDF, FD-SCAN.
// Compare their execution time (estimated by the total movement of disk head).

