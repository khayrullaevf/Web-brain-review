


// // generate a random number between 1 and 100
// const secretNumber = Math.floor(Math.random() * 100) + 1;

// // keep track of the number of guesses
// let numGuesses = 0;

// // loop until the user guesses the correct number
// while (true) {
//   // ask the user for their guess
//   const guess = prompt("Guess a number between 1 and 100:");

//   // increment the number of guesses
//   numGuesses++;

//   // check if the guess is correct
//   if (parseInt(guess) === secretNumber) {
//     console.log("Congratulations, you guessed the number in " + numGuesses + " guesses!");
//     break;
//   }

//   // give the user a hint
//   if (parseInt(guess) < secretNumber) {
//     console.log("Too low, try again!");
//   } else {
//     console.log("Too high, try again!");
//   }
// }


// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user to guess the number
const userGuess = parseInt(prompt("I'm thinking of a number between 1 and 10. What is it?"));

// Check if the user's guess is correct
if (userGuess === randomNumber) {
  console.log("Congratulations! You guessed the number.");
} else {
  console.log(`Sorry, the number was ${randomNumber}.`);
}