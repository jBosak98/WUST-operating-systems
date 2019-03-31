

  export function fcfs(proc){
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

