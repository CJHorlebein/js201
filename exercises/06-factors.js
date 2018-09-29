// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o

function factors(input){
    // Returns all factors of a given input
    var root = Math.floor(Math.pow(input, .5)); // Calculates square root
    var low = [], high = []; 
    for(var i = 1; i <= root; i++){ 
        // Iterates up to sq root of input
        var int = input % i;
        if (int == 0){ 
            low.push(i); // Saves i to array
            high.push(input/i); // Saves matching factorial
        }
    }

    for(var j = low.length-1; j >= 0; j--){
        // combines arrays into single array from small to largest
        low.push(high[j]);
    }

    var ans = Array.from(new Set(low)); // removes duplicates
    return ans;
}