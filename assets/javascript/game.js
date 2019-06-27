
// The whole alphabet
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables for scores and guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterGuessed = [];
var computerGuess = [];

window.onload = function () {
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(compGuess);
    console.log(computerGuess[0]);
}


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    letterGuessed.push(userGuess);
    console.log(computerGuess[0]);

    // Randomly chooses a choice from the options array. This is the Computer's guess.

    // Wins/Losses
    if ((userGuess === computerGuess[0]) && (guessesLeft > 0)) {
        wins++;
        guessesLeft = 9;
        letterGuessed.length = 0;
        computerGuess.length = 0;
        var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerGuess.push(compGuess);
        console.log(computerGuess[0]);
    }

    else if ((userGuess !== computerGuess[0]) && (guessesLeft > 0)) {
        guessesLeft = guessesLeft - 1;
    }

    else {
        losses++;
        guessesLeft = 9;
        letterGuessed.length = 0;
        computerGuess.length = 0;
        var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerGuess.push(compGuess);
        console.log(computerGuess[0]);
    }

    var html = 
    "<p>Wins: " + wins + "<p>" +
    "<p>Losses: " + losses + "<p>" +
    "<p>Guesses left: " + guessesLeft + "<p>" +
    "<p>Nope: " + letterGuessed + "<p>";
    // Hide the directions
    // directionsText.textContent = "";

document.querySelector("#game").innerHTML = html;
}