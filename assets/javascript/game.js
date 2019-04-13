// JavaScript for Bootcamp Homework #3
// Paul Raab
// Raab Enterprises LLC
// 4/12/2019
// ## Easier Assignment - Building a Psychic game
$(document).ready(function () {

    // Define game object so it can be passed by reference to functions
    var game = {
        wins: 0,
        losses: 0,
        guesses: 9,
        ipos: 0,
        az: [],
        compGuess: ""
    }

    // Fill az array with a-z
    var icnt = 0;
    for (var i = 97; i <= 122; i++) {
        game.az.push(String.fromCharCode(i));
        icnt++;
    }
    console.log(game.az);

    // Get initial computer guess
    game.ipos = Math.floor(Math.random() * 26);
    game.compGuess = game.az[game.ipos];
    console.log("CompGuess " + game.compGuess);

    // Check math random number function
    var iMin = 10000;
    var iMax = -10000;
    icnt = 0;
    while (icnt < 1000) {
        icnt++;
        var ival = Math.floor(Math.random() * 26);
        iMin = Math.min(ival, iMin);
        iMax = Math.max(ival, iMax);
    }
    console.log(iMin + " " + iMax);

    // Function to handle onkeydown event
    document.onkeydown = function (event) {

        // Get objects by Id from HTML for the various game elements
        var winsText = document.getElementById("wins");
        var lossesText = document.getElementById("losses");
        var guessesLeft = document.getElementById("guessesLeft");
        var guessesSoFar = document.getElementById("guessesSoFar");

        // Get the user key press
        var userKeyCode = String.fromCharCode(event.keyCode);
        var userKeyPress = event.key;

        console.log(userKeyPress + " " + game.compGuess);

        if (userKeyPress === game.compGuess) {
            alert("You won!! - your guess = " + userKeyPress + " comp guess = " + game.compGuess)
            game.guesses = 9;
            game.wins++;
            var guesses = document.getElementById("guessesLeft").innerHTML;
            guesses.innerHTML = game.guesses;
            document.getElementById("wins").innerHTML = game.wins;
            $("#guessesSoFar").text("");
            var i = Math.floor(Math.random() * 26);
            game.compGuess = game.az[i]
        } else if (game.guesses <= 1) {
            alert("You lost - your guess = " + userKeyPress + " comp guess = " + game.compGuess)
            game.guesses = 9;
            game.losses++;
            document.getElementById("guessesLeft").innerHTML = game.guesses;
            document.getElementById("losses").innerHTML = game.losses;
            $("#guessesSoFar").text("");
            var i = Math.floor(Math.random() * 26);
            game.compGuess = game.az[i];
        } else {
            game.guesses--;
            document.getElementById("guessesLeft").innerHTML = game.guesses;
            $("#guessesSoFar").append(" " + userKeyPress);
        }
    };

    // Track mouse clicks
    document.onclick = function (event) {
        console.log(event.clientX + " " + event.clientY);
    };

    // Track mouse wheel action
    document.onwheel = function (event) {
        console.log(event.clientX + " " + event.clientY);
    };

});