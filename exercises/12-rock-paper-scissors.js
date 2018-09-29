// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'

function rockPaperScissors(p1,p2){
    // Basic Rock, Ppaer, Scissors game
    if(p1 == p2){ // checks for a draw first
        return "draw";
    }
    // Compares each possible opportunity of the game
    else if (p1 == "rock") {
        res = (p1 == "rock" && p2 == "scissors") ? 1 : 2;
    }
    else if (p1 == "scissors"){
        res = (p1 == "scissors" && p2 == "paper") ? 1 : 2;
    }
    else if (p1 == "paper"){
        res = (p1 == "paper" && p2 == "rock") ? 1 : 2;
    }

    // returns winning player
    return `player ${res}`;
}