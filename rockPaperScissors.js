/*
Step 1: Make a function called "computerPlay" that will randomly return "Rock" "Paper" or "Scissors"
*/

function computerPlay() {
 let choices = ["rock", "paper", "scissors"]
 return choices[Math.floor(Math.random() * choices.length]
}
