function findMaxNumber(arra) {
    let maxNumber = 0;
    for (i = 0; i < arra.length; i++) {
        if (arra[i] > maxNumber) {
            maxNumber = arra[i];
        }
    }
    console.log(maxNumber);
}

findMaxNumber([1, 4, 19, 3]);