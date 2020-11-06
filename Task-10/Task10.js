function vowelsOfString(str) {
    var string = str.toLowerCase(); // converts all string characters to lowercase
    return string.match(/[aeiou]/g); //finds the characters of the string that matches any vowel in the--
    //--pattern 

}


console.log(vowelsString("LIONEL"));
console.log(vowelsString("RASEEMELA"));
console.log(vowelsString("umuzi"));