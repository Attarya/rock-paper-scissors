// Get the buttons
const rockBtn = document.querySelector('.rock-button');
const paperBtn = document.querySelector('.paper-button');
const scissorsBtn = document.querySelector('.scissors-button');

// Add event listeners to the buttons
rockBtn.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const result = playRound('rock', computerSelection);
  console.log(result);
});

paperBtn.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const result = playRound('paper', computerSelection);
  console.log(result);
});

scissorsBtn.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const result = playRound('scissors', computerSelection);
  console.log(result);
});

const result = document.querySelector(".result");


