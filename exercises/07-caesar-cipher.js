// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb'

function cipher(str, index){
    // Encrypts basic shifting cipher
    var pass = "";
    for(var i = 0, len = str.length; i < len; i++){
        //iterates over each character ignoring not alphabet characters using ASCII conversion

        var current = str.charCodeAt(i); // Converts character to an ASCII value

        if(current > 64 && current < 91){
            // Ciphers uppercase via adding shift value to current ASCII character value
            pass += String.fromCharCode((current + index - 65) % 26 + 65);
        }
        else if(current > 96 && current < 123){
            // Ciphers lowercase via adding shift value to current ASCII character value
            pass += String.fromCharCode((current + index - 97) % 26 + 97);
        }
        else{ // Passes other characters uneffected. 
            pass += str[i];
        }
    }
    return pass;
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "decipher" which is given a string, a shift, and returns the
// decoded Caesar cipher message.
//
// Examples:
// > decipher('cvvcem cv fcyp!', 2)
// 'attack at dawn!'
// > decipher('ehz czlod otgpcrpo ty l hzzo', 11)
// 'two roads diverged in a wood'
function decipher(str, index){
    // Unencrypts basic shifting cipher
    index = 26 - index; // converts shift to a deshift value
    var pass = cipher(str, index); // uses exisitng shifting function to unencrypt

    return pass;
}