function isPrime(num) {
    let count = 0;
    if (num <= 1) return false
    else {
        for (let index = 2; index < Math.sqrt(num); index++) {
            if (num % index === 0) return false
        }
        return true;
    }
}

let num = prompt("Enter a Number: ");
if (isPrime(num)) console.log(num + " is Prime Number");
else console.log(num + " is not a Prime Number");