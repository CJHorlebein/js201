// Write a function "ticTacToe" which takes a two-dimensional array of size 3x3.
// Each cell in the two dimensional array can be one of 'O', 'X', or null.
// Return 'O' if O makes a winning row.
// Return 'X' if X makes a winning row.
// Return null if there is no winning row on the board.
//
// Examples:
// > ticTacToe([
//   ['O', 'O', 'O'],
//   ['X', null, 'X'],
//   [null, 'X', null]
//   ])
// 'O'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'X', null],
//   [null, 'X', null]
//   ])
// 'X'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'O', null],
//   [null, 'X', 'X']
//   ])
// null

function check(a, b, c){
    // Basic comparison check for winning game
    return (a == b && a == c) ? true: false;
}

function ticTacToe(game){
    // Checks if a current game of tic tac toe has been won
    var board = game[0].concat(game[1]).concat(game[2]); // concats game to single array
    
    // Array for each win condition
    var wins = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],
                [2,4,6],[2,5,8],[3,4,5],[6,7,8]];
                
    for (var i = 0, n = wins.length; i < n; i++){
        // Iterates through each win condition on the board
        if (check(board[wins[i][0]], board[wins[i][1]], board[wins[i][2]])){
            return board[wins[i][0]]; // Returns winning value on win
        }
    }

    // Returns null for not winning game
    return null;
}