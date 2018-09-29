// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// Example:
// leetspeak('Leet') --> "l337"

function leetspeak(word){
    // converts any string to include any Leetspeak characters and corresponding numbers
    var key = ["A", "E", "G", "I", "O", "S", "T"],
        val = [4, 3, 6, 1, 0, 5, 7];

    var leet = "", temp = word.toUpperCase(); // Sets temp string to capitalized input string.
    for(var i = 0, len = word.length; i < len; i++){
        // iterates over each character in the input string
        var index = key.indexOf(temp[i]);
        if(index != -1){ // If character is in the key string adds the leet number option instead
            leet += val[index];
        } else{ // Otherwise just passes the character
            leet += word[i];
        }
    }
    return leet;
}