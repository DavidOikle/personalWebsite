/* Random number generator. */

const randomNumButton = document.getElementById("randomButton");
const randomNumDisplay = document.getElementById("randomNumberDisplay")

var count = 0;

randomNumberDisplay.innerHTML = count;

const handleRandomNum = () => {

  count = Math.floor(Math.random() * 10  ) + 1;
  randomNumberDisplay.innerHTML = count;
}

randomNumButton.addEventListener("click", handleRandomNum);

// Player Profession choice - updates playerProfession and playerHealth.

const warriorButton = document.getElementById("warriorButton");
const rogueButton = document.getElementById("rogueButton");
const wizardButton = document.getElementById("wizardButton");
const playerHealthDisplay = document.getElementById("pHealth")
const playerProfessionDisplay = document.getElementById("pProfession")

let playerHealth = null;
let playerProfession = '';

playerHealthDisplay.innerHTML = playerHealth;
playerProfessionDisplay.innerHTML = playerProfession;

const playerChoiceWarrior = () => {
  playerProfession = "Warrior";
  playerHealth = "10";
  playerHealthDisplay.innerHTML = playerHealth;
  playerProfessionDisplay.innerHTML = playerProfession;
};

const playerChoiceRogue = () => {

  playerProfession = "Rogue";
  playerHealth = "8";
  playerHealthDisplay.innerHTML = playerHealth;
  playerProfessionDisplay.innerHTML = playerProfession;
};

const playerChoiceWizard = () => {

  playerProfession = "Wizard";
  playerHealth = "6";
  playerHealthDisplay.innerHTML = playerHealth;
  playerProfessionDisplay.innerHTML = playerProfession;
};

warriorButton.addEventListener("click", playerChoiceWarrior);
rogueButton.addEventListener("click", playerChoiceWizard);
wizardButton.addEventListener("click", playerChoiceRogue);

/* Goal 2: inpliment a button that upon pressing, picks a random enemy from a list of options, and updates the enemy boxes in the HTML with the relevant information.

 const randomEnemyButton = document.getElementById("randomEnemyButton");
const randomEnemyDisplay = document.getElementById("randomEnemyDisplay");
*/

