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

/* Random Enemy Generator. Like the class choice generator, it at the moment can be clicked to give a new option each time. Eventually need to add in a part where it Hides the button upon being clicked, and then later on, shows the button once the enemy's health is 0 or lower. */

const randomEnemyButton = document.getElementById("randomEnemyButton");
const enemyHealthDisplay = document.getElementById("eHealth")
const enemyProfessionDisplay = document.getElementById("eProfession")

let enemyHealth = null;
let enemyProfession = '';

enemyHealthDisplay.innerHTML = enemyHealth;
enemyProfessionDisplay.innerHTML = enemyProfession;



const randomEnemyFunction = () => {
      const randomEnemyNumber = Math.floor(Math.random() * 3) 
          if (randomEnemyNumber == 0){
            enemyProfession = "Bandit"
              enemyHealth = "8";
          enemyHealthDisplay.innerHTML = enemyHealth;
          enemyProfessionDisplay.innerHTML = enemyProfession;
          }
          else if (randomEnemyNumber == 1){
            enemyProfession = "Brute"
                          enemyHealth = "10";
          enemyHealthDisplay.innerHTML = enemyHealth;
          enemyProfessionDisplay.innerHTML = enemyProfession;
          }
          else if (randomEnemyNumber == 2){
            enemyProfession = "Necromancer"
            enemyHealth = "6";
            enemyHealthDisplay.innerHTML = enemyHealth;
            enemyProfessionDisplay.innerHTML = enemyProfession;
          }
}
randomEnemyButton.addEventListener("click", randomEnemyFunction);


