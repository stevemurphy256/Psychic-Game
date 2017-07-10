//Letter choices available
var computerLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesRemaining = 9;
var guessedLetters = [];
var letterToGuess = null;



//Lets the computer select a random letter from the available choices
var computerGuess = computerLetter[Math.floor(Math.random() * computerLetter.length)];

//Allows the user 9 guesses
// guesses = guesses || 9
var updateGuessesRemaining = function() {
  // Here we are grabbing the HTML element and setting it equal to the guessesRemaining. (i.e. guessesRemaining will get displayed in HTML)
  document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesRemaining;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerLetter[Math.floor(Math.random() * this.computerLetter.length)];
};
var updateGuessesSoFar = function() {
  // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
  document.querySelector('#lettersGuessed').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Function will be called when we reset everything
var reset = function() {
  totalGuesses = 9;
  guessesRemaining = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesRemaining();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesRemaining();


//When key is released it becomes the users guess
document.onkeypress = function(event) {
    guessesRemaining--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesRemaining();
  updateGuessesSoFar();

        if (guessesRemaining > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                reset();
            }
        }else if(guessesRemaining == 0){
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            // Then we'll call the reset. 
            reset();
        }
};

