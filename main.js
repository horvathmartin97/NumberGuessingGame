function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
}

function getPlayerGuess() {

  const input = prompt("Guess a whole number between 1 and 100");
  if (input === null){
    const playerConfimation = confirm("Are you sure you want to quit?");
    if (playerConfimation === true){
      return "Game cancelled";
    }
    else {
      return getPlayerGuess();
    }
  } 
  const playerGuess = Number(input);
  if (Number.isInteger(playerGuess) && playerGuess >= 1 && playerGuess <= 100) {
    return playerGuess;
  }
  alert("Guess must be a whole number between 1 and 100");
  return getPlayerGuess();
}

function checkGuess(playerGuess, correctNumber) {
  if (playerGuess === correctNumber) {
    return "Correct!";
  } else if (playerGuess > correctNumber) {
    return "You were too high";
  } else {
    return "You were too low";
  }
}


function playGame() {
  const correctNumber = generateRandomNumber();
  let currentPoints = 100

  for (let i = 1; i <= 10; i++) {
    const playerGuess = getPlayerGuess();
    const result = checkGuess(playerGuess, correctNumber);

    if (playerGuess === "Game cancelled") {
      return alert("Game over");
    }

    if (result === "Correct!") {
      alert(`You guessed it in ${i} attempt(s)!, You scored ${currentPoints} points, Good job!`);
      return;
    } else {
      currentPoints -= 10
      alert(`${result}, you have: ${10 - i} attempts left!`);
    }
  }

  alert(`Game over! The correct number was ${correctNumber}`);
}

function introduce() {
  const isPlayer = confirm(
    "Hello there! Are you ready to play a number guessing game with me?",
  );

  if (!isPlayer) {
    alert("Goodbye");
    return;
  }

  const playerName = prompt("What is your name?") || "Player";
  alert(`Let's play a round, ${playerName}!`);
  playGame();
}
introduce();
