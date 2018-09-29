// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

function makeSquare(x){
    // makes square of width/length X
    var blk = "";
    for(var i = 0; i < x; i++){
        // prints X and ends line in new line character
        for(var j = 0; j < x; j++){
            blk += "*";
        }
        if(i < x - 1){
            blk += "\n";
        }
    }
    return blk;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function makeBox(x, y){
    // Prints empty box
    var blk = "";
    for(var i = 0; i < x; i++){ // Top box section
        blk += "*";
    }

    for(var j = 0; j < y - 2; j++){ // Middle box section
        blk += "\n*";
        for(var k = 0; k < x - 2; k++){
            blk += " ";
        }
        blk += "*";
    }
    if(y > 1){ // only prints if height is greater than 1
        blk += "\n";
        for(var i = 0; i < x; i++){ // Bottom box section
            blk += "*";
        }
    }
    return blk;
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function makeBanner(banner){
    // makes banner around a logo
    var blk = "", len = banner.length + 4;
    for(var i = 0; i < len; i++){ // top banner portion
        blk += "*"
    }
    
    blk += "\n* " + banner + " *\n"; // prints banner with spacing

    for(var i = 0; i < len; i++){ // top banner portion
        blk += "*"
    }
    return blk;
}