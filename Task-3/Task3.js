function checkNumberRelationshipTo65(num1, num2) {
    if (num1 === 65 || num2 === 65) { // checks if first or second number is equal to 65
        return true;
    } else if (num1 + num2 === 65) { // checks if the sum of both numbers are equal to 65
        return true;
    } else {
        return false; // It resolves to this is none of the conndtions are met
    }
}

console.log(checkNumber(2, 65));