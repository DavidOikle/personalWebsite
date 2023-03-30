// JS imports from other files


import {enemyArrayExport} from "./enemyList.js"    

//Variables

var playerDamageRoll = 0;
var enemyDamageRoll = 0;
var playerHealth = 0;
var playerProfession = '';
var playerMaxHealth = 0;
var playerExperience = 0;
var playerMaxExperience = 10;
var playerGold = 0;
var enemyProfession = '';
var playerLevel = 1;
var martial = 0;
var guile = 0;
var wizardry = 0
var enemyArray = enemyArrayExport;
var enemyHealth = null;
var enemyMaxHealth = null;




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
const playerMartialDisplay = document.getElementById("martial")
const playerGuileDisplay = document.getElementById("guile")
const playerWizardryDisplay = document.getElementById("wizardry")
const fullScreenMenu = document.getElementsByClassName("fullScreenMenu")[0];
const testButton = document.getElementById("testButton");
let fullScreenMenuTop = document.getElementsByClassName("fullScreenMenuTop")[0];
let fullScreenMenuMiddle = document.getElementsByClassName("fullScreenMenuMiddle")[0];
let fullScreenMenuBottom = document.getElementsByClassName("fullScreenMenuBottom")[0];





// Combat Functions

// Parent combat function. Write the variables elsewhere, and then add to this. 
function combat() {
  handleAttack();
  enemyAttack();
  playerExperienceCheck()
}

//Individual combat functions

/* Parent player attack function that is filled by the other functions\
   
    Parent variable of "playerDamage = "Null""
parentAttack = () => {
  
  enemyHealth = (enemyHealth - playerDamage);
  enemyHealthDisplay.innerHTML = enemyHealth;
      
  if (enemyHealth <= 0) {
  enemyHealth = null;
  enemyMaxHealth = null;
  enemyProfession = '';
  enemyHealthDisplay.innerHTML = enemyHealth;
  enemyMaxHealthDisplay.innerHTML = enemyMaxHealth;
  enemyProfessionDisplay.innerHTML = enemyProfession;
  document.getElementById("randomEnemyButton").style.visibility = "visible";
  document.getElementById("attackButton").style.visibility = "hidden";
  playerExperience++;
  playerExperienceDisplay.innerHTML = playerExperience;

  playerHealth = playerHealth + playerMaxHealth * Math.round(0.5);
  if (playerHealth > playerMaxHealth) {
    playerHealth = playerMaxHealth
  }
}
 playerCombatLog.innerHTML = `You strike for ${playerDamageRoll} damage.`;
}
 */








var randomEnemyFunction = () => {
    var randomEnemy = enemyArray[Math.floor(Math.random() * enemyArray.length)];
    enemyProfession = randomEnemy[0];
    enemyHealth = randomEnemy[1];
    enemyMaxHealth = randomEnemy[1];
  
    document.getElementById("randomEnemyButton").style.visibility = "hidden";
    enemyHealthDisplay.innerHTML = enemyHealth;
    enemyMaxHealthDisplay.innerHTML = enemyMaxHealth;
    enemyProfessionDisplay.innerHTML = enemyProfession;
    console.log("test")
      document.getElementById("attackButton").style.visibility = "visible";

}





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

/*
let meleeAttack = () {
   playerDamageRoll = Math.floor(Math.random() * 4  ) + 1 + (martial - 10)
   console.log(playerDamageRoll)
}
*/

