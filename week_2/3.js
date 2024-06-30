function find_largest(num1, num2, num3) {
    let largest;
    if (num1 > num2) num2 = num3
    else num1 = num3

    if (num1 > num2) return num1
    else return num2
}

let num1 = parseFloat(prompt("Enter the First Number: "));
let num2 = parseFloat(prompt("Enter the Second Number: "));
let num3 = parseFloat(prompt("Enter the Third Number: "));
let largest = find_largest(num1, num2, num3);
console.log("The largest number is : " + largest);