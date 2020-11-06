function number3Check(num1, num2) { //checks if either numbers or thier sum contains a 3
    const num = num1 + num2;

    if (num1 === 3 || num2 === 3 && num.toString().match(/3/) != null) {
        return true;
    } else {
        return false;
    }
}
console.log(numberCheck(3, 10)); // true
console.log(numberCheck(20, 3)); // true
console.log(numberCheck(23, 10)); // false
console.log(numberCheck(13, 10)); // false
console.log(numberCheck(1, 10)); // false