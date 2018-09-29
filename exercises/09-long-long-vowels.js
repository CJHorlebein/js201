// Write a function "longLongVowels" which is given a string, and returns a
// version of that string extending any long vowels to 5 characters.
//
// Examples:
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'

function longLongVowels(string){
    // Extends any instance of a long vowel
    var j = "", res = "", vowels = "AEIOUaeiou";
    for(var i = 0, n = string.length; i < n; i++){
        // Iterates through each character checking for double vowels
        if(vowels.indexOf(string[i]) != -1 && string[i] == j){
            // Adds extra characters to string
            res += `${string[i]}${string[i]}${string[i]}`;
        }
        j = string[i];
        res += string[i];
    }
    return res;
}
