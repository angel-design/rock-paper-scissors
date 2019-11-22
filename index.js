const score = document.querySelector('#score');
const buttons = document.querySelectorAll('button');
const winLose = document.querySelector('#win-lose');
const result = document.querySelector('#result');
const modified = [1,0,2]

function play(arr) {
  if (arr == 0) {
    return "rock"
  }  else if(arr == 1){
    return "paper"
  } else {
    return "scissors"
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', handleClick = (e) => {
    let computerPlay = Math.floor(Math.random() * 3)
    let youPlay = button.id
    let _you = ((youPlay + modified[youPlay]) % 3); //set _you to 1
    let _computer = ((computerPlay + modified[youPlay]) % 3); //add the same modifier as above
    if (_you > _computer) {
      score.textContent ++
      winLose.textContent = "You win!"
      result.textContent = "Your " + play(youPlay) + " beats the computer's " + play(computerPlay) + "!"
    } else if (_you < _computer) {
      winLose.textContent = "You lose!"
      result.textContent = "The computer's " + play(computerPlay) + " beats your " + play(youPlay) + "!"
    } else {
      winLose.textContent = "It's a draw!"
      result.textContent = "Both you and the computer played " + play(computerPlay) + "!"
    }
    
  })
});