const randomNumButton = document.getElementById("randomButton");
const randomNumDisplay = document.getElementById("randomNumberDisplay")

var count = 0;

randomNumberDisplay.innerHTML = count;

const handleRandomNum = () => {

  count = Math.floor(Math.random() * 10  ) + 1;
  randomNumberDisplay.innerHTML = count;
}

randomNumButton.addEventListener("click", handleRandomNum);

// Player Profession chocie

const warriorButton = document.getElementById("warriorButton");
const playerHealthDisplay = document.getElementById("pHealth")
const playerProfessionDisplay = document.getElementById("pProfession")

let playerProfession = '';

playerProfessionDisplay.innerHTML = playerProfession;


const playerProfessionChoice = () => {
  playerProfession = "warrior";
  playerProfessionDisplay.innerHTML = playerProfession;

}

warriorButton.addEventListener("click", playerProfessionChoice);

/* Goal 2: inpliment a button that upon pressing, picks a random enemy from a list of options, and updates the enemy boxes in the HTML with the relevant information.

 const randomEnemyButton = document.getElementById("randomEnemyButton");
const randomEnemyDisplay = document.getElementById("randomEnemyDisplay");
*/

/*
var playerHealth = playerProfession => {
  if (playerProfession === 'warrior') {
    return 10
  }
  else if (playerProfession === 'rouge') {
    return 8
  }
  else if (playerProfession === 'wizard') {
    return 6
  }
};

document.getElementById("pHealth").innerHTML = `${playerHealth(playerProfession)}`;
document.getElementById("pProfession").innerHTML = `${playerProfession}`;
*/

// Old player profession selection stuff
// let playerProfession = 'warrior';

// Goal 1: Allow the player to choose their class based on clicking one of three buttons: "Warrior" "Rouge" "Wizard". Hide the class choice buttons upon the player choosing one. 
// Make a function that listens for one of three button presses. When one is pressed, replace the relevant text and variables with the respective button.
