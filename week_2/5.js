function printODDs(start, end) {
    for (let index = start; index <= end; index++) {
        if (index % 2 != 0) {
            console.log(index);
        }
    }
}

let start = 0;
let end = 30;
printODDs(start, end);