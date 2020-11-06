function findMaxNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }

}

console.log(maxNumber(1, 2, 3)) //3
console.log(maxNumber(7, 2, 5)) // 7
console.log(maxNumber(9, 12, 3)) // 12
console.log(maxNumber(1, 0, 24)) // 24