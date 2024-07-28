function SumOfTwoNumbers(a , b){
    return a + b;
}

function printSquares(arrayOfNumbers){
    arrayOfNumbers.forEach(element => {
        console.log(element * element);
    })
}

function printMaximum(arrayOfNumbers){
    console.log(Math.max(...arrayOfNumbers))
}

function factorial(n){
    if(n == 0){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}

function reverseString(text){
    return text.split('').reverse().join('');
}

// console.log(SumOfTwoNumbers(2 , 3));
// printSquares([1 , 2 , 3 , 4 , 5]);
// printMaximum([1 , 2 , 3 , 4 , 5]);
// console.log(factorial(5));
console.log(reverseString('Nimna Pathum'));