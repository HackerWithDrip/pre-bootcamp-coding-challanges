function commonCharactersOfStrings(str1, str2) {
    var string1 = str1.toLowerCase(); // converts all string characters to lowercase 
    var string2 = str2.toLowerCase(); // converts all string characters to lowercase
    var container = []; //empty array to store common characters
    for (var i = 0; i < string1.length; i++) { //loops through each characater of string1
        for (var j = 0; j < string2.length; j++) { //loops all letters of string2 with-
            //--each letter of string1
            if (string1[i] === string2[j]) { //compares if the characters are common
                container.push(string1[i]); //if common,then they're stored in container
            }
        }
    }

    return unique = [...new Set(container)]; // removes the duplicated letters/ characters
}



console.log(commonCharacters("house", "computers"));
console.log(commonCharacters("Dodge", "Dodgy"));
console.log(commonCharacters("UMUZI", "Mesuli"));