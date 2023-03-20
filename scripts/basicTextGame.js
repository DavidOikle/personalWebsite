//Variables

var playerDamageRoll = 0;
var enemyDamageRoll = 0;
var playerHealth = 0;
var playerProfession = '';
var playerMaxHealth = 0;
var playerExperience = 0;
var playerMaxExperience = 10;
var playerGold = 0;
let enemyHealth = 0;
let enemyProfession = '';
let playerLevel = 1;


//DOM imports from HTML into JS
const randomNumAttack = document.getElementById("attackButton");
const warriorButton = document.getElementById("warriorButton");
const rogueButton = document.getElementById("rogueButton");
const wizardButton = document.getElementById("wizardButton");
const playerHealthDisplay = document.getElementById("pHealth");
const playerProfessionDisplay = document.getElementById("pProfession");
const playerMaxHealthDisplay = document.getElementById("pMaxHealth");
const playerMaxExperienceDisplay = document.getElementById("pMaxExperience");
const playerExperienceDisplay = document.getElementById("pExperience");
const playerGoldDisplay = document.getElementById("pGold");
const randomEnemyButton = document.getElementById("randomEnemyButton");
const enemyHealthDisplay = document.getElementById("eHealth")
const enemyMaxHealthDisplay = document.getElementById("eMaxHealth")
const enemyProfessionDisplay = document.getElementById("eProfession")
const playerLevelDisplay = document.getElementById("pLevel")





// Combat Functions

// Parent combat function. Write the variables elsewhere, and then add to this. 
function combat() {
  handleAttack();
  enemyAttack();
  playerExperienceCheck()
}

//Individual combat functions

let enemyAttack = () => {
   enemyDamageRoll = Math.floor(Math.random() * 4  ) + 1;
   playerHealth = playerHealth - enemyDamageRoll;
   playerHealthDisplay.innerHTML = playerHealth;

     if (playerHealth <= 0) {
  playerHealth = null;
  playerMaxHealth = null;
  playerProfession = '';
  playerHealthDisplay.innerHTML = playerHealth;
  playerMaxHealthDisplay.innerHTML = playerMaxHealth;
  playerProfessionDisplay.innerHTML = playerProfession;
}
 enemyCombatLog.innerHTML = `The enemy strikes you ${enemyDamageRoll} damage.`;
}

let handleAttack = () => {
  playerDamageRoll = Math.floor(Math.random() * 10  ) + 1;
  enemyHealth = enemyHealth - playerDamageRoll;
  enemyHealthDisplay.innerHTML = enemyHealth;

  // Resets the Enemy Health and Enemy Profession boxes when the enemy's health hits 0 or less.
  if (enemyHealth <= 0) {
  enemyHealth = null;
  enemyProfession = '';
  enemyHealthDisplay.innerHTML = enemyHealth;
  enemyProfessionDisplay.innerHTML = enemyProfession;
   document.getElementById("randomEnemyButton").style.visibility = "visible";
  playerExperience++;
   playerExperienceDisplay.innerHTML = playerExperience;

  playerHealth = playerHealth + playerMaxHealth * Math.round(0.5);
  if (playerHealth > playerMaxHealth) {
    playerHealth = playerMaxHealth
  }
}
 playerCombatLog.innerHTML = `You strike for ${playerDamageRoll} damage.`;
}


let playerExperienceCheck = () => {
   if (playerExperience >= playerMaxExperience) {
      playerExperience = 0;
      playerLevel++;
      playerMaxHealth++;
      playerMaxExperience = (playerMaxExperience + playerLevel) * 2;
      playerHealth = playerMaxHealth;

      playerExperienceDisplay.innerHTML = 0;
      playerMaxExperienceDisplay.innerHTML = playerMaxExperience;
      playerMaxHealthDisplay.innerHTML = playerMaxHealth;
      playerHealthDisplay.innerHTML = playerMaxHealth;
      playerLevelDisplay.innerHTML = playerLevel;
   }
}


//Player choice functions

const playerChoiceWarrior = () => {
  playerProfession = "Warrior";
  playerHealth = 10;
  playerMaxHealth = 10;
  playerHealthDisplay.innerHTML = playerHealth;
  playerMaxHealthDisplay.innerHTML = playerMaxHealth;
  playerProfessionDisplay.innerHTML = playerProfession;
  document.getElementById("warriorButton").style.visibility = "hidden";
  document.getElementById("rogueButton").style.visibility = "hidden";
  document.getElementById("wizardButton").style.visibility = "hidden";
};

const playerChoiceRogue = () => {

  playerProfession = "Rogue";
  playerHealth = 8;
  playerMaxHealth = 8;
  playerHealthDisplay.innerHTML = playerHealth;
   playerMaxHealthDisplay.innerHTML = playerMaxHealth;
  playerProfessionDisplay.innerHTML = playerProfession;
  document.getElementById("warriorButton").style.visibility = "hidden";
  document.getElementById("rogueButton").style.visibility = "hidden";
  document.getElementById("wizardButton").style.visibility = "hidden";
};

const playerChoiceWizard = () => {

  playerProfession = "Wizard";
  playerHealth = 6;
  playerMaxHealth = 6;
  playerHealthDisplay.innerHTML = playerHealth;
   playerMaxHealthDisplay.innerHTML = playerMaxHealth;
  playerProfessionDisplay.innerHTML = playerProfession;
  document.getElementById("warriorButton").style.visibility = "hidden";
  document.getElementById("rogueButton").style.visibility = "hidden";
  document.getElementById("wizardButton").style.visibility = "hidden";
};

//Event Listeners

warriorButton.addEventListener("click", playerChoiceWarrior);
rogueButton.addEventListener("click", playerChoiceRogue);
wizardButton.addEventListener("click", playerChoiceWizard);
randomNumAttack.addEventListener("click", combat);

//Generate enemy function

const randomEnemyFunction = () => {
      const randomEnemyNumber = Math.floor(Math.random() * 3) 
          if (randomEnemyNumber == 0){
            enemyProfession = "Bandit"
            enemyHealth = "8";
            enemyMaxHealth = "8";
          }
          else if (randomEnemyNumber == 1){
            enemyProfession = "Brute"
            enemyHealth = "10";
            enemyMaxHealth = "10";
          }
          else if (randomEnemyNumber == 2){
            enemyProfession = "Necromancer"
            enemyHealth = "6";
            enemyMaxHealth = "6";
          }
    document.getElementById("randomEnemyButton").style.visibility = "hidden";
    enemyHealthDisplay.innerHTML = enemyHealth;
    enemyMaxHealthDisplay.innerHTML = enemyMaxHealth;
    enemyProfessionDisplay.innerHTML = enemyProfession;
}
randomEnemyButton.addEventListener("click", randomEnemyFunction);




/*
Factory functions inital setup.

function enemyFactory(enemyProfession, enemyHealth, enemyMaxHealth){
  return {
    enemyProfession,
    enemyHealth,
    enemyMaxHealth,
  }
}


const newEnemy = enemyFactory('Bandit', 8, 8)


*/