//parent appply player damage to enemy function
let handleAttack = () => {
  playerDamageRoll = Math.floor(Math.random() * 4  ) + 1 + (martial - 10)
  if (playerDamageRoll < 1) {
    playerDamageRoll = 1;
  };
  enemyHealth = (enemyHealth - playerDamageRoll);
  enemyHealthDisplay.innerHTML = enemyHealth;

  // Resets the Enemy Health and Enemy Profession boxes when the enemy's health hits 0 or less.
  
/*   



let fireBall = () => {
  if (playerMana > 0){
    playerMana++;
  playerDamageRoll = Math.floor(Math.random() * 4  ) + 1 + (wizardy - 10)
  if (playerDamageRoll < 1) {
    playerDamageRoll = 1;
  };
  enemyHealth = (enemyHealth - playerDamageRoll);
  enemyHealthDisplay.innerHTML = enemyHealth;
}

let rangedAttack = () => {

    playerDamageRoll = Math.floor(Math.random() * 4  ) + 1 + (guile - 10)
  if (playerDamageRoll < 1) {
    playerDamageRoll = 1;
  };
  enemyHealth = (enemyHealth - playerDamageRoll);
  enemyHealthDisplay.innerHTML = enemyHealth;
}




*/












  if (enemyHealth <= 0) {
  enemyHealth = null;
  enemyMaxHealth = null;
  enemyProfession = '';
  enemyHealthDisplay.innerHTML = enemyHealth;
  enemyMaxHealthDisplay.innerHTML = enemyMaxHealth;
  enemyProfessionDisplay.innerHTML = enemyProfession;
  document.getElementById("randomEnemyButton").style.visibility = "visible";
  document.getElementById("attackButton").style.visibility = "hidden";
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
  martial = 14;
  guile = 10
  wizardry = 8;
  playerHealthDisplay.innerHTML = playerHealth;
  playerMaxHealthDisplay.innerHTML = playerMaxHealth;
  playerProfessionDisplay.innerHTML = playerProfession;
  playerMartialDisplay.innerHTML = martial;
  playerGuileDisplay.innerHTML = guile;
  playerWizardryDisplay.innerHTML = wizardry;
  document.getElementsByClassName("fullScreenMenu")[0].style.visibility = 'hidden';
};

const playerChoiceRogue = () => {

  playerProfession = "Rogue";
  playerHealth = 8;
  playerMaxHealth = 8;
  martial = 10;
  guile = 14;
  wizardry = 8;
  playerHealthDisplay.innerHTML = playerHealth;
  playerMaxHealthDisplay.innerHTML = playerMaxHealth;
  playerProfessionDisplay.innerHTML = playerProfession;
  playerMartialDisplay.innerHTML = martial;
  playerGuileDisplay.innerHTML = guile;
  playerWizardryDisplay.innerHTML = wizardry;
  document.getElementsByClassName("fullScreenMenu")[0].style.visibility = 'hidden';
};

const playerChoiceWizard = () => {

  playerProfession = "Wizard";
  playerHealth = 6;
  playerMaxHealth = 6;
  martial = 8;
  guile = 10;
  wizardry = 14;
  playerHealthDisplay.innerHTML = playerHealth;
  playerMaxHealthDisplay.innerHTML = playerMaxHealth;
  playerProfessionDisplay.innerHTML = playerProfession;
  playerMartialDisplay.innerHTML = martial;
  playerGuileDisplay.innerHTML = guile;
  playerWizardryDisplay.innerHTML = wizardry;
  document.getElementsByClassName("fullScreenMenu")[0].style.visibility = 'hidden';
};


//Generate enemy function





/*let menuOne = () => {
  
  fullScreenMenuTop.innerHTML = "Basic Web Game"
  fullScreenMenuMiddle.innerHTML = "Hello my name is David, and welcome to the Basic Web Game!"
  "This is a simple little project I'm using as a means of learning web development in my spare time. Be sure to check back regularly, as I continually add more to this project as I the learn the quirks and fun of HTML, CSS, JavaScript, and more!"
  "Last Updated: March 27th 2023"
  "To do: Add player portraits, revamp some code, and give other classes things to do other than attacking."
  "For now though, what profession would you like to play as?"
  fullScreenMenuBottom.innerHTML = "MenuOne Bottom Text"
} */





let menuTwo = () => {
    document.getElementsByClassName("fullScreenMenu")[0].style.visibility = 'visible';
  fullScreenMenuTop.innerHTML = "Choose a skill";
  fullScreenMenuMiddle.innerHTML = "MenuOne Middle Text";
  fullScreenMenuBottom.innerHTML = "MenuOne Bottom Text";
}






//Event Listeners

warriorButton.addEventListener("click", playerChoiceWarrior);
rogueButton.addEventListener("click", playerChoiceRogue);
wizardButton.addEventListener("click", playerChoiceWizard);
randomNumAttack.addEventListener("click", combat);
randomEnemyButton.addEventListener("click", randomEnemyFunction);
testButton.addEventListener("click", menuTwo);









