

let randomNumber = parseInt(Math.random() * 100 + 1);

let submit = document.querySelector("#guessButton");
let userInput = document.querySelector("#guessInput");
let guessSlot = document.querySelector(".guesses");
let remmaning = document.querySelector(".last-result");
let lowOrHi = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".resultparas");
let resetButton = document.querySelector(".hidden");
let p = document.createElement("p");

let preGuesses = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    console.log(guess);

    validateGuesses(guess);
  });
}

function validateGuesses(guess) {
  if (isNaN(guess)) {
    alert("please enter avalid number");
  } else if (guess < 1) {
    alert("please enter a number greater than 1");
  } else if (guess > 100) {
    alert("please enter a number less  than 100");
  } else {
    preGuesses.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over . Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if(guess === randomNumber){
    displayMessage('congratulation , you guessed it Right')
    endGame()
  }
  else if (guess < randomNumber){
    displayMessage('Your guess is low ')
  }
  else if (guess > randomNumber){
    displayMessage('Your guess is high ')
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remmaning.innerHTML =`${11 - numGuess}`
}

function displayMessage(massage) {
  lowOrHi.innerHTML = `<h3> ${massage} </h3>`
}

function endGame(){
  userInput.value = "";
  userInput.setAttribute("disabled", '');
  resetButton.style.display = "block";
  playGame =  false;
  newGame();
  
}

function newGame(){
  resetButton.addEventListener("click", function(e){

    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuesses = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remmaning.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    playGame = true;

  })
}
