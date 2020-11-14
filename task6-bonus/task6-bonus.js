function findMaxNumber(arra) {
    let maxNumber = 0; // intiates the maximum number to zero
    for (i = 0; i < arra.length; i++) { // loops through the set of numbers
        if (arra[i] > maxNumber) { // checks if each number in a set is greater than the current max number
            maxNumber = arra[i]; // updates the maxNumber if the current number is greater than the maxNumber
        }
    }
    console.log("Maximum number: " + maxNumber); // prints the updted maximum number found in the set
}

findMaxNumber([1, 4, 19, 3]); // expected maximum number is 19
findMaxNumber([54, 4, 19, 3]); // expected maximum number is 54
findMaxNumber([1, 22, 19, 3]); // expected maximum number is 22