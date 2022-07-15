https://benfowler04.github.io/rock-paper-scissors/ - Using this as a guide as TBH, Odin project was kind of impossible for me on it's own. Thanks ben!

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("input");
    
    
function computerPlay() {
 let choices = ["rock", "paper", "scissors"]
 return choices[Math.floor(Math.random() * choices.length]
}

/*
Step 2: 
Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: 
"You Lose! Paper beats Rock"
*/

function playRound(playerSelection){
let computerSelection = computerPlayer()
let result = ""

if ((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")) 
{
 playerScore += 1
 {
  result = ("You Win!" + playerSelection + 
 }
 
}
}

/*
Step 3: 
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
*/
