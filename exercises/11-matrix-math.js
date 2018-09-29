// Write a function "matrixAdd" which is given two two-dimensional arrays, and
// returns a new two-dimensional array containing their matrix sum.
// Example:
// > matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])
// [ [ 6, 5 ], [ 3, 4 ] ]

function matrixAdd(arr0, arr1){
    // Adds each element in two Matrix's together
    for( var i = 0, n = arr0.length; i < n; i ++){
        for(var j = 0; j < n; j ++){
            arr0[i][j] += arr1[i][j];
        }
    }
    return arr0;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "matrixMultiply" which is given two two-dimensional arrays;
// you can assume the matricies are of size 2x2.
// It should return the result of matrix multiplication of the two matricies.
// What is matrix multiplication? https://tinyurl.com/j6jgh2u
//
// Example:
// > matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
// [ [22,  8], [27, 10] ]

function matrixMultiply(arr0, arr1){
    // Performs matrix multiplication
    var a = arr0[0][0] * arr1[0][0] + arr0[0][1] * arr1[1][0];
    var b = arr0[0][0] * arr1[0][1] + arr0[0][1] * arr1[1][1];
    var c = arr0[1][0] * arr1[0][0] + arr0[1][1] * arr1[1][0];
    var d = arr0[1][0] * arr1[0][1] + arr0[1][1] * arr1[1][1];
    var res = [[a,b],[c,d]];
    return res;
}
