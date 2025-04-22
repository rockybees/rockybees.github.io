let randomNumber;
let attempts = 0;

function startGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('result').textContent = '';
  document.getElementById('attempts').textContent = 'Attempts: 0';
  document.getElementById('playAgain').style.display = 'none';
}

document.getElementById('submitGuess').addEventListener('click', function() {
  const userGuess = parseInt(document.getElementById('guess').value);
  attempts++;
  document.getElementById('attempts').textContent = `Attempts: ${attempts}`;

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    document.getElementById('result').textContent = 'Please enter a number between 1 and 100.';
  } else if (userGuess < randomNumber) {
    document.getElementById('result').textContent = 'Too low! Try again.';
  } else if (userGuess > randomNumber) {
    document.getElementById('result').textContent = 'Too high! Try again.';
  } else {
    document.getElementById('result').textContent = `Congratulations! You guessed it.`;
    document.getElementById('playAgain').style.display = 'block';
  }
});

document.getElementById('playAgain').addEventListener('click', function() {
  startGame();
  document.getElementById('guess').value = '';
});

// Start the game when the page loads
startGame();
