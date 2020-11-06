function sumOfMultiples(num) {
    var sums = 0;
    for (var i = 0; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) { // checks if the number is divisible by 3 or 5
            sums = sums + i; // adds the divisible number to the sum


        }
    }
    return "The sum of the multiples below " + num + " is " + sums;
}

console.log(sumOfMultiples(10));
console.log(sumOfMultiples(100));
console.log(sumOfMultiples(1000));